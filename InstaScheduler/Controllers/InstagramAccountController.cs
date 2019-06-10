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
                Proxy = new WebProxy("http://localhost:50569"),
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
        [Route("PostImage")]
        public async Task<IHttpActionResult> PostImage()
        {

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
        }

        [HttpGet]
        [Route("IsAuth")]
        public bool isAuthententicated()
        {

         
            IInstaApi api = (IInstaApi)HttpContext.Current.Session["api"];
            if(api == null)
            {
                return true;
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