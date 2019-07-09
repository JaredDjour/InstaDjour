import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUserPosts, fetchAllPosts, deletePost } from "../../actions/post_actions";
import { fetchAllComments } from "../../actions/comment_actions";
import { fetchAllLikes } from "../../actions/like_actions";
import Profile from "./profile";


const msp = (state, ownProps) => {
    return {
        // posts: Object.values(state.entities.posts).filter(post => post.user_id === ownProps.match.params.user_id), 
        posts: Object.values(state.entities.posts).filter(post => post.user_id === state.session.id), 
    };
};

const mdp = dispatch => {
    return {
        fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
        fetchAllComments: () => dispatch(fetchAllComments()),
        // fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        deletePost: id => dispatch(deletePost(id))
    };
};


export default withRouter(connect(msp, mdp)(Profile));