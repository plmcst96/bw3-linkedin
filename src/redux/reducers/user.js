import { GET_USER } from '../action'

const initialState = {
  userMe: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userMe: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
