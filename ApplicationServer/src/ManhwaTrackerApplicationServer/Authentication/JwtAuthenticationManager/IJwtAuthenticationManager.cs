using ManhwaTrackerApplicationServer.Models.ThirdParty;
using ManhwaTrackerApplicationServer.Models.User;

namespace ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;

public interface IJwtAuthenticationManager
{
    public Task<User> AuthenticateUserAsync(string email, string password);
    public Task<string> AuthenticateServiceAsync(string secret, string serviceName);
}