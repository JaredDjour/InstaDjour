import { connect } from "react-redux";
import { fetchAllComments, deleteComment } from "../../actions/comment_actions";
import CommentIndex from "./comment_index";


const msp = state => {
    return {
        // comments: Object.values(state.entities.posts.comments),

    };
};

const mdp = dispatch => {
    return {
        fetchAllComments: () => dispatch(fetchPostComments()),
        deleteComment: id => dispatch(deleteComment(id)),

    };
};


export default connect(null, mdp)(CommentIndex);
