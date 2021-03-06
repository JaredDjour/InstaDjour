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
        this.handleEnter = this.handleEnter.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body !== "") {
            this.props.createComment(this.state);
        }
        this.setState({body: "", user_id: this.props.userId, postId: this.props.postId});
    }

    handleEnter(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            e.preventDefault();

            if (this.state.body !== "") {
                this.props.createComment(this.state);
            }
            this.setState({body: "", user_id: this.props.userId, postId: this.props.postId});
        }
    }
        
    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        const {inputRef} = this.props;

        const button = (this.state.body !== "") ?
        <button className="create-comment_button" type="button" onClick={this.handleSubmit}>Post</button>
        : null;

    //    const commentForm = (this.props.match.params.postId === this.props.postId) ?
    //         <div className="comment-form-show">
    //             <form>
    //                 <input className="add-comment-show" ref={inputRef} type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.handleChange("body")} onKeyUp={this.handleEnter} />
    //                 {button}
    //             </form>
    //         </div>
    //         :
    //         <div className="comment-form">
    //             <form>
    //                 <input className="add-comment" ref={inputRef} type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.handleChange("body")} onKeyUp={this.handleEnter} />
    //                 {button}
    //             </form>
    //         </div>; 


        return (
            // {commentForm}
            <div className="comment-form">
               <form>
                   <input className="add-comment" ref={inputRef} type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.handleChange("body")} onKeyUp={this.handleEnter} />
                   {button}
               </form>
           </div>
        )
    }
}

export default CommentForm;