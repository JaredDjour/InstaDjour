import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const fetchAllPosts = () => dispatch => {
   return PostApiUtil.fetchAllPosts().then(posts => dispatch(receiveAllPosts(posts)));  
};

export const fetchPost = post => dispatch => {
    return PostApiUtil.fetchPost(post).then(post => dispatch(receivePost(post)));
};

export const createPost = post => dispatch => {
    return PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)));
};

export const updatePost = post => dispatch => {
    return PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)));
};

export const deletePost = postId => dispatch => {
    return PostApiUtil.deletePost(postId).then((post) => dispatch(removePost(post)));
};

export const fetchUserPosts = userId => dispatch => {
    return PostApiUtil.fetchUserPosts(userId).then((posts) => dispatch(receiveAllPosts(posts)));
};
// export const fetchUserPosts = userId => dispatch => {
//     return PostApiUtil.fetchUserPosts(userId).then((posts, userId) => dispatch(receiveUserPosts(posts, userId)));
// };
// export const fetchUserPosts = user => dispatch => {
//     return UserApiUtil.fetchUser(user).then(user => dispatch(receiveUserPosts(user)));
// }

const receiveAllPosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    };
};
// const receiveUserPosts = (user) => {
//     return {
//         type: RECEIVE_USER_POSTS,
//         user
//     };
// };

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post, 

    };
};

const removePost = post => {
    return {
        type: REMOVE_POST,
        postId: post.id
    };
};