using DemoAngular.Domain.Entities;
using System.Collections.Generic;

namespace DemoAngular.DAL.TestData
{
    internal static class TestData
    {
        private static readonly List<Product> products = new List<Product>()
        {
            new Product {
                Name = "Стрижка",
                Description = "Стрижка в таком-то салоне у мастера такого-то уровня",
                Price = 15
            },
            new Product {
                Name = "Плавание",
                Description = "Абонемент на месяц плавания в таком-то центре",
                Price = 49
            },
            new Product {
                Name = "Английский язык",
                Description = "10 занятий английского языка с репетитором",
                Price = 150
            },
            new Product {
                Name = "Уикэнд",
                Description = "Траты на выходные",
                Price = 100
            },
        };

        private static readonly List<User> users = new List<User>()
        {
            new User {
                Login = "Admin",
                Password = "Admin",
                Role = 1
            },
            new User {
                Login = "User",
                Password = "User",
                Role = 0
            }
        };

        public static List<Product> Products { get; } = products;

        public static List<User> Users { get; } = users;
    }
}
