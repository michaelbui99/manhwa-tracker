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
        
        User newUser = new()
        {
            Email = email,
            Password = password
        };
        
        var createdUser = (await _dbContext.Users.AddAsync(newUser)).Entity;
        await _dbContext.SaveChangesAsync();
        
        return createdUser;
    }

    public async Task<User> GetUserByEmailAsync(string email)
    {
        return await _dbContext.Users.FirstOrDefaultAsync(user => user.Email.ToLower() == email.ToLower());
    }

    public async Task<User> GetUserByIdAsync(int id)
    {
        return await _dbContext.Users.FirstOrDefaultAsync(user => user.Id == id);
    }
}