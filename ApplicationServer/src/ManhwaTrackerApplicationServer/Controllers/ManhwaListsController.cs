using ManhwaTrackerApplicationServer.Dtos;
using ManhwaTrackerApplicationServer.Dtos.ManhwaListDtos;
using ManhwaTrackerApplicationServer.Services.ManhwaList;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ManhwaTrackerApplicationServer.Controllers
{
    [ApiController]
    [Authorize(Policy = "MustBeUser", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("/api/v1/[controller]")]
    public class ManhwaListsController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IManhwaListService _manhwaListService;


        public ManhwaListsController(ILogger<ManhwaListsController> logger, IManhwaListService manhwaListService)
        {
            _logger = logger;
            _manhwaListService = manhwaListService;
        }


        /// <summary>
        /// Fetches all user's created lists
        /// </summary>
        /// <returns>List of user's lists</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReadListEntryDto>>> GetUserManhwaLists()
        {
            _logger.LogInformation("GET request received for /manhwalists");

            var userEmail = User.Identity.Name;

            if (String.IsNullOrEmpty(userEmail))
            {
                return BadRequest();
            }

            try
            {
                var lists = await _manhwaListService.GetAllByEmailAsync(userEmail);
                var listsAsDto = lists.Select(list => list.ToDto());

                return Ok(listsAsDto);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }
    }
}
