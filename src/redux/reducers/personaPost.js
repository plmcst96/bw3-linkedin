import { SET_POST } from '../action'

const initialState = {
  content: [],
}

const personalPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    default:
      return state
  }
}

export default personalPostReducer
