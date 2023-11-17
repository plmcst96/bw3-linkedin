import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'
import personalPostReducer from '../reducers/personaPost'
import userOtherReducer from '../reducers/other'
import commentsReducer from '../reducers/comments'
import userProfileReducer from '../reducers/profile'
import singleReducer from '../reducers/single'

const bigReducer = combineReducers({
  user: userReducer,
  post: postsReducer,
  personaPost: personalPostReducer,
  other: userOtherReducer,
  comments: commentsReducer,
  profile: userProfileReducer,
  single: singleReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
