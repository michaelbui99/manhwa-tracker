using System;
using System.Collections;
using System.Collections.Generic;
using ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Repositories.User;
using ManhwaTrackerApplicationServer.Services;
using Moq;
using NUnit.Framework;

namespace UnitTests;

public class UserServiceTests
{
    private Mock<IUserRepository> _userRepositoryMock;
    private IJwtAuthenticationManager _authenticationManager;
    private IUserService _userService;

    [SetUp]
    public void Setup()
    {
        _authenticationManager = new JwtAuthenticationManager(_userRepositoryMock.Object);
        _userService = new UserService(_userRepositoryMock.Object, _authenticationManager);
    }

    [Test]
    [TestCase("test123")]
    [TestCase("test")]
    [TestCase("t")]
    public void CreateUser_PasswordLengthLessThan8_ThrowsArgumentException(string password)
    {
        // Arrange
        var user = new User()
        {
            Email = "test@test.test",
            Password = password
        };
        
        // Act & Assert
        Assert.ThrowsAsync<ArgumentException>(async () => await _userService.CreateAsync(user.Email, user.Password));

    }
}