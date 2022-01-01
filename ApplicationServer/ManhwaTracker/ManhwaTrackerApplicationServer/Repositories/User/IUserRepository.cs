namespace ManhwaTrackerApplicationServer.Repositories.User;
using ManhwaTrackerApplicationServer.Models.User;

public interface IUserRepository
{
    public Task<User> CreateAsync(string email, string password);
    public Task<User> ValidateUserAsync(string email, string password);
    public Task<User> GetUserAsync(string email);
}