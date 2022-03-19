using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DotNetEnv;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Repositories.User;
using Microsoft.IdentityModel.Tokens;

namespace ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;

using BCrypt.Net;
using ManhwaTrackerApplicationServer.Models.ThirdParty;

public class JwtAuthenticationManager : IJwtAuthenticationManager
{
    private readonly IUserRepository _userRepository;
    private readonly IServiceUserRepository _serviceUserRepository;

    public JwtAuthenticationManager(IUserRepository userRepository, IServiceUserRepository serviceUserRepository)
    {
        _userRepository = userRepository;
        _serviceUserRepository = serviceUserRepository;
    }

    public async Task<string> AuthenticateServiceAsync(string secret, string serviceName)
    {
        if (!_serviceUserRepository.ValidateSecretAsync(secret, serviceName))
        {
            throw new ArgumentException("Invalid service credentials");
        }

        var token = GenerateToken(new Claim[]
            {
                new(ClaimTypes.Name, serviceName),
                new("Role", "Service")
            });
        var tokenHandler = new JwtSecurityTokenHandler();
        return tokenHandler.WriteToken(token);
    }

    public async Task<User> AuthenticateUserAsync(string email, string password)
    {
        var existingUser = await _userRepository.GetUserByEmailAsync(email);

        if (existingUser == null)
        {
            throw new ArgumentException("User not found");
        }

        var passwordIsCorrect = BCrypt.Verify(password, existingUser.Password);

        if (!passwordIsCorrect)
        {
            throw new ArgumentException("Password is incorrect");
        }

        var token = GenerateToken(new Claim[]
            {
                new(ClaimTypes.Name, email),
                new("Id", existingUser.Id.ToString()),
                new("Role", "User")
            });

        var tokenHandler = new JwtSecurityTokenHandler();
        existingUser.Token = tokenHandler.WriteToken(token);
        return existingUser;
    }

    private SecurityToken GenerateToken(Claim[] claims)
    {
        var tokenHandler = new JwtSecurityTokenHandler();

        //Fetching secret from .env file
        var tokenKey = Encoding.ASCII.GetBytes(Env.GetString("JWT_SECRET"));

        // Setting token values
        var tokenDescriptor = new SecurityTokenDescriptor()
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddMinutes(30),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey),
                SecurityAlgorithms.HmacSha256Signature)
        };

        //Generating token
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return token;
    }


}