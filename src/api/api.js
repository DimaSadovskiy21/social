import *as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "76f77830-e67c-4459-8878-5631baea355c"
    }, 
})

export const usersAPI = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`
        ).then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`)
    }
}

