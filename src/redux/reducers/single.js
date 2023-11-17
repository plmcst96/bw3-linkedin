import { SINGLE_COMMENT_ID, SINGLE_COMMENT_TEXT } from "../action"

const initialState = {
    content: {
        comment: '',
        rate: 1,
        elementId: null,
    }
}

const singleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_COMMENT_TEXT:
            return {
                ...state,
                content: { ...state.content, comment: action.payload }
            }
        case SINGLE_COMMENT_ID:
            return {
                ...state,
                content: { ...state.content, elementId: action.payload }
            }
        default:
            return state
    }
}

export default singleReducer