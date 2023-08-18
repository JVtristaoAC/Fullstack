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
        public IEnumerable<Activity> GetActivities()
        {
            return _context.Activities;
        }

        [HttpGet("{id}")]
        public Activity? GetActivity(int id)
        {
            return _context.Activities.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public Activity PostActivity(Activity activity)
        {
           _context.Activities.Add(activity);
           _context.SaveChanges();

           return activity;
        }

        [HttpPut]
        public IEnumerable<Activity> PutActivity(Activity newActivity)
        {
            if (_context.Activities.Any(x => x.Id == newActivity.Id))
            {
                _context.Update(newActivity);
                _context.SaveChanges();
            }

            return _context.Activities;
        }

        [HttpDelete("{id}")]
        public IEnumerable<Activity> DeleteActivity(int id)
        {
            var Activity = _context.Activities.FirstOrDefault(x => x.Id == id);

            if(Activity != null)
            {
                _context.Remove(Activity);
                _context.SaveChanges();
            }

            return _context.Activities;
        }
    }
}
