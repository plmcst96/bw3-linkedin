import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'
import personalPostReducer from '../reducers/personaPost'
import userOtherReducer from '../reducers/other'
import commentsReducer from '../reducers/comments'

const bigReducer = combineReducers({
  user: userReducer,
  post: postsReducer,
  personaPost: personalPostReducer,
  other: userOtherReducer,
  comments: commentsReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
