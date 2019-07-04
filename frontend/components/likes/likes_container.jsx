import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, deleteLike } from '../../actions/like_actions';
import Likes from './likes';

const msp = (state, ownProps) => {
    const pLikes = state.entities.posts[ownProps.postId].like_ids;
    const cLikes = state.entities.comments[ownProps.commentId].like_ids;

    return ({
        postlikes: Object.values(state.entities.likes).filter(like => pLikes.includes(like.id)),
        commentlikes: Object.values(state.entities.likes).filter(like => cLikes.includes(like.id)),
        postLikers: state.entities.posts[ownProps.postId].liker_ids,
        commentLikers: state.entities.comments[ownProps.commentId].liker_ids,
        currentUser: state.entities.users[state.session.id].username 
    });
};

const mdp = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(msp, mdp)(Likes));