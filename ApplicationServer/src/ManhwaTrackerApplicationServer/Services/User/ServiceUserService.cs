using ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;
using ManhwaTrackerApplicationServer.Models.ThirdParty;
using ManhwaTrackerApplicationServer.Repositories.User;

namespace ManhwaTrackerApplicationServer.Services;

public class ServiceUserService : IServiceUserService
{
    private readonly IServiceUserRepository _serviceUserRepository;
    private readonly IJwtAuthenticationManager _authenticationManager;

    public ServiceUserService(IServiceUserRepository serviceUserRepository, IJwtAuthenticationManager authenticationManager)
    {
        _serviceUserRepository = serviceUserRepository;
        _authenticationManager = authenticationManager;
    }
    

    public async Task<ServiceUser> ValidateServiceAsync(string serviceName, string secret)
    {
        if (!_serviceUserRepository.ValidateSecretAsync(secret, serviceName))
        {
            throw new KeyNotFoundException("Service is not registered");
        }
        
        return new ServiceUser(secret, serviceName)
        {
            Token = await _authenticationManager.AuthenticateServiceAsync(secret, serviceName)
        };
    }
}