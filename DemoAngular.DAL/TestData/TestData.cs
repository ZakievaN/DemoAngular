using DemoAngular.Domain.Entities;
using System.Collections.Generic;

namespace DemoAngular.DAL.TestData
{
    internal static class TestData
    {
        private static readonly List<Product> products = new List<Product>()
        {
            new Product {
                Name = "Interstellar",
                Description = "A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.",
                Price = 51,
                ImageUrl = "/assets/img/interstellar.jpg"
            },
            new Product {
                Name = "Tenet",
                Description = "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
                Price = 49,
                ImageUrl = "/assets/img/tenet.jpg"
            }
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
