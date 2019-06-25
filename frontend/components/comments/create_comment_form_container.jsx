import { createComment } from "../../actions/comment_actions";
import { connect } from "react-redux";
import CommentForm from "./comment_form";

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
        createComment: comment => dispatch(createComment(comment)),
        // updateComment: commentId => dispatch(updateComment(commentId)),
        // deleteComment: commentId => dispatch(deleteComment(commentId)),
    };
};

export default connect(null, mdp)(CommentForm);