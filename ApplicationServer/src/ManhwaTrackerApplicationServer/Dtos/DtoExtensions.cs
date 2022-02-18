using ManhwaTrackerApplicationServer.Dtos.ManhwaDtos;
using ManhwaTrackerApplicationServer.Dtos.ManhwaListDtos;
using ManhwaTrackerApplicationServer.Dtos.UserDtos;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Models.ManhwaList;
using ManhwaTrackerApplicationServer.Models.User;

namespace ManhwaTrackerApplicationServer.Dtos
{
    /// <summary>
    /// Contains methods for converting from and to different Dtos
    /// </summary>
    public static class DtoExtensions
    {
        /// <summary>
        /// Converts a <c>ValidateUserDto</c> to an <c>User</c> instance
        /// </summary>
        /// <param name="validateUserDto">DTO to be converted</param>
        /// <returns>an User instance</returns>
        public static User FromDto(this ValidateUserDto validateUserDto)
        {
            return new User()
            {
                Email = validateUserDto.Email,
                Password = validateUserDto.Password
            };
        }

        /// <summary>
        /// Converts a <c>User</c> into an <c>ReadUserDto</c> instance
        /// </summary>
        /// <param name="user">User to be converted into DTO</param>
        /// <returns>a ReadUserDto instance</returns>
        public static ReadUserDto ToDto(this User user)
        {
            return new ReadUserDto()
            {
                Email = user.Email,
                Token = user.Token
            };
        }


        /// <summary>
        /// Converts a <c>Genre</c> into an <c>ReadGenreDto</c> instance
        /// </summary>
        /// <param name="genre">Genre to be converted into DTO</param>
        /// <returns>a ReadGenreDto instance</returns>
        public static ReadGenreDto ToDto(this Genre genre)
        {
            return new ReadGenreDto()
            {
                Id = genre.Id,
                Name = genre.Name
            };
        }

        /// <summary>
        /// Converts a <c>Tag</c> into an <c>ReadTagDto</c> instance
        /// </summary>
        /// <param name="tag">Tag to be converted into DTO</param>
        /// <returns>a ReadTagDto instance</returns>
        public static ReadTagDto ToDto(this Tag tag)
        {
            return new ReadTagDto()
            {
                Id = tag.Id,
                Name = tag.Name
            };
        }

        /// <summary>
        /// Converts a <c>Synonym</c> into an <c>ReadSynonymDto</c> instance
        /// </summary>
        /// <param name="synonym">Synonym to be converted into DTO</param>
        /// <returns>a ReadSynonymDto instance</returns>
        public static ReadSynonymDto ToDto(this Synonym synonym)
        {
            return new ReadSynonymDto()
            {
                Title = synonym.Title,
                TitleLanguage = synonym.TitleLanguage
            };
        }

        public static IEnumerable<ReadGenreDto> MapEnumerableToDtos(this IEnumerable<Genre> genres)
        {
            var genresAsDtos = genres.Select(genre => genre.ToDto()).ToList();
            return genresAsDtos;
        }

        public static IEnumerable<ReadTagDto> MapEnumerableToDtos(this IEnumerable<Tag> tags)
        {
            var tagsAsDtos = tags.Select(tag => tag.ToDto()).ToList();
            return tagsAsDtos;
        }

        public static IEnumerable<ReadSynonymDto> MapEnumerableToDtos(this IEnumerable<Synonym> synonyms)
        {
            var synonymsAsDtos = synonyms.Select(synonym => synonym.ToDto()).ToList();
            return synonymsAsDtos;
        }

        public static ReadManhwaDto ToDto(this Manhwa manhwa)
        {
            return new ReadManhwaDto()
            {
                Id = manhwa.Id,
                ChapterCount = manhwa.ChapterCount,
                CoverImage = manhwa.CoverImage,
                Description = manhwa.Description,
                EndDate = manhwa.EndDate,
                Format = manhwa.Format,
                Genres = manhwa.Genres.MapEnumerableToDtos(),
                ReleaseDate = manhwa.ReleaseDate,
                SourceMaterial = manhwa.SourceMaterial,
                Status = manhwa.Status,
                Synonyms = manhwa.Synonyms.MapEnumerableToDtos(),
                Tags = manhwa.Tags.MapEnumerableToDtos(),
                Title = manhwa.Title
            };
        }
        
        public static ReadListEntryDto ToDto(this ManhwaListEntry listEntry)
        {
            return new ReadListEntryDto()
            {
                Id = listEntry.Id,
                LatestReadChapter = listEntry.LatestReadChapter,
                Manhwa = listEntry.Manhwa.ToDto()
            };
        }

        public static ReadManhwaListDto ToDto(this ManhwaList manhwaList)
        {
            var listEntriesAsDto = manhwaList.ListEntries.Select(listEntry => listEntry.ToDto()).ToList();

            return new ReadManhwaListDto()
            {
                Id = manhwaList.Id,
                Description = manhwaList.Description,
                ListEntries = listEntriesAsDto,

            };
        }
    }
}
