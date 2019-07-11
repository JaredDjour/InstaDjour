import React from 'react';

class Follows extends React.Component {
    constructor(props) {
        super(props);
        this.fetchFollow = this.fetchFollow.bind(this);
        this.following = this.following.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    fetchFollow(followingId) {
        const follows = Object.values(this.props.follows);

        for (let i = 0; i < follows.length; i++) {
            const match = (follows[i].follower_id === this.props.currentUser && follows[i].following_id === followingId);
            if (match) {
                return follows[i].id;
            }
        }
    }

    following(followingId) {
        const follows = Object.values(this.props.follows);

        for (let i = 0; i < follows.length; i++) {
            const match = (follows[i].follower_id === this.props.currentUser && follows[i].following_id === followingId);
            if (match) {
                return true;
            }
        }
        return false;
    }

    handleClick() {
        const follow = {
            follower_id: this.props.currentUser,
            following_id: this.props.followingId,
        };

        if (this.following(follow.following_id)) {
            const followId = this.fetchFollow(follow.following_id);
            this.props.deleteFollow(followId);
        } else {
            this.props.createFollow(follow);
        }
    }


    render() {
        const follows = Object.values(this.props.follows);
        const followers = follows.filter(follow => follow.following_id === this.props.followingId)
        .map(follower => {
            
            return (
                <li key={follower.id} className="follower-and-following-list-item">{follower.follower_id}</li>
            )});

        const following = follows.filter(follow => follow.follower_id === this.props.followingId)
        .map(followed => {
            return (
                <li key={followed.id} className="follower-and-following-list-item">{followed.username}</li>
            )});

        const count = (followers.length) ?
            followers.length
            :
            "0";
        const followerS = (count === 1) ?
            "follower"
            :
            "followers";
        const count2 = (following.length) ?
            following.length
            :
            "0";
        // const following = (count === 1) ?
        //     "follower"
        //     :
        //     "followers";

        const follow = (this.following(this.props.followingId)) ?
            <button className="following-button" onClick={this.handleClick}>Following</button>
            :
            <button className="follow-button" onClick={this.handleClick}>Follow</button>;
        
        return (
            <div>
                {follow}
                <div className="followers-and-following-container">
                    <h2 className="followers-count">{count}
                        <div className="followers visible">{followerS}
                            <ul className="hidden follower-and-following-list">{followers}</ul> 
                        </div>
                    </h2>
                    <h2 className="following-count">{count2}
                        <div className="following visible">following
                        <ul className="hidden follower-and-following-list">{following}</ul>
                        </div>
                    </h2>
                </div>
            </div>
        )
    }
}

export default Follows; 