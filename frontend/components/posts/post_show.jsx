import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount(){
    //     this.props.fetchPost(this.props.match.params.postid);
    // }
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state.id).then(() => this.props.history.push("/"));
    }

    render() {
        if (!this.state) return null;
        // if (!this.state) return <Redirect to=""></Redirect>
        
        return (
            <div className="individual-post">
                <div className="post-auth-container"> 
                    <div className="post-auth-image"></div>
                    <p className="post-auth">{this.state.username}</p>
                    <div className="post-auth-options"></div>
                </div>
                <div className="post-photo-container">
                    <img className="photos" src={this.state.photoUrl}></img>
                </div> 
                 <div className="post-options">
                   <div className="post-options-heart"></div>
                    <div className="post-options-comment"></div>
                    <div className="post-options-share"></div>
                    <div className="post-options-bookmark"></div> 
                </div>
                <div className="post-caption-container">
                    <h4 className="post-caption-auth" >{this.state.username}</h4>
                    <h4 className="post-caption">{this.state.caption}</h4>
                </div>
                <input className="add-comment" type="text" placeholder="Add a comment..." />

                <div className="post-edit-delete-container">
                    <Link className="post-index-item-edit" to={`/posts/${this.state.id}/edit`}>Edit Post</Link>
                    <button className="post-index-item-delete-button" type="button" onClick={this.handleSubmit}>Delete Post</button>
                </div> 
             <div className="feed-button-container">
                <Link className="feed-button" to="/">Feed</Link>
            </div> 
            </div>
        )
    }
}

    export default PostShow;