import { usersAPI } from "../api/api";

const FOLLOW = "my-app/usersReducer/FOLLOW";
const UNFOLLOW = "my-app/usersReducer/UNFOLLOW";
const SET_USERS = "my-app/usersReducer/SET-USERS";
const SET_CURRENT_PAGE = "my-app/usersReducer/SET-CURRENT-PAGE";
const SET_PAGE = "my-app/usersReducer/SET-PAGE";
const TOGGLE_IS_FETCHING = "my-app/usersReducer/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING = "my-app/usersReducer/TOGGLE-IS-FOLOWING";

let initialState = {
    users: [],
    count: 100,
    page: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching

            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        page
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsFollowing = (isFollowing, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFollowing, userId
    }
}

export const getUsers = (currentPage, count) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, count)
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setPage(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(toggleIsFollowing(true, userId))
        let response = await apiMethod(userId)
                if (response.data.resultCode === 0) {
                    dispatch(actionCreator(userId))
                }
                dispatch(toggleIsFollowing(false, userId))
    }

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess)
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess)
    }
}

export default usersReducer;
