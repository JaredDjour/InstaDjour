import React from 'react';
import {Link} from 'react-router-dom';

class PostShow extends React.Component {
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.postId)
    }

    render() {
        return (
            <div>
                <p className="post-show-caption">{this.props.post.caption}</p>
                <p className="post-show-auth">{this.props.post.userId}</p>
                <Link to="/">Feed</Link>
            </div>
        )
    }
}

    export default PostShow;