import { GET_OTHER_PROFILE, GET_OTHER_USER } from "../action"


const initialState = {
    content: []
}

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OTHER_PROFILE:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }

}

export default userProfileReducer