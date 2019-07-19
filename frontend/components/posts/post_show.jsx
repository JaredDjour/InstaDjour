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
        // this.props.fetchPost(this.props.post.id)
        //     .then(() => this.setState(this.props.post)); 
        this.props.fetchPost(this.props.match.params.postId)
        .then(() => this.setState(this.props.post));
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
        // if (!this.props.post) return null;
        if (!this.state) return null;

        //prevents nav bar from showing in ModalShowPost:
        const nav = (this.state.id === parseInt(this.props.match.params.postId)) ? 
            <NavBarContainer users={this.props.users} post={this.props.post} posts={this.props.posts} />
            : null;


        const postShowRight = (this.state.id === parseInt(this.props.match.params.postId)) ?
            (<div className="post-show-right">
                <div className="post-show-auth-container">
                    <div className="post-auth-image"></div>
                    <Link className="post-auth" to={`/users/${this.state.user_id}`}>{this.state.username}</Link>
                </div>

                <div className="post-show-caption-container">
                    <Link className="post-caption-auth" to={`/users/${this.state.user_id}`}>{this.state.username}</Link>

                    <h4 className="post-caption">{this.state.caption}</h4>
                </div>
                <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes} />
                <div className="post-show-space"></div>

                <div className="post-show-comments">
                    <CommentIndexContainer post={this.props.post} postId={this.props.post.id} />
                </div>
            </div>
                )  
                
                :
            // (<div className="modal-post-show-right">
            //     <div className="modal-post-show-auth-container">
            //         <div className="post-auth-image"></div>
            //         <Link className="post-auth" to={`/users/${this.state.user_id}`}>{this.state.username}</Link>
            //     </div>

            //     <div className="modal-post-show-caption-container">
            //         <Link className="post-caption-auth" to={`/users/${this.state.user_id}`}>{this.state.username}</Link>

            //         <h4 className="post-caption">{this.state.caption}</h4>
            //     </div>
            //     <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes} />
            //     <div className="post-show-space"></div>

            //     <div className="modal-post-show-comments">
            //         <CommentIndexContainer post={this.props.post} postId={this.props.post.id} />
            //     </div>
            // </div>
            // )
            
            // (<div>
            //     <h4 className="post-caption">{this.state.caption}</h4>
            //    <Link className="post-auth-options-list-item-show" to={`/posts/${this.state.id}`}>Go to Post</Link>
            // </div>)
            null; 

        return (
            <div>
                {nav}
                <div className="individual-post-show">

                    <div className="post-show-left">  
                        <div className="post-photo-container">
                            <img className="photos" src={this.state.photoUrl}></img>
                        </div> 
                    </div> 
{/* 
                    <div className="post-show-right">
                        <div className="post-show-auth-container">
                            <div className="post-auth-image"></div>
                            <Link className="post-auth" to={`/users/${this.state.user_id}`}>{this.state.username}</Link>
                        </div>

                        <div className="post-show-caption-container">
                            <Link className="post-caption-auth" to={`/users/${this.state.user_id}`}>{this.state.username}</Link>

                            <h4 className="post-caption">{this.state.caption}</h4>
                        </div> 
                        <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes} />
                        <div className="post-show-space"></div>

                        <div className="post-show-comments">
                            <CommentIndexContainer post={this.props.post} postId={this.props.post.id} />
                        </div> 
                    </div>  */}
                    {postShowRight}

                </div>
            </div>
        )
    }
}

export default PostShow;