namespace ManhwaTrackerApplicationServer.Services;

using ManhwaTrackerApplicationServer.Models.User;

public interface IUserService
{
   public Task<User> CreateAsync(string email, string password);
   public Task<User> ValidateUserAsync(string email, string password);
}