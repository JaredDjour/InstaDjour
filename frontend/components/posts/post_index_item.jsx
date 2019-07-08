import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
// import CreateCommentFormContainer  from '../comments/create_comment_form_container';
import CommentIndexContainer from "../comments/comment_index_container";
import LikesContainer from "../likes/likes_container";
// import {fetchAllComments} from "../../actions/comment_actions"; 
const msp = (state, ownProps) => {
    // debugger
    return {
        username: state.entities.posts[ownProps.post.id].username,
        currentUser: state.entities.users[state.session.id].username, 
        // state.entities.posts[Ow]
        likes: state.entities.likes,
        
    };
};

// const mdp = dispatch => {
//     return {
//         fetchAllComments: () => dispatch(fetchAllComments()),
//         deleteComment: id => dispatch(deleteComment(id)),

//     };
// };



class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleDelete = this.handleDelete.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchAllComments();
    // }

    // addEvent
    handleDelete(e) {

        e.preventDefault();
        this.props.deletePost(this.state.id)
        // .then(() => this.props.history.push("/"));
    }
 
 
    render(){
        // const comments = this.props.posts.comments.reverse().map((comment) => <CommentContainer key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />);
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
                {/* <div className="post-options">
                    <div className="post-options-heart"></div>
                    <div className="post-options-comment"></div>
                    <div className="post-options-share"></div>
                    <div className="post-options-bookmark"></div> 
                </div> */}

                <LikesContainer post={this.props.post} postId={this.props.post.id} likes={this.props.likes}/>

                <div className="post-caption-container">
                    <h4 className="post-caption-auth" >{this.props.username}</h4>
                    <Link className="post-caption" to={`/posts/${this.state.id}`}>{this.state.caption}</Link>
                </div>
                <div className="comment-index-container"> 
                    <CommentIndexContainer post={this.props.post} postId={this.props.post.id}/>
                </div>
                {/* <ul className="post-auth-options-list">
                    <li className="post-edit-delete-container">
                        <button className="post-index-item-delete-button" type="button" onClick={this.handleDelete}>Delete Post</button>
                    </li>
                </ul> */}
                {/* < div className = "post-edit-delete-container" >
                    <button className="post-index-item-delete-button" type="button" onClick={this.handleDelete}>Delete Post</button>
                </div> */}
                {/* <CreateCommentFormContainer postId={this.props.post.id}/> */}
    
                        {/* <Link className="post-index-item-edit" to={`/posts/${this.state.id}/edit`}>Edit Post</Link*/}
            </div>
        )
    }

};

  export default connect(msp, null)(PostIndexItem);
//   export default connect(msp, mdp)(PostIndexItem);

// export default PostIndexItem;