import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'
import personalPostReducer from '../reducers/personaPost'

const bigReducer = combineReducers({
  user: userReducer,
  post: postsReducer,
  personaPost: personalPostReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
