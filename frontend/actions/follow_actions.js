import * as FollowApiUtil from "../util/follow_api_util";

export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const fetchAllFollows = () => dispatch => {
    return FollowApiUtil.fetchAllFollows().then(follows => dispatch(receiveAllFollows(follows)));
};
export const fetchFollow = (follow) => dispatch => {
    return FollowApiUtil.fetchFollow(follow).then(follow => dispatch(receiveFollow(follow)));
};
export const createFollow = (follow) => dispatch => {
    return FollowApiUtil.createFollow(follow).then(follow => dispatch(receiveFollow(follow)));
};
export const deleteFollow = (followId) => dispatch => {
    return FollowApiUtil.deleteFollow(followId).then((follow) => dispatch(removeFollow(follow)));
};

const receiveAllFollows = follows => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
        follows
    };
};
const receiveFollow = follow => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    };
};
const removeFollow = follow => {
    return {
        type: REMOVE_FOLLOW,
        followId: follow.id
    };
};