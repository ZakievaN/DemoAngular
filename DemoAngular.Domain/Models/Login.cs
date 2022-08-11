using System.ComponentModel.DataAnnotations;

namespace DemoAngular.Domain.Models
{
    public class LoginUser
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
