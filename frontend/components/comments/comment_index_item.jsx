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
        this.state = this.props.comment;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.state.id);
    }



    render() {
        console.log(this.props)
        return (
            <div className="individual_comment">
                <div className="comment-auth-container">
                    <h2 className="comment-auth" >{this.props.username}</h2>
                </div>
              <h2>CommentIndexItem</h2>
            </div>
        )
    }

};

export default connect(msp, null)(CommentIndexItem);
