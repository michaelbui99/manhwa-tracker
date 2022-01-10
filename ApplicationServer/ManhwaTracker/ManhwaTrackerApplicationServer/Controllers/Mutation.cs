using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Services;
using Microsoft.Extensions.Logging;

namespace ManhwaTrackerApplicationServer.Controllers;

public class Mutation
{
    private readonly IUserService _userService;
    private readonly ILogger _logger;

    public Mutation(IUserService userService, ILogger<Mutation> logger)
    {
        _userService = userService;
        _logger = logger;

    }

    public async Task<User> RegisterUser(string email, string password)
    {
        _logger.LogInformation("RegisterUser Mutation called");
        return await _userService.CreateAsync(email, password);
    }
}
