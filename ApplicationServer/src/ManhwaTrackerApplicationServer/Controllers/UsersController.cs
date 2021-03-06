using ManhwaTrackerApplicationServer.Dtos;
using ManhwaTrackerApplicationServer.Dtos.ManhwaListDtos;
using ManhwaTrackerApplicationServer.Services;
using ManhwaTrackerApplicationServer.Services.ManhwaList;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ManhwaTrackerApplicationServer.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IManhwaListService _manhwaListService;
        private readonly IUserService _userService;

        public UsersController(ILogger<UsersController> logger, IManhwaListService manhwaListService, IUserService userService)
        {
            _logger = logger;
            _manhwaListService = manhwaListService;
            _userService = userService;
        }

        [Authorize(Policy = "MustBeUser", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        // POST /users/{userId}/manhwaLists
        [HttpPost("{userId:int}/manhwalists")]
        public async Task<ActionResult<ReadManhwaListDto>> CreateManhwaList([FromRoute] int userId, CreateManhwaListDto createManhwaListDto)
        {
            try
            {
                var existingUser = await _userService.GetUserByIdAsync(userId);

                if (existingUser.Email != User.Identity.Name)
                {
                    return Unauthorized();
                }

                var createdList = await _manhwaListService.CreateAsync(existingUser.Email, createManhwaListDto.Name, createManhwaListDto.Description);

                if (createdList == null)
                {
                    return StatusCode(500);
                }

                return Ok(createdList.ToDto());
            }
            catch (KeyNotFoundException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception)
            {
                // All other exceptions are treated as internal server error
                return StatusCode(500);
            }
        }

        [HttpGet("{userId:int}/manhwalists")]
        public async Task<ActionResult<IEnumerable<ReadManhwaListDto>>> GetUsersManhwaLists([FromRoute] int userId)
        {
            try
            {
                var lists = await _manhwaListService.GetAllByUserIdAsync(userId);

                var listsAsDto = lists.Select(list => list.ToDto()).ToList();

                return listsAsDto;
            }
            catch (KeyNotFoundException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

    }
}
