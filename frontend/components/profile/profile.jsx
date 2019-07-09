import React from 'react';
import PostIndexItem from '../posts/post_index_item';
// import CreatePostFormContainer from './create_post_form_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null
        };
    }
    componentDidMount() {
        this.props.fetchUserPosts();
        // this.props.fetchAllComments();
        // this.props.fetchAllLikes();
    }


    render() {
        const posts = this.props.posts.reverse().map((post) => <PostIndexItem key={post.id} post={post} deletePost={this.props.deletePost} />);
        return (
            <div className="all">
                <ul>{posts}</ul>
            </div>
        )
    }
}

export default Profile;