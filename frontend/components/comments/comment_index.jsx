import React from 'react';
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
    constructor(props) {
        
        super(props);
    }

    // componentDidMount() {
    //     // this.props.fetchAllComments();
    //     this.props.fetchPost(this.props.post.id)
    // }


    render() {
        // const comments = this.props.comment.reverse().map((comment) => <CommentIndexItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />);
        // const {comments} = this.props;
     
        // const comments = this.props.comments.map( (comment) => { 
        //         <CommentIndexItem
        //             key={comment.id}
        //             comment={comment}
        //             deleteComment={this.props.deleteComment} />
        // });
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
                <ul>{comments}</ul>
                {/* <CreateCommentFormContainer /> */}
            </div>
        )
    }
}

export default CommentIndex;