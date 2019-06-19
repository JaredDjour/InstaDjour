import { connect } from 'react-redux';
import {fetchPost} from "../../actions/post_actions";
import PostShow from "./post_show";

const msp = (state, ownProps) => {
    return {
        post: state.entities.posts[ownProps.match.params.postId],
        username: state.entities.posts.username
    };
};

const mdp = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        action: id => dispatch(deletePost(id))
    };
};

export default connect(msp, mdp)(PostShow);