using RentFilm.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentFilm.Services.Interfaces
{
    public interface IFilmData
    {
        public IEnumerable<Film> GetFilms();

        public IEnumerable<Genre> GetGenres();
    }
}
