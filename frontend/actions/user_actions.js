import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchAllUsers = () => dispatch => {
    return UserApiUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)));
};
export const fetchUser = user => dispatch => {
    return UserApiUtil.fetchUser(user).then(user => dispatch(receiveUser(user)));
};


const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    };
};
const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};