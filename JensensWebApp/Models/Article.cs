using System;
using System.Collections.Generic;

namespace JensensWebApp.Models
{
    public class Article
    {
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Link { get; set; }
        public DateTime Published { get; set; }
        public List<string> Topic { get; set; }
    }
}
