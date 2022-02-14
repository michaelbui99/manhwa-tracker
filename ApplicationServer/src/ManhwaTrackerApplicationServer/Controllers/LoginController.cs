using ManhwaTrackerApplicationServer.Dtos;
using ManhwaTrackerApplicationServer.Dtos.UserDtos;
using ManhwaTrackerApplicationServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace ManhwaTrackerApplicationServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IUserService _userService;

        public LoginController(ILogger<LoginController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost]
        public async Task<ActionResult<ReadUserDto>> LoginUser([FromBody] ValidateUserDto validateUserDto)
        {
            try
            {
                var validatedUser = await _userService.ValidateUserAsync(validateUserDto.Email, validateUserDto.Password);

                return Ok(validatedUser.ToDto());
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception)
            {
                // Any exception outside of ArgumentException is treated as Server error
                return StatusCode(500);
            }
        }

    }
}
