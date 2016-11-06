import { combineReducers } from 'redux'

import moviesDB from '../MoviesDB/Reducer'

const rootReducer = combineReducers({
  moviesDB,
})

export default rootReducer;
