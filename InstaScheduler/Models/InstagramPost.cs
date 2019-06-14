using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaScheduler.Models {
    public class InstagramPost {
        public int LikesCount { get; set; }
        public int ViewCount { get; set; }
        public string CommentsCount { get; set; }
        public string ImageUriSmall { get; set; }
        public string ImageUriLarge { get; set; }
        public string DatePosted { get; set; }
        public string TimePosted { get; set; }
        public string Description { get; set; }
    }
}