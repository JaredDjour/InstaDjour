import {connect} from "react-redux";
import {fetchAllPosts, deletePost} from "../../action/post_actions";
import PostIndex from "./post_index";


const msp = state => {
    return {
        posts: Object.values(state.posts),
    };
};

const mdp = dispatch => {
    return {
        fetchAllPost: () => dispatch(fetchAllPosts()),
        deletePost: id => dispatch(deletePost(id))
    };
};


export default connect(msp, mdp)(PostIndex);