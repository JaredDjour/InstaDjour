import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchAllPosts();
        this.props.fetchUserPosts(this.props.userId);
        this.props.fetchAllComments();
        this.props.fetchAllLikes();
        // this.props.fetchAllUsers();
    }


    render() {
        if (!this.props.userId) return null;
            
        const posts = this.props.posts.map(post => {
            return (
                <div key={post.id} className="individual-profile-photo-container">
                    <img className="individual-profile-photo" src={post.photoUrl}></img>
                    </div>
        )}).reverse();
 
        return (
            <div className="all-profile-photos-container">
                <ul className="all-profile-photos">{posts}</ul>
            </div>
        )
    }
}

export default Profile;