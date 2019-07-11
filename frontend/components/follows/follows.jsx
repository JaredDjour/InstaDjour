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
        // .map(follower => {
            
        //     return (
        //     <li key={follower.id}>{follower.follower_id}</li>
        //     )});

        const following = follows.filter(follow => follow.follower_id === this.props.followingId)
        // .map(followed => {
        //     return (
        //         <li key={followed.id}>{followed.username}</li>
        //     )});

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
            "Following"
            :
            "Follow";
        return (
            <div>
                <button className="follow-button" onClick={this.handleClick}>{follow}</button>
                <div className="followers-and-following-container">
                    <h2 className="followers-count">{count}
                        <div className="followers">{followerS}</div>
                        {/* <ul>{followers}</ul>  */}
                    </h2>
                    <h2 className="following-count">{count2}
                        <div className="following">following</div>
                        {/* <ul>{following}</ul> */}
                    </h2>
                </div>
            </div>
        )
    }
}

export default Follows; 