using RentFilm.Domain.Entities.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace RentFilm.Domain.Entities
{
    public class Film : IEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Descriptor { get; set; }

        public Genre Genre { get; set; }
    }
}
