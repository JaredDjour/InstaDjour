import React from "react";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            post_id: this.props.postId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({body: "", user_id: this.props.userId, postId: this.props.postId});
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {

        return (
            <div className="comment-form">
                <form>
                    <input className="add-comment" type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.handleChange("body")} />
                    <button className="create-comment_button" type="button" onClick={this.handleSubmit}>Post</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;