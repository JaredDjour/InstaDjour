import React from 'react';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(field){
        return e => this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.deletePost(this.state.id);
    }

    render(){

        return (
            <div className="individual-post">
                <div className="post-auth-container">
                    <Link className="post-index-item-user" to={`/posts/${this.state.id}`}>{this.state.user_id}</Link>
                </div>
                <div className="post-photo-container">
                    <img className="photos" src={this.state.photoUrl}></img> 
                </div> 
                <div className="post-caption-container">
                    <Link className="post-index-item-caption" to={`/posts/${this.state.id}`}>{this.state.caption}</Link>
                </div>
                 <div className="post-edit-delete">
                    <Link className="post-index-item-edit" to={`/posts/${this.state.id}/edit`}>Edit Post</Link>
                    <button className="post-index-item-delete-button" type="button" onClick={this.handleSubmit}>Delete Post</button>
                </div>
            </div>
        )
    }

};

export default PostIndexItem
