﻿using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Repositories.User;

namespace ManhwaTrackerApplicationServer.Services;

using BCrypt.Net;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    public async Task<User> CreateAsync(string email, string password)
    {
        if (String.IsNullOrEmpty(email))
        {
            throw new ArgumentException("Invalid email");
        }

        if (password.Length < 8)
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

    public async Task<User> ValidateUserAsync(string email, string password)
    {
        var existingUser = await _userRepository.GetUserAsync(email);

        if (existingUser == null)
        {
            throw new ArgumentException("User not found");
        }

        var passwordIsCorrect= BCrypt.Verify(password, existingUser.Password);
        if (!passwordIsCorrect)
        {
            throw new ArgumentException("Password is incorrect");
        }
        //TODO: Generate Token
        return existingUser;
    }
}