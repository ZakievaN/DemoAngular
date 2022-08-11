using Microsoft.EntityFrameworkCore;
using DemoAngular.Domain.Entities;
using System.Linq;

namespace DemoAngular.DAL.Context
{
    public class DemoAngularDB : DbContext
    {
        public DemoAngularDB(DbContextOptions<DemoAngularDB> options)
            : base(options)
        {
            
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
