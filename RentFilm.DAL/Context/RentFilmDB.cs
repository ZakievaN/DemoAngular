using Microsoft.EntityFrameworkCore;
using RentFilm.Domain.Entities;
using System.Linq;

namespace RentFilm.DAL.Context
{
    public class RentFilmDB : DbContext
    {
        public RentFilmDB(DbContextOptions<RentFilmDB> options)
            : base(options)
        {
            if (!Users.Any())
            {
                Users.AddRange(TestData.TestData.Users);
                SaveChanges();
            }

            if (!Products.Any())
            {
                Products.AddRange(TestData.TestData.Products);
                SaveChanges();
            }
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
