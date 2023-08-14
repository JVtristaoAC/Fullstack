using Microsoft.AspNetCore.Mvc;
using WorkUp.Models;

namespace WorkUp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        [HttpGet]
        public string GetActivity()
        {
            return "hello word";
        }

        [HttpGet("{id}")]
        public IEnumerable<Activity> GetActivity(int id)
        {
            return new List<Activity>()
            {
            };
        }

        [HttpPost]
        public string PostActivity(Activity activity)
        {
            return "hello word";
        }

        [HttpPut("{id}")]
        public string PutActivity(int id)
        {
            return "hello word";
        }

        [HttpDelete("{id}")]
        public string DeleteActivity(int id)
        {
            return "hello word";
        }
    }
}
