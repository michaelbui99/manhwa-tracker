using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Services.Manhwa;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace ManhwaTrackerApplicationServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ManhwasController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IManhwaService _manhwaService;

        public ManhwasController(ILogger<ManhwasController> logger, IManhwaService manhwaService)
        {
            _logger = logger;
            _manhwaService = manhwaService;
        }

        /// <summary>
        /// Fetches all registered Manhwas
        /// </summary>
        /// <returns>List of all Manhwas</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Manhwa>>> GetAllManhwas([FromQuery] string? title)
        {
            IEnumerable<Manhwa> manhwasToReturn;

            if (!string.IsNullOrEmpty(title))
            {
                manhwasToReturn = await _manhwaService.GetByTitleAsync(title);
            }
            else
            {
                manhwasToReturn = await _manhwaService.GetAllAsync();
                foreach (var manhwa in manhwasToReturn)
                {
                    Console.WriteLine(JsonSerializer.Serialize(manhwa));
                }
            }

            return Ok(manhwasToReturn);
        }
    }
}
