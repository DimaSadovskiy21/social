import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "my-app/profileReducer/ADD-POST";
const SET_USER_PROFILE = "my-app/profileReducer/SET_USER_PROFILE";
const SET_STATUS = "my-app/profileReducer/SET-STATUS";
const DELETE_POST = "my-app/profileReducer/DELETE-POST";
const SAVE_PHOTO_SUCCESS = "my-app/profileReducer/SAVE_PHOTO_SUCCESS"

let initialState = {
        posts: [
            { id: 1, message: "I'm react developer", like: "777" },
            { id: 2, message: "Hi, how are you?", like: "1277" },
            { id: 3, message: "Hi, I'm Dima", like: "2121" },
        ],
        profile: null,
        status: "",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.addPostText,
                like: 777,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id),
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPost = (addPostText) => {
    return {
        type: ADD_POST, addPostText
    }
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_STATUS,
        status 
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
       let response = await profileAPI.getStatus(userId)
            dispatch(setUserStatus(response.data))
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
            if(response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
    }
}

export const getUserProfile = (userId) => {
    return async (dispatch) => {
       let response = await profileAPI.getProfile(userId);
            dispatch(setUserProfile(response.data))
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const response = await profileAPI.saveProfile(profile)
        const userId = getState().auth.id ;
            if(response.data.resultCode === 0) {
                dispatch(getUserProfile(userId))
            } else {
                dispatch(stopSubmit("edit-profile", {_error:response.data.messages[0]}));
                return Promise.reject(response.data.messages[0])
            }
    }
}


export default profileReducer;
