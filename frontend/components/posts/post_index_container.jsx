import {connect} from "react-redux";
import {fetchAllPosts, deletePost} from "../../actions/post_actions";
import {fetchAllUsers} from "../../actions/user_actions";
import {fetchAllComments} from "../../actions/comment_actions";
import {fetchAllLikes} from "../../actions/like_actions";
import {fetchAllFollows} from "../../actions/follow_actions";
import PostIndex from "./post_index";


const msp = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        follows: Object.values(state.entities.follows),
        users: Object.values(state.entities.users),
        comments: Object.values(state.entities.comments),
        likes: Object.values(state.entities.likes),
        currentUser: state.session.id,
        username: state.entities.users[state.session.id].username,
        firstName: state.entities.users[state.session.id].full_name.split(" ")[0],
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