import * as axios from "axios";

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers : {
        'API-KEY' : '54e01718-863c-4c9f-b63a-ccb2759f9ce0'
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {

        return   instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(respose => {
                return respose.data
            });
    }
};

export const getUsers = (currentPage = 1, pageSize = 10) => {

    return   instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(respose => {
            return respose.data
        });
};
