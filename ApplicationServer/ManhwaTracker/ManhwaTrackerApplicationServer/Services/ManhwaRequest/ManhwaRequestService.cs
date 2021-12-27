using ManhwaTrackerApplicationServer.Models.ManhwaRequest;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Models.Validation;
using ManhwaTrackerApplicationServer.Repositories.ManhwaRequest;
using ManhwaTrackerApplicationServer.Services.Manhwa;

namespace ManhwaTrackerApplicationServer.Services.ManhwaRequest;

public class ManhwaRequestService : IManhwaRequestService
{
    private readonly IManhwaRequestRepository _requestRepository;
    private readonly IManhwaService _manhwaService;

    public ManhwaRequestService(IManhwaRequestRepository requestRepository, IManhwaService manhwaService)
    {
        _requestRepository = requestRepository;
        _manhwaService = manhwaService;
    }

    public async Task<IEnumerable<Models.ManhwaRequest.ManhwaRequest>> GetAllAsync()
    {
        return await _requestRepository.GetAllAsync();
    }

    public async Task<Models.ManhwaRequest.ManhwaRequest> GetByIdAsync(int id)
    {
        if (id <= 0)
        {
            throw new ArgumentException("Invalid id. Id must be greater than 0");
        }

        return await _requestRepository.GetByIdAsync(id);
    }

    public async Task<Models.ManhwaRequest.ManhwaRequest> CreateAsync(Models.ManhwaRequest.ManhwaRequest request)
    {
        // TODO: Add check for if Manhwa has already been registered before
        if (request == null)
        {
            throw new ArgumentException("Invalid request. Request cannot be null");
        }
        
        ManhwaModelValidator.ValidateManhwaModel(request.Manhwa);

        var createdRequest = await _requestRepository.CreateAsync(request);
        if (createdRequest == null)
        {
            throw new ArgumentException("Request could not be created at this moment");
        }
        return createdRequest;
    }

    public Task DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<Models.ManhwaRequest.ManhwaRequest> ApproveRequestAsync(int id, Moderator moderator)
    {
        var existingRequest = await GetByIdAsync(id);
        if (existingRequest == null)
        {
            throw new KeyNotFoundException("Request not found");
        }

        var desiredRequestState = new Models.ManhwaRequest.ManhwaRequest()
        {
            Id = existingRequest.Id,
            ApprovedBy = moderator,
            Manhwa = existingRequest.Manhwa
        };

        var updatedRequest = await _requestRepository.UpdateAsync(id, desiredRequestState);
        if (updatedRequest == null)
        {
            throw new ArgumentException("Request could not be updated at this moment");
        }

        try
        {
            await _manhwaService.CreateAsync(updatedRequest.Manhwa);
            return updatedRequest;
        }
        catch (Exception e)
        {
            // Requests should only retain their approved state, if a new Manhwa could be registered in the system. 
            await _requestRepository.UpdateAsync(id, existingRequest);
            throw new ArgumentException("New manhwa could not be registered at this moment. Restoring Request state. ");
        }
    }

    public Task<Models.ManhwaRequest.ManhwaRequest> RejectRequestAsync(int id, Moderator moderator)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Models.ManhwaRequest.ManhwaRequest>> GetAllApprovedAsync()
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Models.ManhwaRequest.ManhwaRequest>> GetAllPendingAsync()
    {
        throw new NotImplementedException();
    }
}