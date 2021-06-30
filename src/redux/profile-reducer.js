import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
        posts: [
            { id: 1, message: "I'm react developer", like: "777" },
            { id: 2, message: "Hi, how are you?", like: "1277" },
            { id: 3, message: "Hi, I'm Dima", like: "2121" },
        ],
        newPostText: 'add',
        profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 777,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        newText: post
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}

export default profileReducer;
