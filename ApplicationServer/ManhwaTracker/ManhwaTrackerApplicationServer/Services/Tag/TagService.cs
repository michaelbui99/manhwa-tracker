namespace ManhwaTrackerApplicationServer.Services.Tag;

using ManhwaTrackerApplicationServer.Repositories.Tag;

public class TagService : ITagService
{
    private readonly ITagRepository _tagRepository;

    public TagService(ITagRepository tagRepository)
    {
        _tagRepository = tagRepository;
    }

    public async Task<IEnumerable<Models.Manhwa.Tag>> GetAllAsync()
    {
        return await _tagRepository.GetAllAsync();
    }
}