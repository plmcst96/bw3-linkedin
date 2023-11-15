import { GET_POSTS } from '../action'

const initialState = {
  post: [],
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        post: action.payload,
      }

    default:
      return state
  }
}

export default postsReducer
