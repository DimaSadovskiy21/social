import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = "my-app/authReducer/SET-AUTH-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "my-app/authReducer/SET-AUTH-USER-DATA";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
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
        payload: { id, email, login, isAuth },
    }
}

export const getCaptchaURLSuccess = (captchaURL) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: { captchaURL }
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

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuth())
        }
        else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('Login', { _error: message }))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptcha();
        dispatch(getCaptchaURLSuccess(response.data.url));
    }
}


export default authReducer;
