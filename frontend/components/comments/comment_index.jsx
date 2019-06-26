import React from 'react';
import CommentIndexItem from "./comment_index_item";
import CreateCommentFormContainer from './create_comment_form_container';

class CommentIndex extends React.Component {
    constructor(props) {
        
        super(props);
    }

    // componentDidMount() {
    //     // this.props.fetchAllComments();
    //     this.props.fetchPost(this.props.post.id)
    // }


    render() {
        const post_id = this.props.post.id; 
        const comments = this.props.comments.map((comment) => {
            if (post_id === comment.post_id) {
                return (
                    <CommentIndexItem 
                    key={comment.id} 
                    comment={comment} 
                    deleteComment={this.props.deleteComment} 
                    />
                )
            }
        });
        return (
            <div className="all-comments"> 
                <ul className="all-comments-ul">{comments}</ul>
                <CreateCommentFormContainer postId={post_id} />
                {/* <CreateCommentFormContainer postId={this.props.post.id} /> */}
            </div>
        )
    }
}

export default CommentIndex;