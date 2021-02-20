import * as ActionTypes from "../Actions/ActionTypes";
let initialState = {
    userSelectedMode: 'left',
    selectedColor: 'blue'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MODE_SUCCESS:
            {
                return {
                    ...state,
                    userSelectedMode: action.value.mode
                }
            }
            case ActionTypes.ADD_COLOR_SUCCESS:
                {
                    return {
                        ...state,
                        selectedColor: action.value.selectedColor
                    }
                }

        // case ActionTypes.FETCH_MODE_SUCCESS:
        //     {
        //         return {
        //             ...state
        //         }
        //     }
        default:
            return state;
    }
}
export default reducer;