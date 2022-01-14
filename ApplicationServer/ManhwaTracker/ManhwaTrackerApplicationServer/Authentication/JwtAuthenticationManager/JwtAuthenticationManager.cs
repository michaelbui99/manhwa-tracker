using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DotNetEnv;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Repositories.User;
using Microsoft.IdentityModel.Tokens;

namespace ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;

using BCrypt.Net;

public class JwtAuthenticationManager : IJwtAuthenticationManager
{
    private readonly IUserRepository _userRepository;

    public JwtAuthenticationManager(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<User> AuthenticateAsync(string email, string password)
    {
        var existingUser = await _userRepository.GetUserAsync(email);

        if (existingUser == null)
        {
            throw new ArgumentException("User not found");
        }

        var passwordIsCorrect = BCrypt.Verify(password, existingUser.Password);

        if (!passwordIsCorrect)
        {
            throw new ArgumentException("Password is incorrect");
        }

        //TODO: Generate Token
        var tokenHandler = new JwtSecurityTokenHandler();
        
        //Fetching secret from .env file
        var tokenKey = Encoding.ASCII.GetBytes(Env.GetString("JWT_SECRET"));

        // Setting token values
        var tokenDescriptor = new SecurityTokenDescriptor()
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name, email)
            }),
            Expires = DateTime.UtcNow.AddMinutes(30),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey),
                SecurityAlgorithms.HmacSha256Signature)
        };
        
        //Generating token
        var token = tokenHandler.CreateToken(tokenDescriptor);

        existingUser.Token = tokenHandler.WriteToken(token);
        return existingUser;
    }
}