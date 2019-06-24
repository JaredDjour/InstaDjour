import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { fetchAllComments, deleteComment } from "../../actions/comment_actions";
import CommentIndex from "./comment_index";


const msp = (state, ownProps) => {
    const comments = ownProps.post.comment_ids.map(id => state.entities.comments[id]); 
    return {
        // comments: ownProps.post.comment_ids.map(id => state.entities.comments[id]),
        comments
    };
};

const mdp = dispatch => {
    return {
        fetchAllComments: () => dispatch(fetchPostComments()),
        deleteComment: id => dispatch(deleteComment(id)),

    };
};


export default withRouter(connect(msp, mdp)(CommentIndex));
