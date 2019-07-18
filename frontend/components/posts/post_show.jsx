import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from "../comments/comment_index_container";
import LikesContainer from "../likes/likes_container";
import NavBarContainer from "../nav_bar/nav_bar_container";

class PostShow extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllComments();
        this.props.fetchAllLikes();
        this.props.fetchPost(this.props.match.params.postId)
        .then(() => this.setState(this.props.post));
        // this.props.fetchAllPosts()
        // .then(() => this.setState(this.props.post));
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.postId !== this.props.match.params.postId) {
            this.props.fetchPost(this.props.match.params.postId)
                .then(() => this.setState(this.props.post));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state.id).then(() => this.props.history.push("/"));
    }

    render() {
        if (!this.state) return null;
        return (
            <div>
                <NavBarContainer users={this.props.users} post={this.props.post} posts={this.props.posts}/>
                <div className="individual-post-show">

                    <div className="post-show-left">  
                        <div className="post-photo-container">
                            <img className="photos" src={this.state.photoUrl}></img>
                        </div> 
                    </div> 

                    <div className="post-show-right">
                        <div className="post-show-auth-container">
                            <div className="post-auth-image"></div>
                            <Link className="post-auth" to={`/users/${this.state.user_id}/posts`}>{this.state.username}</Link>
                            {/* <div className="post-auth-options"></div> */}
                        </div>

                        <div className="post-show-caption-container">
                            {/* <h4 className="post-caption-auth" >{this.state.username}</h4> */}
                            <Link className="post-caption-auth" to={`/users/${this.state.user_id}/posts`}>{this.state.username}</Link>

                            <h4 className="post-caption">{this.state.caption}</h4>
                        </div> 
                        <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes} />
                        <div className="post-show-space"></div>

                        <div className="post-show-comments">
                            <CommentIndexContainer post={this.props.post} postId={this.props.post.id} />
                        </div>
                        {/* <div className="post-edit-delete-container">
                            <button className="post-index-item-delete-button" type="button" onClick={this.handleSubmit}>Delete Post</button>
                        </div>  */}
                            {/* <Link className="post-index-item-edit" to={`/posts/${this.state.id}/edit`}>Edit Post</Link> */}
                        {/* <div className="feed-button-container">
                            <Link className="feed-button" to="/">Feed</Link>
                        </div>  */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostShow;