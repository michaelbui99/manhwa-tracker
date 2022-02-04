﻿using ManhwaTrackerApplicationServer.Models.ManhwaList;

namespace ManhwaTrackerApplicationServer.Repositories.ManhwaList;

public interface IManhwaListRepository
{
    public Task<Models.ManhwaList.ManhwaList> CreateAsync(string userEmail, string listName, string listDescription);
    public Task AddListEntryAsync(int listId, ManhwaListEntry listEntry);
    public Task<IEnumerable<Models.ManhwaList.ManhwaList>> GetAllByEmailAsync(string userEmail);
    public Task DeleteAsync(int listId);

    public Task<Models.ManhwaList.ManhwaList> GetByIdAsync(int id);
}