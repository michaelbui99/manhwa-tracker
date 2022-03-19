using ManhwaTrackerApplicationServer.Models.ThirdParty;
using ManhwaTrackerApplicationServer.Models.User;

namespace ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;

public interface IJwtAuthenticationManager
{
    public Task<User> AuthenticateUserAsync(string email, string password);
    
    /// <summary>
    /// Validates if a service is registered. A access token will be generated if the service is registered.
    /// </summary>
    /// <param name="secret">Generated secret for the service</param>
    /// <param name="serviceName">Name of the service e.g scraper-controls</param>
    /// <returns>JWT access token</returns>
    public Task<string> AuthenticateServiceAsync(string secret, string serviceName);
}