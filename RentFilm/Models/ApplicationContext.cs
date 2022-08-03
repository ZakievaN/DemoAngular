using Microsoft.EntityFrameworkCore;
using RentFilm.Domain.Entities;

namespace RentFilm.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
