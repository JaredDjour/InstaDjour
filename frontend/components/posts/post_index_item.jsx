import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const msp = (state, ownProps) => {
    return {
        username: state.entities.posts[ownProps.post.id].username
    };
};

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

 
    render(){

        return (
            <div className="individual-post">
                <div className="post-auth-container">
                    <div className="post-auth-image"></div>
                    {/* <Link className="post-auth" to={`/posts/${this.state.id}`}>{this.props.username}</Link> */}
                    <h2 className="post-auth" >{this.props.username}</h2>
                    {/* <h2 className="post-auth" >{this.props.user_id}</h2> */}
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
                    <h4 className="post-caption-auth" >{this.props.username}</h4>
                    <Link className="post-caption" to={`/posts/${this.state.id}`}>{this.state.caption}</Link>
                </div>
                 <div className="post-edit-delete">
                    <Link className="post-index-item-edit" to={`/posts/${this.state.id}/edit`}>Edit Post</Link>
                    <button className="post-index-item-delete-button" type="button" onClick={this.handleSubmit}>Delete Post</button>
                </div>
            </div>
        )
    }

};

  export default connect(msp, null)(PostIndexItem);

// export default PostIndexItem;