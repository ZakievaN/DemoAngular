using RentFilm.Domain.Entities.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace RentFilm.Domain.Entities
{
    public class Genre : IEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
    }
}
