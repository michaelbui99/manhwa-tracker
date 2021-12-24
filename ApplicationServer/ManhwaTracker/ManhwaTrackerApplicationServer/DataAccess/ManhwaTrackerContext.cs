using DotNetEnv;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.DataAccess;

public class ManhwaTrackerContext : DbContext
{
    public DbSet<Manhwa> Manhwas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(
            $"Host={Env.GetString("DB_HOST")}; Database={Env.GetString("DB_DB")};Username={Env.GetString("DB_USER")}; Password={Env.GetString("DB_PW")}");
    }
}