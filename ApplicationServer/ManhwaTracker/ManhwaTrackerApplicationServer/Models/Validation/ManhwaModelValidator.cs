namespace ManhwaTrackerApplicationServer.Models.Validation;

using ManhwaTrackerApplicationServer.Models.Manhwa;

/// <summary>
/// Used for validating if a Manhwa instance is valid. Alternatively data annotations could've been used isntead. 
/// </summary>
public static class ManhwaModelValidator 
{
    /// <summary>
    /// Validates a <c>Manhwa</c> instance
    /// </summary>
    /// <param name="manhwa">The <c>Manhwa</c> to be validated</param>
    /// <exception cref="ArgumentException"><c>manhwa</c> is null</exception>
    /// <exception cref="ArgumentException"><c>Title</c> is null or empty string</exception>
    /// <exception cref="ArgumentException"><c>ChapterCount</c> is negative, i.e. less than 0</exception>
    /// <exception cref="ArgumentException">contains no genres</exception>
    /// <exception cref="ArgumentException">contains no tags</exception>
    public static void ValidateManhwaModel(Manhwa manhwa)
    {
        if (manhwa == null)
        {
            throw new ArgumentException("Invalid request. Manhwa being requested cannot be null");
        }

        if (string.IsNullOrEmpty(manhwa.Title))
        {
            throw new ArgumentException("Invalid request. Manhwa must have an title");
        }

        if (manhwa.ChapterCount < 0)
        {
            throw new ArgumentException("Invalid request. Chapter count of Manhwa must be 0 or greater");
        }

        if (!manhwa.Genres.Any())
        {
            throw new ArgumentException("Invalid request. Manhwa must have at least 1 genre");
        }

        if (!manhwa.Tags.Any())
        {
            throw new ArgumentException("Invalid request. Manhwa must have at least 1 tag");
        }
    }
}