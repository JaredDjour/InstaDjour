import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';
import NavBarContainer from "../nav_bar/nav_bar_container";

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
        const follows = this.props.follows; 
        const followed = follows.filter(follow => follow.follower_id === this.props.currentUser);
        const following = [];
        followed.forEach((follow) => {
            following.push(follow.following_id);
        });

        const posts = this.props.posts
        .filter(post => following.includes(post.user_id) || post.user_id === this.props.currentUser)
        .reverse().map((post) => <PostIndexItem key={post.id} post={post} deletePost={this.props.deletePost}/>);
        
        const greeting = (!posts.length) ?
            <h1 className="initial-greeting">Hey {this.props.fullName.split(" ")[0] || this.props.username},
                <br/>
                click on the Compass in the Nav Bar above to start following other users!</h1>
            : null;
        
        return (
            <div>
                <div className="nav-bar-container">     
                    <NavBarContainer 
                        users={this.props.users} 
                        follows={this.props.follows} 
                        posts={this.props.posts} 
                        likes={this.props.likes} 
                        comments={this.props.comments}/>   
                </div>
                <div className="all">
                    {greeting}
                    <ul>{posts}</ul>
                    <CreatePostFormContainer />
                </div>
            </div>
        )
    }
}

export default PostIndex;