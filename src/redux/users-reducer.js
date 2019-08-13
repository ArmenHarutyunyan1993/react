const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users : [
        // { id:1, photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCO4vs56hKMXXZ5h4fzZfKq3N54M7XJKs_Q6ldOlNWFMxW6NdjA',
        //     followed:false, fullName:"Dmitry K", status : "I am a Boss...", location : { city : "Minsk", country : "Belarus" } },
        // { id:2, photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAP75McVwIVTDIB6gzBteYMOxjnvZnZpXSwy5O4rx6M356Oxgw0A',
        //     followed:true, fullName:"Sasha", status : "I am a Boss...", location : { city : "Moscow", country : "Russia" } },
        // { id:3, photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrkKZZB1f4jRUXIK1iCk8Gu04zCLibsbjgKe8kDNyiYU5ZPq2Ww',
        //     followed:false, fullName:"Andre", status : "I am a Boss...", location : { city : "Kiev", country : "Ukraine" } }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users : state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed : true }
                    }
                    return u;
                })
            };
        case UNFOLLOW :
            return {
                ...state,
                users : state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed : false }
                    }
                    return u;
                })
            };
        case SET_USERS :
            return {
                ...state,
                users : [...state.users, ...action.users]
            };
        default :
            return state;
    }
};

export const followAC = (userId) => ({ type : FOLLOW, userId });
export const unfollowAC = (userId) => ({ type : UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type : SET_USERS, users });

export default usersReducer;
