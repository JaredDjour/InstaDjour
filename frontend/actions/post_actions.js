import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const fetchAllPosts = () => dispatch => {
   return PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts))); 
};

export const fetchPost = post => dispacth => {
    return PostApiUtil.fetchPost(post).then()
}





const receiveAllPosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    };
};

const receivePost = post => {
    return {
        type: RECEIVE_POST,
        posts
    };
};

const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId
    };
};