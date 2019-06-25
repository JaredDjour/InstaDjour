import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    return {
        username: state.entities.users.username
        // username: state.entities.posts[ownProps.post.id].username
    };
};

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.comment;
        this.handleDelete = this.handleDelete.bind(this);
    }

    // componentDidMount() {
    //    this.props.comment. =  
    // }
    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment);
    }


    render() {

        return (
            <div className="individual_comment">
                <div className="comment-auth-container">
                    <div> className="comment-auth" >{this.props.username}</div>
                </div>
                <div className="comment-body-container">
                    <div className="comment-body">{this.props.comment.body}</div>
                </div>
            </div>
        )
    }

};

export default connect(msp, null)(CommentIndexItem);
