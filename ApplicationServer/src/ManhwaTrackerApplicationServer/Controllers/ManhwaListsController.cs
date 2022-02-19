using ManhwaTrackerApplicationServer.Dtos;
using ManhwaTrackerApplicationServer.Dtos.ManhwaListDtos;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Models.ManhwaList;
using ManhwaTrackerApplicationServer.Services.Manhwa;
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
        private readonly IManhwaService _manhwaService;


        public ManhwaListsController(ILogger<ManhwaListsController> logger, IManhwaListService manhwaListService, IManhwaService manhwaService)
        {
            _logger = logger;
            _manhwaListService = manhwaListService;
            _manhwaService = manhwaService;
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

        [HttpPost("{listId:int}/listentries")]
        public async Task<ActionResult<ReadListEntryDto>> CreateListEntry([FromRoute] int listId, [FromBody] CreateListEntryDto createListEntryDto)
        {
            try
            {
                var manhwa = await _manhwaService.GetByIdAsync(createListEntryDto.ManhwaId);

                var  listEntryToAdd = new ManhwaListEntry()
                {
                    LatestReadChapter = createListEntryDto.LatestReadChapter,
                    Manhwa = manhwa
                };

                await _manhwaListService.AddListEntryAsync(listId, listEntryToAdd);

                //TODO: Change this to CreatedAt when endpoint for fetching specific listentry has been added

                return Ok();
            }
            catch (KeyNotFoundException e)
            {
                _logger.LogError(e.ToString());
                return BadRequest(e.Message);
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return StatusCode(500);
            }
        }
    }
}
