import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, deleteLike } from '../../actions/like_actions';

const msp = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id].id,
        commentId: ownProps.commentId,
    });
};

const mdp = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

class CommentLikes extends React.Component {
    constructor(props) {
        super(props);
        this.getLike = this.getLike.bind(this);
        this.liked = this.liked.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    getLike(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
                return likes[i].id;
            }
        }
    }

    liked(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
                return true;
            }
        }
        return false;
    }

    handleLike() {
        const like = {
            user_id: this.props.currentUser,
            likeable_type: "Comment",
            likeable_id: this.props.commentId,
        };

        if (this.liked(like.likeable_id)) {
            const likeId = this.getLike(like.likeable_id);
            this.props.deleteLike(likeId);
        } else {
            this.props.createLike(like);
        }
    }


    render() {
        const likes = Object.values(this.props.likes);
        const likeCount = likes.filter(like => like.likeable_id === this.props.commentId).length;

        const count = (likeCount !== 0) ?
            likeCount
            :
            null;

        if (this.liked(this.props.commentId)) {
            return (
                <div className="comment-likes">
                    <div className="comment-heart-filled" onClick={this.handleLike}></div>
                    <div className="comment-like-count">{count}</div>
                </div>
            )
        }
        else {
            return (
                <div className="comment-likes">
                    <div className="comment-heart" onClick={this.handleLike}></div>
                    <div className="comment-like-count">{count}</div>
                </div>
            )
        }
    }
}

export default withRouter(connect(msp, mdp)(CommentLikes));