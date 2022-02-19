type MovieDetail = {
  id: string
  title: string
  year: string
  type: string
  poster: string
	released: string,
	runtime: string,
	genres: string,
	director: string,
	actors:string,
	plot: string,
	ratings: {
    source: string,
    value:string
  }[],
	metascore: string,
	imdbRating:string,
	boxOffice: string,
}

export default MovieDetail