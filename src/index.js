import config from './config/axios'
import { createStore, applyMiddleware } from 'redux'

import Reducers from './Reducers/reducers'
import ReduxThunk from 'redux-thunk'

export default createStore(
  Reducers,
  applyMiddleware(ReduxThunk)
)
