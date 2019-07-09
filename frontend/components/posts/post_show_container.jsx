import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchPost, deletePost} from "../../actions/post_actions";
import { fetchAllComments } from "../../actions/comment_actions";
import { fetchAllLikes } from "../../actions/like_actions";

import PostShow from "./post_show";

const msp = (state, ownProps) => { 
    return {
        post: state.entities.posts[ownProps.match.params.postId],
        likes: state.entities.likes,
        // username: state.entities.posts.username
        
    };
};

const mdp = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        action: id => dispatch(deletePost(id)),
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),

    };
};

export default withRouter(connect(msp, mdp)(PostShow));