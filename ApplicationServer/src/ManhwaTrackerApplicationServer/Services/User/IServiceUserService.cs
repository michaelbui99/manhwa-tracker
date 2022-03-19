using ManhwaTrackerApplicationServer.Models.ThirdParty;

namespace ManhwaTrackerApplicationServer.Services;

public interface IServiceUserService
{
    /// <summary>
    /// Validates if a service is a registered service
    /// </summary>
    /// <param name="serviceName">name of the service e.g. scraper-controls</param>
    /// <param name="secret">generated secret for the service to be used for validating</param>
    /// <returns>ServiceUser with a generated JWT token</returns>
    /// <exception cref="KeyNotFoundException">If service is not registered</exception>
    Task<ServiceUser> ValidateServiceAsync(string serviceName, string secret);
}