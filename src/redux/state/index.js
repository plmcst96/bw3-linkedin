import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'
import personalPostReducer from '../reducers/personaPost'
import userOtherReducer from '../reducers/other'

const bigReducer = combineReducers({
  user: userReducer,
  post: postsReducer,
  personaPost: personalPostReducer,
  other: userOtherReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
