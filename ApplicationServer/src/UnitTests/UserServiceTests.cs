using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        _userRepositoryMock = new Mock<IUserRepository>();
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

        User nullUser = null;
        _userRepositoryMock.Setup<User>(x => x.GetUserAsync(user.Email).Result).Returns(nullUser);

        // Act & Assert
        Assert.ThrowsAsync<ArgumentException>(async () => await _userService.CreateAsync(user.Email, user.Password));
    }


    [Test]
    public void CreateUser_UserWithEmailAlreadyExists_ThrowsArgumentException()
    {
        // Arrange 
        const string usedEmail = "usedEmail@test.test";

        var existingUser = new User()
        {
            Email = usedEmail,
            Password = "test123123",
            Id = 1
        };

        _userRepositoryMock.Setup<User>(x => x.GetUserAsync(usedEmail).Result).Returns(existingUser);

        // Act & Assert
        Assert.ThrowsAsync<ArgumentException>(async () => await _userService.CreateAsync(usedEmail, "testtest123"));
    }


    [Test]
    public async Task CreateUser_ValidEmailAndPassword_DoesNotThrow()
    {
        // Arrange
        const string validNotUsedEmail = "test@test.com";
        const string validPassword = "test123123";

        User nullUser = null;
        _userRepositoryMock.Setup<User>(x => x.GetUserAsync(validNotUsedEmail).Result).Returns(nullUser);
        _userRepositoryMock.Setup<User>(x => x.CreateAsync(validNotUsedEmail, validPassword).Result).Returns(new User()
            {
                Email = validNotUsedEmail,
                Password = validPassword,
                Id = 1
            });
        
        // Act
        try
        {
            var createdUser = await _userService.CreateAsync(validNotUsedEmail, validPassword);
            // Assert
            Assert.AreEqual(validNotUsedEmail, createdUser.Email);
            Assert.AreEqual(validPassword, createdUser.Password);
            Assert.AreEqual(1, createdUser.Id);
            Assert.Pass();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            Assert.Fail();
        }
    }

    [Test]
    public void GetUser_UserDoesNotExist_ThrowsKeyNotFoundException()
    {
        // Arrange
        const string unusedEmail = "NoUserWithThisEmail@gmail.com";
        User nullUser = null;

        _userRepositoryMock.Setup<User>(x => x.GetUserAsync(unusedEmail).Result).Returns(nullUser);
        
        // Act & Assert
        Assert.ThrowsAsync<KeyNotFoundException>(async () => await _userService.GetUserAsync(unusedEmail));
    }
}