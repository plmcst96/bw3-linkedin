import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'

const bigReducer = combineReducers({
  user: userReducer,
  post: postsReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
