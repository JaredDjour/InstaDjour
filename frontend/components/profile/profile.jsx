import React from 'react';
import {Link} from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchAllPosts();
        this.props.fetchUserPosts(this.props.userId);
        this.props.fetchAllComments();
        this.props.fetchAllLikes();
        this.props.fetchAllUsers()
        // .then(() => this.setState(this.props.username));
    }


    render() {
        if (!this.props.userId) return null;
            
        const posts = this.props.posts.map(post => {
            return (
                <Link key={post.id} className="individual-profile-photo-container" to={`/posts/${post.id}`}>
                    <img className="individual-profile-photo" src={post.photoUrl}></img>
                </Link>
        )}).reverse();
                // debugger
        return (
            <div>
                <h2>{this.props.username}</h2>
            <div className="all-profile-photos-container">
                <ul className="all-profile-photos">{posts}</ul>
            </div>
            </div>
        )
    }
}

export default Profile;