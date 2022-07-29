using RentFilm.Domain.Entities;
using RentFilm.Services.Interfaces;
using System.Collections.Generic;

namespace RentFilm.Services
{
    public class FilmData : IFilmData
    {
        public IEnumerable<Film> GetFilms() => TestData.TestData.Films;

        public IEnumerable<Genre> GetGenres() => TestData.TestData.Genres;
    }
}
