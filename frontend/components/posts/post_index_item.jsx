import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => (
    <div>
        <Link className="post-index-item-caption" to={`/api/posts/${props.post.id}`}>{props.post.caption}</Link>
        <Link className="post-index-item-edit" to={`/api/posts/${props.post.id}/edit`}>Edit Post</Link>
        <button className="post-index-item-delete-button" type="button" onClick={props.deletePost(props.post.id)}>Delete Post</button>
    </div>
);

export default PostIndexItem