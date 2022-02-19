namespace ManhwaTrackerApplicationServer.Repositories.User;
using ManhwaTrackerApplicationServer.Models.User;

public interface IUserRepository
{
    /// <summary>
    /// Creates and stores a new <c>User</c> in DB.
    /// </summary>
    /// <param name="email">email of the new user</param>
    /// <param name="password">password of the new user</param>
    /// <returns>the created user</returns>
    public Task<User> CreateAsync(string email, string password);
    
    /// <summary>
    /// Fetches a <c>User</c> by email
    /// </summary>
    /// <param name="email">email of the user</param>
    /// <returns>User with provided email</returns>
    public Task<User> GetUserByEmailAsync(string email);


    /// <summary>
    /// Fetches a <c>User</c> by id
    /// </summary>
    /// <param name="id">Id of the user</param>
    /// <returns>User with provided id</returns>
    public Task<User> GetUserByIdAsync(int id);
}