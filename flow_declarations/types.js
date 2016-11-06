// @flow

declare type Movie = {
  poster_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
  title: string,
  vote_average: number,
}

declare type Category = {
  title: string,
  movies: Array<Movie>,

  // dynamic keys for genres - example { 14: 'Thriller'}
  genres: Object,
}
