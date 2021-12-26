using DotNetEnv;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Models.User;
using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.DataAccess;

public class ManhwaTrackerDbContext : DbContext
{
    public DbSet<Manhwa> Manhwas { get; set; }
    public DbSet<Genre> Genres { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(
            $"Host={Env.GetString("DB_HOST")}; Database={Env.GetString("DB_DB")};Username={Env.GetString("DB_USER")}; Password={Env.GetString("DB_PW")}");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Synonym>().HasKey(s => new {s.Title, s.TitleLanguage});
    }
}