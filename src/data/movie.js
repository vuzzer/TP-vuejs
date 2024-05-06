import { API_KEY, BASE_URL } from "@/core/credentials";
import Movie from "@/domains/movie";

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    }
}

export async function popularMovie(){
    options.method = 'GET'
    const response = await fetch(`${BASE_URL}movie/popular`, options);
    const data = await response.json()
    const movies = data["results"]
    let movieEntities = movies.map(movie => new Movie(movie))
    console.log(movieEntities);
    return movieEntities;
}

export async function searchMovie(title, date, genre){

}
