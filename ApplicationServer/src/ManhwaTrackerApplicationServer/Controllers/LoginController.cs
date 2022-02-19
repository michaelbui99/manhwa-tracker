using ManhwaTrackerApplicationServer.Dtos;
using ManhwaTrackerApplicationServer.Dtos.UserDtos;
using ManhwaTrackerApplicationServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace ManhwaTrackerApplicationServer.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IUserService _userService;

        public LoginController(ILogger<LoginController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        /// <summary>
        /// Validates a user and generates a jwt token
        /// </summary>
        /// <param name="validateUserDto">DTO containing the user's email and password</param>
        /// <returns>DTO containing the users id, email and bearer token</returns>
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
