import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "my-app/authReducer/SET-AUTH-USER-DATA";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload:{ id, email, login, isAuth },
    }
}

export const getAuth = () => {
    return async (dispatch) => {
       let response = await authAPI.getAuth()
                if (response.data.resultCode === 0) {
                    let { id, email, login, isAuth } = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
    }
}

export const login = (email, password, rememberMe ) => {
    return async (dispatch) => {
       let response = await authAPI.login(email, password, rememberMe)
            if(response.data.resultCode === 0) {
                dispatch(getAuth())
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('Login', {_error: message}))
            }
    }
}

export const logout = () => {
    return async (dispatch) => {
       let response = await authAPI.logout()
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}


export default authReducer;
