using BDMedicalNumberProcessor.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BDMedicalNumberProcessor.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class MessageController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<MessageController> _logger;

        private readonly BDMedContext _context;

        public MessageController(ILogger<MessageController> logger, BDMedContext context)
        {
            _logger = logger;
            _context = context;
        }

    
        [HttpGet]
        public IEnumerable<Message> Get(int num)
        {


            var some = _context.Message;

           

            var rng = new Random();
            return Enumerable.Range(1, 1).Select(index => new Message
            {
                ButchNumber = 2,
                Result = rng.Next(),
                Status = "Processing",
            })
            .ToArray();
        }
    }
}
