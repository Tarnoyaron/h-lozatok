using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.JokeModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/jokes2")]
    [ApiController]
    public class JokeController2 : ControllerBase
    {
        // GET: api/<JokeController2>
        [HttpGet]
        public IEnumerable<JokeModels.Joke> Get()
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            return context.Jokes.ToList();
        }

        // GET api/jokes/5
        [HttpGet("{id}")]
        public JokeModels.Joke Get(int id)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            var keresettVicc = (from x in context.Jokes
                                where x.JokeSk == id
                                select x).FirstOrDefault();
            return keresettVicc;
        }

        // POST api/jokes2
        [HttpPost("postApi/jokes2 ")]
        public void Post([FromBody] JokeModels.Joke újVicc)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            context.Jokes.Add(újVicc);
            context.SaveChanges();
        }

        // PUT api/<JokeController2>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JokeController2>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            var törlendőVicc = (from x in context.Jokes
                                where x.JokeSk == id
                                select x).FirstOrDefault();
            context.Remove(törlendőVicc);
        }
    }
}
