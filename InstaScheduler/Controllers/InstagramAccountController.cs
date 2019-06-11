using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using InstaScheduler.Models;

using System.Threading.Tasks;
using InstagramApiSharp.API;
using InstagramApiSharp.API.Builder;
using InstagramApiSharp.Classes;
using InstagramApiSharp.Classes.Models;
using System.Net;

namespace InstaScheduler.Controllers
{

    
    [RoutePrefix("api/Instagram")]
    public class InstagramAccountController : ApiController
    {
        static IInstaApi api = null;

        public InstagramAccountController()
        {
            
        }

        [HttpPost]
        [Route("Auth")]
        public async Task<IHttpActionResult> Login([FromBody]UserModel user)
        {
            UserSessionData data = new UserSessionData();


            data.UserName = user.Username;
            data.Password = user.Password;

       
            HttpClientHandler handler = new HttpClientHandler()
            {
                Proxy = new WebProxy(),
                UseProxy = true,
            };


             api = InstaApiBuilder.CreateBuilder()
                .UseHttpClientHandler(handler)
                .SetUser(data)
                .Build();

            var login_request = await api.LoginAsync();
           
         
 
            if (login_request.Succeeded)
            {
                var user_data = await api.GetCurrentUserAsync();
                HttpContext.Current.Session["api"] = api;
                return Ok();
            }
            else
            {
                return BadRequest();
            }   
        }




        [HttpPost]
        [Route("createpost")]
        public async Task<HttpResponseMessage> Post()
        {
            var httpRequest = HttpContext.Current.Request;

            string content = httpRequest.Form["content"];
            if(content == null)
            {
                content = "";
            }



            if (httpRequest.Files.Count > 0)
            {
                

                var postedFile = httpRequest.Files[0];
                string filePath = HttpContext.Current.Server.MapPath("~/InstagramPhotos/" + postedFile.FileName);
                postedFile.SaveAs(filePath);


                var mediaImage = new InstaImageUpload
                {
                    // leave zero, if you don't know how height and width is it.
                    Height = 0,
                    Width = 0,
                    Uri = @"" + filePath
                };

                //IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
                if(api == null || api.IsUserAuthenticated == false)
                {
                    return Request.CreateResponse(HttpStatusCode.Unauthorized);
                }

                var result = await api.MediaProcessor.UploadPhotoAsync(mediaImage, content);




                return Request.CreateResponse(HttpStatusCode.Created);
            }

            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }


        
       /* public async Task<IHttpActionResult> PostImage()
        {


            new InstaImageUpload
            {
            }


            
            var mediaImage = new InstaImageUpload
            {
                // leave zero, if you don't know how height and width is it.
                Height = 1080,
                Width = 1080,
                Uri = @"C:\Photos\jeremy-bishop-1595441-unsplash.jpg"
            };

            IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
            
            var user_data = await api.GetCurrentUserAsync();
            return Ok();
        }*/

        [HttpGet]
        [Route("IsAuth")]
        public bool isAuthententicated()
        {

         
            IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
            if(api == null)
            {
                return false;
            }

            bool user_authentication = api.IsUserAuthenticated;
            return user_authentication;
        }




        [HttpPost]
        [Route("Logout")]
        public async Task<IHttpActionResult> Logout()
        {

            //var result = await api.LogoutAsync();
            return Ok();
        }





    }
}