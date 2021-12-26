namespace ManhwaTrackerApplicationServer.Services.Genre;

using ManhwaTrackerApplicationServer.Repositories.Genre;
using ManhwaTrackerApplicationServer.Models.Manhwa;


public class GenreService: IGenreService
{
    private readonly IGenreRepository _genreRepository;

    public GenreService(IGenreRepository genreRepository)
    {
        _genreRepository = genreRepository;
    }
    
    public async Task<IEnumerable<Genre>> GetAllAsync()
    {
        return await _genreRepository.GetAllAsync();
    }
}