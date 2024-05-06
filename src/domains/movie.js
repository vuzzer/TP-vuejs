export default class Movie{
    constructor(movie){
        this.adult = movie.adult;
        this.genre_ids = movie.genre_ids;
        this.id = movie.id;
        this.known_for_department = movie.known_for_department;
        this.name = movie.name;
        this.backdrop_path = movie.backdrop_path;
        this.popularity = movie.popularity;
        this.vote_count = movie.vote_count;
        this.vote_average = movie.vote_average;
        this.video = movie.video;
        this.original_language = movie.original_language;
        this.original_title = movie.original_title;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.poster_path = movie.poster_path;
        this.title = movie.title;
        this.release_date = movie.release_date;
    }
}
