using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
   // [Route("api/[controller]")]
    [ApiController]
    public class questionController : ControllerBase
    {
        [HttpGet]
        [Route("questions/count11")]
        public int M1()
        {
            HajostesztContext context = new HajostesztContext();
            int kérdésekSzáma = context.Questions.Count();
            return kérdésekSzáma;
        }
        [HttpGet]
        [Route("questions/11/"+"{sorszám}")]
        public ActionResult M2(int sorszám) 
        {
            HajostesztContext context = new HajostesztContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();
            if (kérdés == null) return BadRequest("nincs ilyen kérdés");
            return new JsonResult(kérdés);
            
        }
    }
}
