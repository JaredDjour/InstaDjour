import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {PostIndexItem} from "./post_index_item";
import CreateCommentFormContainer from '../comments/create_comment_form_container';
import CommentIndexContainer from "../comments/comment_index_container";
import LikesContainer from "../likes/likes_container";


class PostShow extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.postId !== prevProps.match.params.postId) {
            this.props.fetchPost(this.props.match.params.postId); 
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state.id).then(() => this.props.history.push("/"));
    }

    render() {
      
        if (!this.state) return null;
        // if (!this.state) return <Redirect to=""></Redirect>
        
        return (
         
            <div className="individual-post-show">

                <div className="post-show-left">  
                    <div className="post-photo-container">
                        <img className="photos" src={this.state.photoUrl}></img>
                    </div> 
                </div> 

                <div className="post-show-right">
                    <div className="post-show-auth-container">
                        <div className="post-auth-image"></div>
                        <p className="post-auth">{this.state.username}</p>
                        <div className="post-auth-options"></div>
                    </div>

                    <div className="post-show-caption-container">
                        <h4 className="post-caption-auth" >{this.state.username}</h4>
                        <h4 className="post-caption">{this.state.caption}</h4>
                    </div> 
                    <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes} />
                    <div className="post-show-space"></div>

                    <div className="post-show-comments">
                        <CommentIndexContainer post={this.props.post} postId={this.props.post.id} />
                        {/* <CreateCommentFormContainer postId={this.props.post.id} /> */}
                    </div>
                    {/* <div className="post-edit-delete-container">
                        <button className="post-index-item-delete-button" type="button" onClick={this.handleSubmit}>Delete Post</button>
                    </div>  */}
                        {/* <Link className="post-index-item-edit" to={`/posts/${this.state.id}/edit`}>Edit Post</Link> */}
                    <div className="feed-button-container">
                        <Link className="feed-button" to="/">Feed</Link>
                    </div> 
                </div>
            </div>
        )
    }
}

    export default PostShow;