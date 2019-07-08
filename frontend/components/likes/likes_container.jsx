import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, deleteLike } from '../../actions/like_actions';
import Likes from './likes';

const msp = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id].id,
        postId: ownProps.postId,
    });
};

const mdp = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(msp, mdp)(Likes));