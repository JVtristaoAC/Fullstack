using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace WorkUp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Activity> Activities { get; set; }
    }
}
