using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.Repositories.User;

using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Models.User;
using BCrypt.Net;
public class UserRepository : IUserRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;

    public UserRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task<Models.User.User> CreateAsync(string email, string password)
    {
        var hashedPassword = BCrypt.HashPassword(password);
        
        User newUser = new()
        {
            Email = email,
            Password = hashedPassword
        };
        
        var createdUser = (await _dbContext.Users.AddAsync(newUser)).Entity;
        await _dbContext.SaveChangesAsync();
        
        return createdUser;
    }

    public async Task<User> ValidateUserAsync(string email, string password)
    {
        var existingUser = await GetUserAsync(email);
        
        var passwordIsValid = BCrypt.Verify(password, existingUser.Password);

        if (!passwordIsValid)
        {
            return null;
        }

        return existingUser;
    }

    public async Task<User> GetUserAsync(string email)
    {
        return await _dbContext.Users.FirstOrDefaultAsync(user => user.Email.ToLower() == email.ToLower());
    }
}