import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const fetchAllComments = () => dispatch => {
    return CommentApiUtil.fetchAllComments().then(comments => dispatch(receiveAllComments(comments)));

};
export const fetchComment = (comment) => dispatch => {
    return CommentApiUtil.fetchComment(comment).then(comment => dispatch(receiveComment(comment)));
};

export const createComment = (comment) => dispatch => {
    return CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)));
};
// export const updateComment = (comment) => dispatch => {
//     return CommentApiUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)));
// };
export const deleteComment = (commentId) => dispatch => {
    return CommentApiUtil.deleteComment(commentId).then((comment) => dispatch(removeComment(comment)));

};


const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    };
};

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    };
};
const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        commentId: comment.id
    };
};