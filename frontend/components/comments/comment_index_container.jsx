import { connect } from "react-redux";
// import {withRouter} from "react-router-dom";
import { fetchAllComments, deleteComment } from "../../actions/comment_actions";
import CommentIndex from "./comment_index";


const msp = (state, ownProps) => {

    return {
        // comments: ownProps.post.comments.map(id => state.entities.comments[id]),
        comments: Object.values(state.entities.comments),
        post_id: ownProps.post_id, 
    };
};

const mdp = dispatch => {
    return {
        fetchAllComments: () => dispatch(fetchAllComments()),
        deleteComment: id => dispatch(deleteComment(id)),

    };
};


// export default withRouter(connect(msp, mdp)(CommentIndex));
export default connect(msp, mdp)(CommentIndex);
