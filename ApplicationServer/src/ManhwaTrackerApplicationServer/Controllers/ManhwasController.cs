using ManhwaTrackerApplicationServer.Dtos;
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
            _logger.LogInformation("GET request received for /manhwas");

            IEnumerable<Manhwa> manhwasToReturn = new List<Manhwa>(); ;

            if (!string.IsNullOrEmpty(title))
            {
                try
                {
                    manhwasToReturn = await _manhwaService.GetByTitleAsync(title);
                }
                catch (Exception e)
                {
                    _logger.LogError($"Failed to fetch manhwas: {e.Message}");
                    return StatusCode(500);
                }
            }
            else
            {
                try
                {
                    manhwasToReturn = await _manhwaService.GetAllAsync();
                }
                catch (Exception e)
                {
                    _logger.LogError($"Failed to fetch manhwas: {e.Message}");
                    return StatusCode(500);
                }
            }

            var manhwasToReturnAsDtos = manhwasToReturn.Select(manhwa => manhwa.ToDto());
            return Ok(manhwasToReturnAsDtos);
        }
    }
}
