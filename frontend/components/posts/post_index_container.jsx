import {connect} from "react-redux";
import {fetchAllPosts, deletePost} from "../../actions/post_actions";
import {fetchAllUsers} from "../../actions/user_actions";
import {fetchAllComments} from "../../actions/comment_actions";
import {fetchAllLikes} from "../../actions/like_actions";
import {fetchAllFollows} from "../../actions/follow_actions";
import PostIndex from "./post_index";


const msp = state => {
    // debugger
    return {
        posts: Object.values(state.entities.posts),
        follows: state.entities.follows,
        currentUser: state.session.id,
    };
};

const mdp = dispatch => {
    return {
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        deletePost: id => dispatch(deletePost(id)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllFollows: () => dispatch(fetchAllFollows()),
    };
};


export default connect(msp, mdp)(PostIndex);