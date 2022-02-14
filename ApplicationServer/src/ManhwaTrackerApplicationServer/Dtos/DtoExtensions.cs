using ManhwaTrackerApplicationServer.Dtos.UserDtos;
using ManhwaTrackerApplicationServer.Models.User;

namespace ManhwaTrackerApplicationServer.Dtos
{
    /// <summary>
    /// Contains methods for converting from and to different Dtos
    /// </summary>
    public static class DtoExtensions
    {
        /// <summary>
        /// Converts a <c>ValidateUserDto</c> to an <c>User</c> instance
        /// </summary>
        /// <param name="validateUserDto">DTO to be converted</param>
        /// <returns>an User instance</returns>
        public static User FromDto(this ValidateUserDto validateUserDto)
        {
            return new User()
            {
                Email = validateUserDto.Email,
                Password = validateUserDto.Password
            };
        }

        /// <summary>
        /// Converts a <c>User</c> into an <c>ReadUserDto</c> instance
        /// </summary>
        /// <param name="user">User to be converted into DTO</param>
        /// <returns>a ReadUserDto instance</returns>
        public static ReadUserDto ToDto(this User user)
        {
            return new ReadUserDto()
            {
                Email = user.Email,
                Token = user.Token
            };
        }
    }
}
