import { connect } from "react-redux";
import { fetchPostComments, deleteComment } from "../../actions/comment_actions";
import Comments from "./comments";

const msp = (state, ownProps) => {
    return {
        comment: {
            body: "",
            userId: state.session.id,
            postId: state.entities.posts[ownProps.postId]
        },
        username: state.entities.comments[ownProps.comment.id].username
    };
};

const mdp = dispatch => {
    return {
        fetchPostComments: postId => dispatch(fetchPostComments(postId)),
        deleteComment: id => dispatch(deleteComment(id))
    };
};

export default connect(msp, mdp)(Comments);