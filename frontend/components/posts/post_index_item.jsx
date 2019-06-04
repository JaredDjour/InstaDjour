import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => (
    <div>
        <Link to={`/api/posts/${props.post.id}`}></Link>
    </div>
)