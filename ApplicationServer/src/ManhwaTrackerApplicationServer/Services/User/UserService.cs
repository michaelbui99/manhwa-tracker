using ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Repositories.User;

namespace ManhwaTrackerApplicationServer.Services;

using BCrypt.Net;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IJwtAuthenticationManager _jwtAuthenticationManager;

    public UserService(IUserRepository userRepository, IJwtAuthenticationManager jwtAuthenticationManager)
    {
        _userRepository = userRepository;
        _jwtAuthenticationManager = jwtAuthenticationManager;
    }

    public async Task<User> CreateAsync(string email, string password)
    {
        if (String.IsNullOrEmpty(email))
        {
            throw new ArgumentException("Invalid email");
        }

        if (password.Length < 8 || string.IsNullOrEmpty(password) || string.IsNullOrWhiteSpace(password))
        {
            throw new ArgumentException("Password must be at least 8 characters");
        }
        //TODO:  Add check if email is formatted correctly, e.g. contains @ and does not end with .

        var existingUser = await _userRepository.GetUserAsync(email);
        if (existingUser != null)
        {
            throw new ArgumentException("User already exists");
        }


        var hashedPassword = BCrypt.HashPassword(password);

        var createdUser = await _userRepository.CreateAsync(email, hashedPassword);
        return createdUser;
    }

    public async Task<User> GetUserAsync(string email)
    {
        try
        {
            var existingUser = await _userRepository.GetUserAsync(email);
            if (existingUser == null)
            {
                throw new KeyNotFoundException("User not found");
            }

            return existingUser;
        }
        catch (NullReferenceException e)
        {
            throw new KeyNotFoundException("User not found");
        }
    }

    public async Task<User> ValidateUserAsync(string email, string password)
    {
        var validatedUser = await _jwtAuthenticationManager.AuthenticateAsync(email, password);
        return validatedUser;
    }
}