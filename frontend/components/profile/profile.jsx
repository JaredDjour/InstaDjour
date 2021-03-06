import React from 'react';
import { Link } from "react-router-dom";
import FollowsContainer from "../follows/follow_container";
import NavBarContainer from "../nav_bar/nav_bar_container";

class Profile extends React.Component {
    constructor(props) {
        super(props);        
        this.handleShow = this.handleShow.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUsers();     
        this.props.fetchUserPosts(this.props.userId);     
        // this.props.fetchAllPosts();
        this.props.fetchAllFollows();
        window.scrollTo(0, 0);
    }

    handleShow(item) {
       this.props.openModal(item); 
    }

    render() {
        let profilePic;
        if(this.props.username === "JaneDoe") {
            profilePic = <img className="profile-pic-jane" src="https://image.flaticon.com/icons/svg/219/219990.svg" /> 
        } else if (this.props.username === "JohnTho") {
            profilePic = <img className="profile-pic-john" src="https://countrybutchers.co.uk/wp-content/uploads/2016/05/Man-Placeholder-768x512.jpg" /> 
        } else if (this.props.username === "DemoUser") {
            profilePic = <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviq0vi_kFNfszVCvxMb8BKc26jnVeQtWTFoH1LxLhBO1PXP8O" />
        } else profilePic = <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviq0vi_kFNfszVCvxMb8BKc26jnVeQtWTFoH1LxLhBO1PXP8O"/>

         if (!this.props.username) return null;

        // const profilePic = <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviq0vi_kFNfszVCvxMb8BKc26jnVeQtWTFoH1LxLhBO1PXP8O" />
        
        const posts = this.props.posts.map(post => {
            return (
                // <Link key={post.id} className="individual-profile-photo-container" to={`/posts/${post.id}`}>
                //     <img className="individual-profile-photo" src={post.photoUrl}></img>
                // </Link>
                <div key={post.id} className="individual-profile-photo-container">
                    <img className="individual-profile-photo" src={post.photoUrl} onClick={ () => this.handleShow(post)}></img>
                </div>
        )}).reverse();
   

        const count = (posts.length > 0) ?
            posts.length
            :
            "0";
        const postsString = (count === 1) ?
            "post"
            :
            "posts";
        
        return (
            <div>
                <NavBarContainer posts={this.props.allPosts} users={this.props.users}/>
                <div className="space"></div>
                <div className="all-profile-info-container"> 
                <div className="all-profile-info">
                    <div className="left-profile-info">
                        <div>
                            <img className="profile-pic-container" src="https://app.instarocket.co/Content/profile/1.png"/>
                            {profilePic}
                        </div>
                    </div>
                    <div className="right-profile-info">
                        <h1 className="username">{this.props.username}
                        </h1>
                        <FollowsContainer users={this.props.users} followingId={this.props.userId} follows={this.props.follows}/>
                        <h2 className="posts-count">{posts.length}
                            <div className="posts">{postsString}</div>
                        </h2>
                        <h2 className="full-name">{this.props.fullName}</h2>
                    </div>
                </div>
                </div>

                <div className="all-profile-photos-container">
                    <ul className="all-profile-photos">{posts}</ul>
                </div>
            </div>
        )
    }
}

export default Profile;