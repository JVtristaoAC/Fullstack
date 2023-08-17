using Microsoft.AspNetCore.Mvc;
using WorkUp.Data;
using WorkUp.Models;

namespace WorkUp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly DataContext _context;

        public ActivityController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Activity> GetActivity()
        {
            return _context.Activities;
        }

        [HttpGet("{id}")]
        public Activity? GetActivity(int id)
        {
            return _context.Activities.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public Task PostActivity(Activity activity)
        {
           _context.Activities.Add(activity);
           _context.SaveChanges();

           return Task.CompletedTask;
        }

        [HttpPut]
        public Task PutActivity(Activity newActivity)
        {
            if (_context.Activities.Any(x => x.Id == newActivity.Id))
            {
                _context.Update(newActivity);
                _context.SaveChanges();
            }

            return Task.CompletedTask;
        }

        [HttpDelete("{id}")]
        public Task DeleteActivity(int id)
        {
            var Activity = _context.Activities.FirstOrDefault(x => x.Id == id);

            if(Activity != null)
            {
                _context.Remove(Activity);
                _context.SaveChanges();
            }

            return Task.CompletedTask;
        }
    }
}
