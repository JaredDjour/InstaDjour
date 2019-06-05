import {connect} from "react-redux";
import {fetchAllPosts, deletePost} from "../../actions/post_actions";
import PostIndex from "./post_index";


const msp = state => {
    return {
        posts: Object.values(state.posts),
    };
};

const mdp = dispatch => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        deletePost: id => dispatch(deletePost(id)),
        
    };
};


export default connect(msp, mdp)(PostIndex);