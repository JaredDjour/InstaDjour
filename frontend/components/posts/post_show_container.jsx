import { connect } from 'react-redux';
import {fetchPost} from "../../actions/post_actions";
import PostShow from "./post_show";

const msp = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.postId],
        userId: state.posts[ownProps.match.params.userId],
    };
};

const mdp = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id))
    };
};

export default connect(msp, mdp)(PostShow);