import * as ActionTypes from '../Actions/ActionTypes'

export const postModeSuccess = (data) => {
    return {
        type: ActionTypes.ADD_MODE_SUCCESS,
        value: data
    }
}

export const postMode = (data) => {
    return (dispatch) => {
        dispatch(postModeSuccess(data));
    }
}

export const postColorSuccess = (data) => {
    return {
        type: ActionTypes.ADD_COLOR_SUCCESS,
        value: data
    }
}

export const postColor = (data) => {
    return (dispatch) => {
        dispatch(postColorSuccess(data));
    }
}

// export const fetchModeSuccess = (data) => {
//     return {
//         type: ActionTypes.FETCH_MODE_SUCCESS,
//         value: data
//     }
// }

// export const fetchMode = (data) => {
//     return (dispatch) => {
//         dispatch(fetchModeSuccess("fetch"));
//     }
// }