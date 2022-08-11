using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DemoAngular.DAL.Context;
using DemoAngular.Domain.Entities;
using System.Linq;

namespace DemoAngular.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : Controller
    {
        DemoAngularDB db;

        public ProductsController(DemoAngularDB context)
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
