
using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;

namespace DatingApp.API.DatingApp
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        // we call this Values because it will be representing our table in SQL
        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Photo> Photos { get; set;}
    }
}