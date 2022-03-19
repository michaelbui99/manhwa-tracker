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
        private readonly IServiceUserService _serviceUserService;

        public LoginController(ILogger<LoginController> logger, IUserService userService, IServiceUserService serviceUserService)
        {
            _logger = logger;
            _userService = userService;
            _serviceUserService = serviceUserService;
        }

        /// <summary>
        /// Validates a user and generates a jwt token
        /// </summary>
        /// <param name="validateUserDto">DTO containing the user's email and password</param>
        /// <returns>DTO containing the users id, email and bearer token</returns>
        [HttpPost("users")]
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

        [HttpPost("services")]
        public async Task<ActionResult<ReadServiceUserDto>> LoginService([FromBody] ValidateServiceDto validateServiceDto)
        {
            try
            {
                var validatedServiceUser =
                    await _serviceUserService.ValidateServiceAsync(validateServiceDto.ServiceName,
                        validateServiceDto.Secret);

                var readServiceUserDto =
                    new ReadServiceUserDto(validatedServiceUser.ServiceName, validatedServiceUser.Token);
                
                return readServiceUserDto;
            }
            catch (KeyNotFoundException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}
