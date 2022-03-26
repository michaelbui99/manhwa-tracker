using System.Text;
using DotNetEnv;
using GraphQL.Server.Ui.Playground;
using ManhwaTrackerApplicationServer.Authentication.JwtAuthenticationManager;
using ManhwaTrackerApplicationServer.Controllers;
using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Repositories.Genre;
using ManhwaTrackerApplicationServer.Repositories.Manhwa;
using ManhwaTrackerApplicationServer.Repositories.ManhwaList;
using ManhwaTrackerApplicationServer.Repositories.Tag;
using ManhwaTrackerApplicationServer.Repositories.User;
using ManhwaTrackerApplicationServer.Services;
using ManhwaTrackerApplicationServer.Services.Genre;
using ManhwaTrackerApplicationServer.Services.Manhwa;
using ManhwaTrackerApplicationServer.Services.ManhwaList;
using ManhwaTrackerApplicationServer.Services.Tag;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder => { builder.WithOrigins(Env.GetString("WEBAPP_IP")); });
});

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    if (!Env.GetBool("production"))
    {
        x.RequireHttpsMetadata = false;
    }

    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Env.GetString("JWT_SECRET"))),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("MustBeUser", policy =>
    {
        policy.RequireClaim("Role", "User");
    });

    options.AddPolicy("MustBeModerator", policy =>
    {
        policy.RequireClaim("Role", "Moderator");
    });

    options.AddPolicy("MustBeService", policy =>
    {
        policy.RequireClaim("Role", "Service");
        policy.RequireClaim("Role", "Moderator");
    });
});

builder.Services.AddTransient<ManhwaTrackerDbContext>();
builder.Services.AddScoped<IManhwaRepository, ManhwaRepository>();
builder.Services.AddScoped<IGenreRepository, GenreRepository>();
builder.Services.AddScoped<IManhwaService, ManhwaService>();
builder.Services.AddScoped<IGenreService, GenreService>();
builder.Services.AddScoped<ITagRepository, TagRepository>();
builder.Services.AddScoped<ITagService, TagService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IManhwaListRepository, ManhwaListRepository>();
builder.Services.AddScoped<IManhwaListService, ManhwaListService>();
builder.Services.AddScoped<IServiceUserRepository, ServiceUserRepository>();
builder.Services.AddScoped<IServiceUserService, ServiceUserService>();
builder.Services.AddScoped<IJwtAuthenticationManager, JwtAuthenticationManager>();




builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseAuthentication();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));

// app.UseHttpsRedirection();

app.MapControllers();

app.Run();