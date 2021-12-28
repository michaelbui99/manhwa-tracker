namespace ManhwaTrackerApplicationServer.Models.ManhwaRequest;

using System.ComponentModel.DataAnnotations;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Models.Manhwa;

public class ManhwaRequest
{
    [Key]
    public int Id { get; set; }

    public Moderator ApprovedBy { get; set; }
    public RequestStatus RequestStatus { get; set; }
    public Manhwa Manhwa{ get; set; }
}