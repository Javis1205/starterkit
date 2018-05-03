import { LOGIN, LOGOUT, SETUSERDATA } from '../actions/type';

const INITIAL = {
    first: false, // true no sync await 
    loggedIn: false,
    userdata: null,
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: true,
                userdata: action.payload
            };
        case SETUSERDATA:
            if (action.payload !== null){
                return {
                    ...state,
                    loggedIn: true,
                    userdata: action.payload
                };
            } 
            return {
                ...state,
            };
        case LOGOUT:
            return {
                state: INITIAL
            };      
        default:
            return state;
    }
};