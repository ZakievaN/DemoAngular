using System.ComponentModel.DataAnnotations;

namespace RentFilm.Domain.Entities
{
    public class LoginUser
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
