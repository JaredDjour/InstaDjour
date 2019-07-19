import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentLikes from "../likes/comment_likes";

const msp = (state, ownProps) => {
    return {
        username: state.entities.comments[ownProps.comment.id].username,
        userId: state.entities.comments[ownProps.comment.id].user_id,
        currentUser: state.entities.users[state.session.id].username, 
        likes: state.entities.likes,
    };
};
 
class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id);
    }


    render() {
        const deleteComment = (this.props.username === this.props.currentUser) ?
            <button className="comment-options" type="button" onClick={this.handleDelete}>Delete</button>
            : null;

        return (
            <div className="individual_comment">
                <div className="comment-auth-container">
                    <Link className="comment-auth" to={`/users/${this.props.userId}`}>{this.props.username}</Link>
                </div>
                <div className="comment-body-container">
                    <div className="comment-body">{this.props.comment.body}</div>
                </div>
           
                <CommentLikes className="comment-options" comment={this.props.comment} commentId={this.props.comment.id} likes={this.props.likes} />
                {deleteComment}
             
            </div>
        )
    }

};

export default withRouter(connect(msp, null)(CommentIndexItem));
