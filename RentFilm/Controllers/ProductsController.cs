using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RentFilm.DAL.Context;
using RentFilm.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace RentFilm.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : Controller
    {
        RentFilmDB db;

        public ProductsController(RentFilmDB context)
        {
            db = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetProducts()
        {
            return Ok(db.Products.ToList());
        }

        [HttpGet("{id}")]
        [Route("product")]
        public IActionResult GetProduct(int id)
        {
            Product film = db.Products.FirstOrDefault(x => x.Id == id);
            return Ok(film);
        }

        [Authorize (Roles = "1")]
        [HttpPost]
        public IActionResult Post(Product film)
        {
            if (ModelState.IsValid)
            {
                db.Products.Add(film);
                db.SaveChanges();
                return Ok(film);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "1")]
        [HttpPut]
        public IActionResult Put(Product film)
        {
            if (ModelState.IsValid)
            {
                db.Update(film);
                db.SaveChanges();
                return Ok(film);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "1")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product product = db.Products.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                db.Products.Remove(product);
                db.SaveChanges();
            }
            return Ok(product);
        }
    }
}
