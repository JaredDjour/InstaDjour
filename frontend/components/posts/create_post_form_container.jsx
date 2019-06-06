import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const msp = state => {
    return {
        post: {caption: ""}
        // post: {    
        //     caption: "",
        //     photoFile: null,
        //     photoUrl: null,
        //     user_id: null,
        // }
    };
};

const mdp = dispatch => {
    return {
        action: post => dispatch(createPost(post))
    };
};

export default withRouter(connect(msp, mdp)(PostForm));