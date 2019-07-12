import { fetchAllPosts, fetchPost, createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
    return {
        // post: {caption: ""}
        post: {    
            caption: "",
            photoFile: null,
            photoUrl: null,
            userId: state.session.id,
            // username: state.entities.posts.id.username
        },
        username: state.entities.users[state.session.id].username,
        currentUser: state.session.id,
        fullName: state.entities.users[state.session.id].full_name,
    };
};

const mdp = dispatch => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id)),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        action: post => dispatch(createPost(post)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    };
};

// export default withRouter(connect(msp, mdp)(PostForm));
export default (connect(msp, mdp)(PostForm));