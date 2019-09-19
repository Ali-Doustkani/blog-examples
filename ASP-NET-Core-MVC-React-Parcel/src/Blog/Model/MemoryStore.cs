using System.Collections.Generic;
using System.Linq;

namespace Blog.Model
{
  public static class MemoryStore
  {
    static MemoryStore()
    {
      Store = new List<Post>{
        new Post
        {
          Id = 1,
          Title = "Being friend with Regular Expressions",
          Tags = ".net, C#, regex",
          Content = "<p>Regular expressions are used for string processing.</p>"
        },
        new Post
        {
          Id = 2,
          Title = "Using React Hooks",
          Tags = "front-end, react, js",
          Content = "<p>You can use react hooks to get the most out of functions in react.</p>"
        }
      };
    }

    public static readonly List<Post> Store;

    public static void Add(Post post)
    {
      post.Id = Store.Max(x => x.Id) + 1;
      Store.Add(post);
    }

    public static void Update(Post post)
    {
      var target = Store.Single(x => x.Id == post.Id);
      target.Title = post.Title;
      target.Tags = post.Tags;
      target.Content = post.Content;
    }

    public static void Remove(int id)
    {
      Store.RemoveAll(x => x.Id == id);
    }
  }
}