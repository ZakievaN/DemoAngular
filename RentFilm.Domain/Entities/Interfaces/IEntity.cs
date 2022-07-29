using System;
using System.Collections.Generic;
using System.Text;

namespace RentFilm.Domain.Entities.Interfaces
{
    interface IEntity
    {
        Guid Id { get; set; }

        string Name { get; set; }
    }
}
