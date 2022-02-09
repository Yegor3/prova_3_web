using System.ComponentModel;

namespace api_rest.Domain.Helpers
{
    public enum EUnitOfComic : byte
    {
        [Description("Superhero")]
        superhero = 1,

        [Description("Manga")]
        manga = 2,

        [Description("Fantasy")]
        fantasy = 3,

    }

}
