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
            <div className="post-show-container">
                <div className="post-auth-container"> 
                    <p className="post-auth">{this.props.post.user_id}</p>
                </div>
                <div className="post-caption-container">
                    <p className="post-caption">{this.props.post.caption}</p>
                </div>
         
                <img className="photos" src={this.props.post.photoUrl}></img>
                <Link className="feed=button" to="/">Feed</Link>
            </div>
        )
    }
}

    export default PostShow;