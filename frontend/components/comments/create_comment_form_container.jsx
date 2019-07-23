import { createComment, fetchComment } from "../../actions/comment_actions";
import { fetchPost } from "../../actions/post_actions";
import { connect } from "react-redux";
import CommentForm from "./comment_form";
import {withRouter} from "react-router-dom";
// const msp = (state, ownProps) => {
//     return {
//         comment: {
//             body: "",
//             userId: state.session.currentUser,
//             postId: ownProps.postId
//             // postId: state.entities.posts[ownProps.postId],
//         },
//         // currentUser: state.session.id,
//         // username: state.users.id.username
//     };
// };

const mdp = dispatch => {
    return {
        // fetchAllComments: () => dispatch(fetchAllComments()),
        fetchPost: (id) => dispatch(fetchPost(id)),
        createComment: comment => dispatch(createComment(comment)),
        fetchComment: comment => dispatch(fetchComment(comment)),
        // updateComment: commentId => dispatch(updateComment(commentId)),
        // deleteComment: commentId => dispatch(deleteComment(commentId)),
    };
};

export default withRouter(connect(null, mdp)(CommentForm));