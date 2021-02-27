import * as ActionTypes from '../Actions/ActionTypes'

/*
Action Creator containing the set of all the Action
*/

export const postModeSuccess = (data) => {
    return {
        type: ActionTypes.ADD_MODE_SUCCESS,
        value: data
    }
}

// Add User Selected Mode to the Store
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

// Add User Selected Color to the Store
export const postColor = (data) => {
    return (dispatch) => {
        dispatch(postColorSuccess(data));
    }
}

export const addReverseTogglerSuccess = (data) => {
    return {
        type: ActionTypes.ADD_REVERSE_SUCCESS,
        value: data
    }
}

// Add Reverse Bool to the Store
export const addReverseToggler = (data) => {
    return (dispatch) => {
        dispatch(addReverseTogglerSuccess(data));
    }
}