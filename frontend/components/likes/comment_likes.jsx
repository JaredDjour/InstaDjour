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
        this.fetchLike = this.fetchLike.bind(this);
        this.liking = this.liking.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    fetchLike(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
                return likes[i].id;
            }
        }
    }

    liking(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
                return true;
            }
        }
        return false;
    }

    handleClick() {
        const like = {
            user_id: this.props.currentUser,
            likeable_type: "Comment",
            likeable_id: this.props.commentId,
        };

        if (this.liking(like.likeable_id)) {
            const likeId = this.fetchLike(like.likeable_id);
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

        if (this.liking(this.props.commentId)) {
            return (
                <div className="comment-likes">
                    <div className="comment-heart-filled" onClick={this.handleClick}></div>
                    <div className="comment-like-count">{count}</div>
                </div>
            )
        }
        else {
            return (
                <div className="comment-likes">
                    <div className="comment-heart" onClick={this.handleClick}></div>
                    <div className="comment-like-count">{count}</div>
                </div>
            )
        }
    }
}

export default withRouter(connect(msp, mdp)(CommentLikes));