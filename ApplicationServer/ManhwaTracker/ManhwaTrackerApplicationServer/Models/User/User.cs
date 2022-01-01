using System.ComponentModel.DataAnnotations;

namespace ManhwaTrackerApplicationServer.Models.User;

/// <summary>
/// User of the system. Users creates lists and add manwhas to the lists.
/// </summary>
public class User
{
    /// <summary>
    /// Id of the user
    /// </summary>
    [Key]
    public int Id { get; set; }
    
    
    /// <summary>
    /// Email of the user. Each email can only be used once. 
    /// </summary>
    public string? Email { get; set; }
    
    /// <summary>
    /// Password of the user. Must be at least 8 characters long. 
    /// </summary>
    public string? Password { get; set; }
}