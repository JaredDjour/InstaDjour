import React from "react";
import {withRouter} from "react-router-dom";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({comment: this.state});
        this.setState({body: "", user_id: this.props.userId, postId: this.props.postId});
    }

    handleChange(field) {
        return e => this.setState({[field]: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleChange}>
                    <input className="add-comment" type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.handleChange("body")}/>
                    <button className="create-comment_button" type="button" onClick={this.handleSubmit}>Post</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Comment);