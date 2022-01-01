using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Services;

namespace ManhwaTrackerApplicationServer.Controllers;

public class Mutation
{
    private readonly IUserService _userService;

    public Mutation(IUserService userService)
    {
        _userService = userService;
    }

    public async Task<User> RegisterUser(string email, string password)
    {
        return await _userService.CreateAsync(email, password);
    }
}