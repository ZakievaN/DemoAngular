using RentFilm.Domain.Entities;
using System;
using System.Collections.Generic;

namespace RentFilm.TestData
{
    internal static class TestData
    {
        private static readonly List<Film> films = new List<Film>()
        {
            new Film { Id = Guid.NewGuid(), Name = "Interstellar", Descriptor = "A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival." },
            new Film { Id = Guid.NewGuid(), Name = "Tenet", Descriptor = "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time." }
        };

        private static readonly List<Genre> genres = new List<Genre>()
        {
            new Genre { Id = Guid.NewGuid(), Name = "Sci-Fi" },
            new Genre { Id = Guid.NewGuid(), Name = "Adventure" },
            new Genre { Id = Guid.NewGuid(), Name = "Action" }
        };

        public static List<Film> Films { get; } = films;

        public static List<Genre> Genres { get; } = genres;
    }
}
