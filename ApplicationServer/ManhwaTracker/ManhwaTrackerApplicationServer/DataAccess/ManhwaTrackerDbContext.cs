using DotNetEnv;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Models.ManhwaList;
using ManhwaTrackerApplicationServer.Models.ManhwaRequest;
using ManhwaTrackerApplicationServer.Models.User;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace ManhwaTrackerApplicationServer.DataAccess;

public class ManhwaTrackerDbContext : DbContext
{
    public DbSet<Manhwa> Manhwas { get; set; }
    public DbSet<Genre> Genres { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<ManhwaRequest> ManhwaRequests { get; set; }
    
    public DbSet<ManhwaList> ManhwaLists { get; set; }

    public ManhwaTrackerDbContext()
    {
        NpgsqlConnection.GlobalTypeMapper.MapEnum<Status>();
        NpgsqlConnection.GlobalTypeMapper.MapEnum<TitleLanguage>();
        NpgsqlConnection.GlobalTypeMapper.MapEnum<SourceMaterial>();
        NpgsqlConnection.GlobalTypeMapper.MapEnum<RequestStatus>();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Fetches credentials from the .env file
        // To setup on local environment, use the .env.sample as a base and replace with your credentials
        optionsBuilder.UseNpgsql(
            $"Host={Env.GetString("DB_HOST")}; Database={Env.GetString("DB_DB")};Username={Env.GetString("DB_USER")}; Password={Env.GetString("DB_PW")}");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Setting up postgres enum types
        modelBuilder.HasPostgresEnum<Status>();
        modelBuilder.HasPostgresEnum<SourceMaterial>();
        modelBuilder.HasPostgresEnum<TitleLanguage>();
        modelBuilder.HasPostgresEnum<RequestStatus>();

        // Setting up composite primary keys
        modelBuilder.Entity<Synonym>().HasKey(s => new {s.Title, s.TitleLanguage});

        // Excluding properties
        modelBuilder.Entity<User>().Ignore(user => user.Token);
    }
}