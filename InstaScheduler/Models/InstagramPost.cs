using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaScheduler.Models {
    public class InstagramPost {
        public int LikeCount { get; set; }
        public int ViewCount { get; set; }
        public string ImageUri { get; set; }
    }
}