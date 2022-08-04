﻿using Microsoft.AspNetCore.Mvc;
using RentFilm.DAL.Context;
using RentFilm.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace RentFilm.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : Controller
    {
        RentFilmDB db;

        public ProductController(RentFilmDB context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return db.Products.ToList();
        }

        [HttpGet("{id}")]
        public Product Get(int id)
        {
            Product film = db.Products.FirstOrDefault(x => x.Id == id);
            return film;
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
