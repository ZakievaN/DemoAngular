using Microsoft.EntityFrameworkCore;
using RentFilm.Domain.Entities;

namespace RentFilm.DAL.Context
{
    public class RentFilmDB : DbContext
    {
        public RentFilmDB(DbContextOptions<RentFilmDB> options)
            : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
