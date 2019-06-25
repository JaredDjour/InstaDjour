import React from "react";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.comment; 
        this.state = {
            body: "",
            post_id: this.props.postId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //     // this.props.fetchAllComments();
    //     this.props.fetchPost(this.state.post_id);
    // }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.createComment({comment: this.state});
        this.props.createComment(this.state);
        // this.setState({body: "", user_id: this.props.userId, postId: this.props.postId});
        this.setState({ content: "" });
       
        this.props.fetchPost(this.state.post_id);

    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        // const = { currentUser, comment } = this.props;ه
        return (
            <div className="comment-form">
                <form>
                    {/* <input className="add-comment" type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.handleChange("body")}/>
                    <button className="create-comment_button" type="button" onClick={this.handleSubmit}>Post</button> */}
                    <input className="add-comment" type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.handleChange("body")} />
                    <button className="create-comment_button" type="button" onClick={this.handleSubmit}>Post</button>
                    {/* <textarea 
                    name="body" 
                    id="comment-text-field" 
                    value={this.state.body}
                    placeholder="Add a comment..."
                    onChange={this.handleChange("body")}>
                    </textarea> */}
                </form>
            </div>
        )
    }
}

// export default withRouter(Comment);
export default CommentForm;