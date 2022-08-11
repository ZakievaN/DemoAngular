using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoAngular.DAL.Context
{
    public static class DbInitializer
    {
        public static void Initialize(DemoAngularDB context)
        {
            context.Database.EnsureCreated();

            if (!context.Users.Any())
            {
                context.Users.AddRange(TestData.TestData.Users);
                context.SaveChanges();
            }

            if (!context.Products.Any())
            {
                context.Products.AddRange(TestData.TestData.Products);
                context.SaveChanges();
            }


        }
    }
}
