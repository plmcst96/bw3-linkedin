import { GET_OTHER_USER } from "../action"


const initialState = {
    content: []
}

const userOtherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OTHER_USER:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }

}

export default userOtherReducer