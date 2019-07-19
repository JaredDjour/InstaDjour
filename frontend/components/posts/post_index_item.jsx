import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CommentIndexContainer from "../comments/comment_index_container";
import LikesContainer from "../likes/likes_container";

const msp = (state, ownProps) => {
    return {
        username: state.entities.posts[ownProps.post.id].username,
        userId: state.entities.posts[ownProps.post.id],
        currentUser: state.entities.users[state.session.id].username, 
        likes: state.entities.likes,
        
    };
};

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleDelete = this.handleDelete.bind(this);
        // this.clickCount = 0;
    }

    handleDelete(e) {

        e.preventDefault();
        this.props.deletePost(this.state.id);
    }

    // wanted to have double-click photo for like but
    // handleClick() {
    //     this.clickCount += 1;
    //     if (this.clickCount === 2) {
    //         this.props.likes.includ
    //     }
    // }

    render(){
        const deletePost = (this.props.username === this.props.currentUser) ?
            (<li className="post-auth-options-delete post-auth-options-list-item" onClick={this.handleDelete}>Delete Post</li>) :
               null;

        return (
            <div className="individual-post">
                <div className="post-auth-container">
                    <div className="post-auth-image"></div>
                    <Link className="post-auth" to={`/users/${this.state.user_id}`}>{this.props.username}</Link>
                    
                    <div className="post-auth-options visible"> 
                        <ul className="post-auth-options-list hidden">
                            <li className="post-auth-options-list-item"><a className="post-auth-options-list-item-show" href={`/#/posts/${this.state.id}`}>Go to Post</a></li> 
                            {deletePost}
                        </ul>
                    </div>
                </div>
                <div className="post-photo-container">
                    <img className="photos" src={this.state.photoUrl}></img> 
                </div> 
                <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes}/>
                <div className="post-caption-container">
                    <Link className="post-caption-auth" to={`/users/${this.state.user_id}`}>{this.props.username}</Link>
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
