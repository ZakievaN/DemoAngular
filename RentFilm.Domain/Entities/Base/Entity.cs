using RentFilm.Domain.Entities.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace RentFilm.Domain.Entities.Base
{
    public abstract class Entity : IEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
    }
}
