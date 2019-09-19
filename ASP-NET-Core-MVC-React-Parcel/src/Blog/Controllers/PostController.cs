using Blog.Model;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Blog.Controllers
{
  [ApiController]
  [Route("/api/post")]
  public class PostController : ControllerBase
  {
    [HttpGet]
    public IActionResult GetAll() =>
        Ok(MemoryStore.Store);

    [HttpGet("{id}")]
    public IActionResult Get(int id) =>
        Ok(MemoryStore.Store.Single(x => x.Id == id));

    [HttpPut]
    public IActionResult SaveChanges(Post post)
    {
      if (post.Id == 0)
      {
        MemoryStore.Add(post);
        return CreatedAtAction(nameof(Get), new { Id = post.Id });
      }
      MemoryStore.Update(post);
      return Ok();
    }
  }
}