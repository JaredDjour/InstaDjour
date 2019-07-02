import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchPost, deletePost} from "../../actions/post_actions";
import PostShow from "./post_show";

const msp = (state, ownProps) => {
    debugger
    return {
        post: state.entities.posts[ownProps.match.params.postId],
        // post: state.entities.posts[ownProps.match.params.postId],
        // username: state.entities.posts.username
        
    };
};

const mdp = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        action: id => dispatch(deletePost(id))
    };
};

export default withRouter(connect(msp, mdp)(PostShow));