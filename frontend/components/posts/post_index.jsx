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
        this.props.fetchAllLikes();
        this.props.fetchAllUsers();
        this.props.fetchAllFollows();
    }

 
    render(){
        const follows = Object.values(this.props.follows); 
        const followed = follows.filter(follow => follow.follower_id === this.props.currentUser);
        const following = [];
        followed.forEach((follow) => {
            following.push(follow.following_id);
        });

        const posts = this.props.posts.filter(post => following.includes(post.user_id))
        .reverse().map((post) => <PostIndexItem key={post.id} post={post} deletePost={this.props.deletePost}/>);
        
        return (
        <div className="all">
            <ul>{posts}</ul>
            <CreatePostFormContainer />
        </div>
        )
    }
}

export default PostIndex;