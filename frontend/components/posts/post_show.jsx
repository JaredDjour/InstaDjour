import React from 'react';
import {Link} from 'react-router-dom';

class PostShow extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = this.props.post;
    // }
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.postId);
    }
    // didUpdate

    render() {
        return (
            <div className="individual-post">
                <div className="post-auth-container"> 
                    <div className="post-auth-image"></div>
                    <p className="post-auth">{this.props.post.user_id}</p>
                    <div className="post-auth-options"></div>
                </div>
                <img className="photos" src={this.props.post.photoUrl}></img>
                <div className="post-options">
                    <div className="post-options-heart"></div>
                    <div className="post-options-comment"></div>
                    <div className="post-options-share"></div>
                    <div className="post-options-bookmark"></div> 
                </div>
                <div className="post-caption-container">
                    <h4 className="post-caption-auth" >{this.props.username}</h4>
                    <p className="post-caption">{this.props.post.caption}</p>
                </div>
         
              
                <Link className="feed=button" to="/">Feed</Link>
            </div>
        )
    }
}

    export default PostShow;