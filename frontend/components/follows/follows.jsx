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
        const followCount = follows.filter(follow => follow.following_id === this.props.followingId).length;

        const count = (followCount) ?
            followCount
            :
            "0";
        const followers = (count === 1) ?
            "follower"
            :
            "followers";

        return (
            <div>
                <button className="follow-button" onClick={this.handleClick}>Follow</button>
                <h2 className="followers-count">{count}
                    <div className="followers">{followers}</div>
                </h2>
            </div>
        )
    }
}

export default Follows; 