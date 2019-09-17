using System.Linq;
using System.Collections.Generic;

namespace Blog.Model
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Tags { get; set; }
        public string Content { get; set; }

        public IEnumerable<string> GetTags() =>
            string.IsNullOrEmpty(Tags) ?
            Enumerable.Empty<string>() :
            Tags.Split(',').Select(x => x.Trim());
    }
}