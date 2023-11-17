import { ADD_COMMENT, GET_COMMENTS } from '../action'

const initialState = {
  content: [],
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        content: action.payload,
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.content, action.payload],
      }
    default:
      return state
  }
}

export default commentsReducer
