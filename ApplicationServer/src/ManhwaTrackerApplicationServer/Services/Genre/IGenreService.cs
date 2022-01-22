namespace ManhwaTrackerApplicationServer.Services.Genre;

using ManhwaTrackerApplicationServer.Models.Manhwa;

public interface IGenreService
{
    /// <summary>
    /// Fetches a list of all <c>Genre</c> that any <c>Manhwa</c> can have.
    /// </summary>
    /// <returns>All genres</returns>
    public Task<IEnumerable<Genre>> GetAllAsync();
}