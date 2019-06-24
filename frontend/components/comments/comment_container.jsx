import {fetchAllComments, createComment, updateComment, deleteComment} from "../../actions/comment_actions";
import {connect} from "react-redux";
import Comment from "./comment";

const msp = (state, ownProps) => {
    return {
        comment: {
            body: "",
            userId: state.session.currentUser,
            postId: state.entities.posts[ownProps.postId],
        },
        // currentUser: state.session.id,
        // username: state.users.id.username
    };
};

const mdp = dispatch => {
    return {
        fetchAllComments: () => dispatch(fetchAllComments()),
        createComment: comment => dispatch(createComment(comment)),
        updateComment: commentId => dispatch(updateComment(commentId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
    };
};

export default connect(msp, mdp)(Comment);