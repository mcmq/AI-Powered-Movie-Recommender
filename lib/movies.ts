export type Movie = {
  adult: boolean,
  backdrop_path: string | null,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

type FetchMoviesResult =
  | { success: true; movies: Movie[] }
  | { success: false; error: string }

export async function fetchMovies({ page }: { page: number }): Promise<FetchMoviesResult> {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=61cf28edcd5790f6452ca5aca9f61c83&page=${page}`)
    if (!res.ok) {
      return { success: false, error: `HTTP error: ${res.status}` }
    }

    const data = await res.json()
    return { success: true, movies: data.results as Movie[] }

  } catch (error) {
    console.error("FetchMovies Error:", error)
    return { success: false, error: "Network or server error" }
  }
}