using System.ComponentModel.DataAnnotations;
using ManhwaTrackerApplicationServer.Models.User;

namespace ManhwaTrackerApplicationServer.Models.ManhwaRequest;

public class ManhwaRequest
{
    [Key]
    public int Id { get; set; }
    public Moderator ApprovedBy { get; set; }
    public RequestStatus RequestStatus { get; set; }
    
}