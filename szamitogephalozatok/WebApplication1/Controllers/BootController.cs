using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BootController : ControllerBase
    {
       [HttpGet]
       [Route("questions/{sorszám}")]
       public ActionResult M1(int sorszám)
           {
            HajostesztContext context = new HajostesztContext();

            var kérdések = (from x in context.Questions
                            where x.QuestionId == sorszám
                            select x).FirstOrDefault();

            return new JsonResult(kérdések);
        }
    }
}
