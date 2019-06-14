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


             IInstaApi api = InstaApiBuilder.CreateBuilder()
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


        [HttpGet]
        [Route("posts")]
        public async Task<List<InstagramPost>> GetPosts()
        {
            IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
            if (api == null || !api.IsUserAuthenticated)
            {
                return null;
            }

            List<InstagramPost> results = null;
            var user = await api.GetCurrentUserAsync();
            if (!user.Succeeded) {
                return null;
            }

            var mediaCollections = await api.UserProcessor.GetUserMediaAsync(user.Value.UserName, InstagramApiSharp.PaginationParameters.MaxPagesToLoad(2));
            if (!mediaCollections.Succeeded)
            {
                return null;
            }


            results = new List<InstagramPost>();
            for (int i = 0; i<mediaCollections.Value.Count; i++)
            {
                InstagramPost temp = new InstagramPost();
                //temp.ImageUri = mediacollections.Value[i].Images[1].Uri;
                //temp.ViewCount = mediacollections.Value[i].ViewCount;
                //temp.
                results.Add(new InstagramPost
                {
                    LikesCount = mediaCollections.Value[i].LikesCount,
                    ViewCount = mediaCollections.Value[i].ViewCount,
                    CommentsCount = mediaCollections.Value[i].CommentsCount,
                    ImageUriSmall = mediaCollections.Value[i].Images[1].Uri,
                    ImageUriLarge = mediaCollections.Value[i].Images[0].Uri,
                    DatePosted = mediaCollections.Value[i].TakenAt.ToShortDateString(),
                    TimePosted = mediaCollections.Value[i].TakenAt.ToShortTimeString(),
                    Description = mediaCollections.Value[i].Caption.Text
                });
            }


            return results;
        }

        [HttpGet]
        [Route("profile")]
        public async Task<InstagramProfile> GetProfile()
        {

            IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
            InstagramProfile result = null;
            if(api == null || !api.IsUserAuthenticated)
            {
                return null;
            }

            var user = await api.GetCurrentUserAsync();
            result = new InstagramProfile
            {
                FullName = user.Value.FullName,
                Username = user.Value.UserName,
                ProfileImageUri = user.Value.ProfilePicture
            };




            return result;
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

                IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
                if(api == null || api.IsUserAuthenticated == false)
                {
                    return Request.CreateResponse(HttpStatusCode.Unauthorized);
                }

                var result = await api.MediaProcessor.UploadPhotoAsync(mediaImage, content);


                //var collections = await api.GetCurrentUserAsync();
                //var mediacollections = await api.UserProcessor.GetUserMediaAsync(collections.Value.UserName, InstagramApiSharp.PaginationParameters.MaxPagesToLoad(1));
                
                //mediacollections.Value[0].Like



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
            IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
            if (api == null || api.IsUserAuthenticated == false)
            {
                return Ok();
            }


            var result = await api.LogoutAsync();
            return Ok();
        }





    }
}