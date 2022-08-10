using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using RentFilm.Domain.Models;
using RentFilm.Domain.Entities;
using RentFilm.DAL.Context;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace RentFilm.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly RentFilmDB db;

        private readonly IOptions<AuthOptions> authOptions;

        public AuthController(RentFilmDB context, IOptions<AuthOptions> options)
        {
            authOptions = options;

            db = context;
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login(LoginUser userRequest)
        {
            if (ModelState.IsValid)
            {
                var user = AuthUser(userRequest.Login, userRequest.Password);

                if (user != null)
                {
                    var token = GenerateJWT(user);

                    return Ok(new
                    {
                        access_token = token
                    });
                }
                
                return Unauthorized(ModelState);
            }
            return BadRequest(ModelState);
        }

        private User AuthUser(string login, string password)
        {
            return db.Users.SingleOrDefault(u => u.Login == login && u.Password == password);
        }

        private string GenerateJWT(User user)
        {
            var authParams = authOptions.Value;

            var secretKey = authParams.GetSymmetricSecurityKey();
            var credentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.UniqueName, user.Login),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString())
            };

            claims.Add(new Claim("role", user.Role.ToString()));

            var token = new JwtSecurityToken(
                authParams.Issuer,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
