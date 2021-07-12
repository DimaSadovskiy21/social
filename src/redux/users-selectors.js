import { createSelector } from "reselect";

const getUserSelector = (state) => {
    return state.usersPage.users
}

export const getUser = createSelector(getUserSelector, 
    (users) => {
    return users.filter(u => true)
})

export const getCount = (state) => {
    return state.usersPage.count
}

export const getPage = (state) => {
    return state.usersPage.page
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}