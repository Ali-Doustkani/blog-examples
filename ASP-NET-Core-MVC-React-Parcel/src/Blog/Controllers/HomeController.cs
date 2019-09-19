using Blog.Model;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Blog.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index() =>
        View(MemoryStore.Store);

    public IActionResult Post(int id) =>
        View(MemoryStore.Store.Single(x => x.Id == id));
  }
}