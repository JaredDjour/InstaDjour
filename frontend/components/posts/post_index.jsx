import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null
        };
    }
    componentDidMount(){
        this.props.fetchAllPosts();
        this.props.fetchAllComments();
    }

 
    render(){
        const posts = this.props.posts.reverse().map((post) => <PostIndexItem key={post.id} post={post} deletePost={this.props.deletePost}/>);
        return (
        <div className="all">
            <ul>{posts}</ul>
            <CreatePostFormContainer />
        </div>
        )
    }
}

export default PostIndex;