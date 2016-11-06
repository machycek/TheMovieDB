import axios from 'axios'

import * as types from './constants'

const categories = {
  TOP_RATED: {
    url: 'top_rated',
    title: 'Top rated',
  },
  POPULAR: {
    url: 'popular',
    title: 'Popular',
  },
  LATEST: {
    url: 'latest',
    title: 'Latest',
  },
  DISCOVER: {
    url: 'discover',
    title: 'Discover',
  }
}

export const getMoviesCategory = ({ page = 1, category = 'DISCOVER' }) => (dispatch: Function) => {
  const moviesCategory =  categories[category]
  axios.get(`/movie/${moviesCategory.url}?page=${page}`)
    .then(response => {
      const { data } = response
      const { results: movies } = data
      if (movies) {
        dispatch(addMovieCategory({ movies, category: moviesCategory.title }))
      } else {
        console.log(moviesCategory, response)
      }
    })
    .catch(response => {
      console.error(response)
    })
}

export const getGenres = () => (dispatch: Function) => {
  axios.get('/genre/movie/list')
    .then(response => {
      const { data } = response
      const genres = {}
      data.genres.map(genre => genres[genre.id] = genre.name)
      dispatch(changeGenres(genres))
    })
    .catch(response => {
      console.error(response)
    })
}

export const addMovieCategory = ({ movies, category }) => (
  { type: types.ADD_MOVIE_CATEGORY, movies, category }
)

export const changeGenres = (genres) => (
  { type: types.CHANGE_GENRES, genres }
)
