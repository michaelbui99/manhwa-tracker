using System.Security.Claims;
using HotChocolate.AspNetCore.Authorization;
using ManhwaTrackerApplicationServer.Models.ManhwaList;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Services;
using ManhwaTrackerApplicationServer.Services.ManhwaList;

namespace ManhwaTrackerApplicationServer.Controllers;

public class Mutation
{
    private readonly IUserService _userService;
    private readonly IManhwaListService _manhwaListService;
    private readonly ILogger _logger;

    public Mutation(IUserService userService, IManhwaListService manhwaListService, ILogger<Mutation> logger)
    {
        _userService = userService;
        _manhwaListService = manhwaListService;
        _logger = logger;
    }

    public async Task<User> RegisterUser(string email, string password)
    {
        _logger.LogInformation("RegisterUser Mutation called");
        return await _userService.CreateAsync(email, password);
    }

    [Authorize(Policy = "MustBeUser")]
    public async Task<ManhwaList> CreateList(string name, string description, ClaimsPrincipal claimsPrincipal)
    {
        var userEmail = claimsPrincipal.Identity.Name;
        var newList = await _manhwaListService.CreateAsync(userEmail, name, description);
        return newList;
    }
    
    public async Task<User> ValidateLogin(string email, string password)
    {
        return await _userService.ValidateUserAsync(email, password);
    }
}
