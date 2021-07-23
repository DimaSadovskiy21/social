import { profileAPI } from "../api/api";

const ADD_POST = "my-app/profileReducer/ADD-POST";
const SET_USER_PROFILE = "my-app/profileReducer/SET_USER_PROFILE";
const SET_STATUS = "my-app/profileReducer/SET-STATUS";
const DELETE_POST = "my-app/profileReducer/DELETE-POST";

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

export const getUserProfile = (userId) => {
    return async (dispatch) => {
       let response = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
    }
}

export default profileReducer;
