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
                <p className="post-show-caption">{this.props.post.caption}</p>
                <p className="post-show-auth">{this.props.post.user_id}</p>
                <Link className="feed=button" to="/">Feed</Link>
            </div>
        )
    }
}

    export default PostShow;