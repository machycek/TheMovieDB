import * as types from './constants'

const initialState = {
  movies: {
    Popular: [],
    'Top rated': [],
    Latest: [],
  },
  genres: {

  },
}

const MoviesDB = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_MOVIE_CATEGORY:
      const { movies, category } = action
      return { ...state, movies: { ...state.movies, [category]: movies } }

    case types.CHANGE_GENRES:
      const { genres } = action
      return { ...state, genres }

    default:
      return state;
  }
}

export default MoviesDB
