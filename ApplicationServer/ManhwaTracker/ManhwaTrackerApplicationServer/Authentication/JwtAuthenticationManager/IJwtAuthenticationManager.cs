using ManhwaTrackerApplicationServer.Models.User;

namespace ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;

public interface IJwtAuthenticationManager
{
    public Task<User> AuthenticateAsync(string email, string password);
}