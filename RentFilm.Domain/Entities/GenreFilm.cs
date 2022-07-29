namespace RentFilm.Domain.Entities
{
    public class GenreFilm
    {
        public int Id { get; set; }

        public int FilmId { get; set; }

        public Product Film { get; set; }

        public int GenreId { get; set; }

        public Genre Genre { get; set; }
    }
}
