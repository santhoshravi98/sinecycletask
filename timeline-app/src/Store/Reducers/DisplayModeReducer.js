import * as ActionTypes from "../Actions/ActionTypes";

/*
Reducer for the Global Store
*/

let initialState = {
    userSelectedMode: 'left',
    selectedColor: 'blue',
    reverse: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Distribute the existing State, add new User Selected Mode to the store
        case ActionTypes.ADD_MODE_SUCCESS:
            {
                return {
                    ...state,
                    userSelectedMode: action.value.mode
                }
            }
        // Distribute the existing State, add new User Selected Color to the store
        case ActionTypes.ADD_COLOR_SUCCESS:
            {
                return {
                    ...state,
                    selectedColor: action.value.selectedColor
                }
            }

        // Distribute the existing State, add new User Selected Color to the store
        case ActionTypes.ADD_REVERSE_SUCCESS:
            {
                return {
                    ...state,
                    reverse: action.value
                }
            }

        default:
            return state;
    }
}

export default reducer;