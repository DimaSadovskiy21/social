import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_PAGE = "SET-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLOWING";

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
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, count)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setPage(response.totalCount));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId))
            })
    }
}

export default usersReducer;
