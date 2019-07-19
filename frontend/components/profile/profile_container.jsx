import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUserPosts } from "../../actions/post_actions";
import { fetchAllUsers} from "../../actions/user_actions";
import { fetchAllFollows } from "../../actions/follow_actions";
import {openModal, closeModal} from "../../actions/modal_actions";
import Profile from "./profile";


const msp = (state, ownProps) => {
    const userId = parseInt(ownProps.match.params.user_id);
    if (state.entities.users[userId]) {
        const username = state.entities.users[userId].username;
        const fullName = state.entities.users[userId].full_name;
        const email = state.entities.users[userId].email;
        const posts = Object.values(state.entities.posts).filter(post => post.user_id === userId);
        return {
            userId,
            posts,
            username,
            fullName,
            email,
            follows: state.entities.follows,
            users: Object.values(state.entities.users), 
            allPosts: Object.values(state.entities.posts),
        }
    } else {
        return {};
    }
};

const mdp = dispatch => {
    return {
        fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
        // fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllFollows: () => dispatch(fetchAllFollows()),
        openModal: (id) => dispatch(openModal('showPost', id)),
        closeModal: () => dispatch(closeModal()),
     };
};


export default withRouter(connect(msp, mdp)(Profile));