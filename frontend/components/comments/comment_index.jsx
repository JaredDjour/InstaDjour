import React from 'react';
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchPostComments(this.props.post.id);
    // }


    render() {
        // const comments = this.props.comment.reverse().map((comment) => <CommentIndexItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />);
        // const {comments} = this.props;
        const comments = this.props.comments.map( (comment, idx) => {
        <CommentIndexItem 
        key={idx}
        deleteComment={deleteComment}
        comment={comment}/>
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