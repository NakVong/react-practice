import dotenv from 'dotenv'

dotenv.config()
const BASE_URL = "https://api.themoviedb.org/3"

console.log(process.env.API_KEY)

export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    return data.results
}

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await res.json()
    return data.results
}