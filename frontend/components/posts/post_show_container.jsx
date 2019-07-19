import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchPost, fetchAllPosts, deletePost} from "../../actions/post_actions";
import { fetchAllComments } from "../../actions/comment_actions";
import { fetchAllLikes } from "../../actions/like_actions";

import PostShow from "./post_show";

const msp = (state, ownProps) => { 
    const post = (state.entities.posts[ownProps.match.params.postId] || ownProps.post); 
    return {
        // post: (state.entities.posts[ownProps.match.params.postId] || state.ui.modal[1]),
        post,
        likes: state.entities.likes,
        users: Object.values(state.entities.users),
        posts: Object.values(state.entities.posts),
        // username: state.entities.posts.username
        
    };
    
};

const mdp = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        action: id => dispatch(deletePost(id)),
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllPosts: () => dispatch(fetchAllPosts())
    };
};

export default withRouter(connect(msp, mdp)(PostShow));