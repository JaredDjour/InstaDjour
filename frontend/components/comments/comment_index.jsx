import React from 'react';
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllComments();
    }


    render() {
        // const comments = this.props.comment.reverse().map((comment) => <CommentIndexItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />);
        // const {comments} = this.props;
        const comments = this.props.comments.map( (comment) => {
            if(this.props.post.id === comment.post_id) {
                <CommentIndexItem
                    key={comment.id}
                    comment={comment}
                    deleteComment={this.props.deleteComment} />
            }
        });


        return (
            <div className="all-comments"> 
                <ul>{comments}</ul>
                {/* <CreateCommentFormContainer /> */}
            </div>
        )
    }
}

export default CommentIndex;