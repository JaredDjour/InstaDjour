import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUserPosts, fetchAllPosts, deletePost } from "../../actions/post_actions";
import { fetchAllComments } from "../../actions/comment_actions";
import { fetchAllLikes } from "../../actions/like_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import Profile from "./profile";


const msp = (state, ownProps) => {
    const userId = parseInt(ownProps.match.params.user_id);
    // const posts = Object.values(state.entities.posts).filter(post => post.user_id === userId); 
    username = state.entities.users[ownProps.match.params.user_id].username
    return {
        posts: Object.values(state.entities.posts).filter(post => post.user_id === userId),
        userId,
        username,
        // username: state.entities.users[ownProps.match.params.user_id].username
    };
};

const mdp = dispatch => {
    return {
        fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        deletePost: id => dispatch(deletePost(id))
    };
};


export default withRouter(connect(msp, mdp)(Profile));