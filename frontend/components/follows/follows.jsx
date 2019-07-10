import React from 'react';

class Follows extends React.Component {
    constructor(props) {
        super(props);
        this.getFollow = this.getFollow.bind(this);
        this.followed = this.followed.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }

    getFollow(followingId) {
        const follows = Object.values(this.props.follows);

        for (let i = 0; i < follows.length; i++) {
            const match = (follows[i].follower_id === this.props.currentUser && follows[i].following_id === followingId);
            if (match) {
                return follows[i].id;
            }
        }
    }

    followed(followingId) {
        const follows = Object.values(this.props.follows);

        for (let i = 0; i < follows.length; i++) {
            const match = (follows[i].follower_id === this.props.currentUser && follows[i].following_id === followingId);
            if (match) {
                return true;
            }
        }
        return false;
    }

    handleFollow() {
        const follow = {
            follower_id: this.props.currentUser,
            following_id: this.props.followingId,
        };

        if (this.followed(follow.following_id)) {
            const followId = this.getFollow(follow.following_id);
            this.props.deleteFollow(followId);
        } else {
            this.props.createFollow(follow);
        }
    }


    render() {
        // const follows = Object.values(this.props.follows);
        // // const followCount = follows.filter(follow => follow.following_id === this.props.postId).length;

        // const count = (followCount !== 0) ?
        //     followCount
        //     :
        //     null;


        return (
            <div>
                <button className="follow-button" onClick={this.handleLike}>Follow</button>
            </div>
        )
    }
}

export default Follows; 