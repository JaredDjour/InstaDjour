import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CommentIndexContainer from "../comments/comment_index_container";
import LikesContainer from "../likes/likes_container";

const msp = (state, ownProps) => {
    return {
        username: state.entities.posts[ownProps.post.id].username,
        currentUser: state.entities.users[state.session.id].username, 
        likes: state.entities.likes,
        
    };
};

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {

        e.preventDefault();
        this.props.deletePost(this.state.id);
    }
  
    render(){
        const deletePost = (this.props.username === this.props.currentUser) ?
               (<li className="post-auth-options-delete" onClick={this.handleDelete}>Delete Post</li>) :
               null;

        return (
            <div className="individual-post">
                <div className="post-auth-container">
                    <div className="post-auth-image"></div>
                    <h2 className="post-auth" >{this.props.username}</h2>
                    <div className="post-auth-options"></div>
                    <ul className="post-auth-options-list">
                            {deletePost}
                        <li><a href="/posts/${this.state.id}">Show Post</a></li> 
                    </ul>
                </div>
                <div className="post-photo-container">
                    <img className="photos" src={this.state.photoUrl}></img> 
                </div> 
                <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes}/>
                <div className="post-caption-container">
                    <h4 className="post-caption-auth" >{this.props.username}</h4>
                    <Link className="post-caption" to={`/posts/${this.state.id}`}>{this.state.caption}</Link>
                </div>
                <div className="comment-index-container"> 
                    <CommentIndexContainer post={this.props.post} postId={this.props.post.id}/>
                </div>
            </div>
        )
    }

};

export default connect(msp, null)(PostIndexItem);
