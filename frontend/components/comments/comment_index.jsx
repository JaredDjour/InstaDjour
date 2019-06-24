import React from 'react';
import CommentIndexItem from "./comment_index_item";
import CreateCommentFormContainer from './create_comment_form_container';


class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchPostComments(this.props.post.id);
    // }


    render() {
        console.log(this.props);
        // const comments = this.props.comment.reverse().map((comment) => <CommentIndexItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />);
        return (
            <div className="all">
                {/* <ul>{comments}</ul> */}
                {/* <CreateCommentFormContainer /> */}
            </div>
        )
    }
}

export default CommentIndex;