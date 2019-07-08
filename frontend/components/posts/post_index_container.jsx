import {connect} from "react-redux";
import {fetchAllPosts, deletePost} from "../../actions/post_actions";
import {fetchAllComments} from "../../actions/comment_actions";
import {fetchAllLikes} from "../../actions/like_actions";
import PostIndex from "./post_index";


const msp = state => {
    return {
        posts: Object.values(state.entities.posts),
    };
};

const mdp = dispatch => {
    return {
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        deletePost: id => dispatch(deletePost(id))
    };
};


export default connect(msp, mdp)(PostIndex);