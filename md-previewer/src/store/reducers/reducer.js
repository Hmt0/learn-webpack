import { UPDATE_INPUT } from "../actions/actions";

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_INPUT:
            return {...state, message: state.message + action.payload}
        default:
            return state
    }
}