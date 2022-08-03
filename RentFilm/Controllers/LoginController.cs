using Microsoft.AspNetCore.Mvc;
using RentFilm.Domain.Entities;
using RentFilm.Models;
using System.Linq;

namespace RentFilm.Controllers
{
    [ApiController]
    [Route("api/login")]
    public class LoginController : Controller
    {
        ApplicationContext db;

        public LoginController(ApplicationContext context)
        {
            db = context;
            if (!db.Users.Any())
            {
                db.Users.AddRange(TestData.TestData.Users);                
                db.SaveChanges();
            }
        }

        [HttpPost]
        public IActionResult Post(User userRequest)
        {
            if (ModelState.IsValid)
            {
                var user = db.Users.Where(u => u.Login == userRequest.Login && u.Password == userRequest.Password).Single();
                if (user != null)
                {
                    return Ok(user);
                }
                else
                {
                    return Unauthorized(ModelState);
                }
                
            }
            return BadRequest(ModelState);
        }
    }
}
