using Microsoft.EntityFrameworkCore;
using WorkUp.Models;

namespace WorkUp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        { 
        }
        public DbSet<Activity> Activities { get; set; }
    }
}
