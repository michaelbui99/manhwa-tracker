namespace ManhwaTrackerApplicationServer.Services
{

    using ManhwaTrackerApplicationServer.Models.User;
    public interface IUserService
    {
        /// <summary>
        /// Registers a new user to the system
        /// </summary>
        /// <remarks>
        /// Password are stored in a hashed format
        /// </remarks>
        /// <param name="email">Email of the user</param>
        /// <param name="password">Desired password</param>
        /// <exception cref="ArgumentException">if password length less than 8</exception>
        /// <exception cref="ArgumentException">if email has already been used</exception>
        /// <exception cref="ArgumentException">if email format is invalid</exception>
        /// <returns>The new user</returns>
        public Task<User> CreateAsync(string email, string password);

        /// <summary>
        /// Validates a user's credentials and generates a new access token
        /// </summary>
        /// <param name="email">Email of the user</param>
        /// <param name="password">Password of the user</param>
        /// <exception cref="ArgumentException">if user with <c>email</c> does not exist</exception>
        /// <exception cref="ArgumentException">if password is incorrect</exception>
        /// <returns>Validated user with new access token</returns>
        public Task<User> ValidateUserAsync(string email, string password);

        /// <summary>
        /// Fetches a user by email
        /// </summary>
        /// <param name="email">Email of the user</param>
        /// <exception cref="KeyNotFoundException">if user does not exist</exception>
        /// <returns>User with the given <c>email</c></returns>
        public Task<User> GetUserByEmailAsync(string email);

        /// <summary>
        /// Fetches a user by email
        /// </summary>
        /// <param name="id">Id of the user</param>
        /// <exception cref="KeyNotFoundException">if user does not exist</exception>
        /// <returns>User with the given id</returns>
        public Task<User> GetUserByIdAsync(int id);
    }

}
