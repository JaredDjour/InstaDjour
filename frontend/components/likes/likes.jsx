import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.getLikeId = this.getLikeId.bind(this);
        this.liked = this.liked.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    getLikeId(likeableId) {
        const likes = Object.values(this.props.likes);
        
        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
                return likes[i].id;
            }
        }
    }

    liked(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
               return true;
            }
        } 
        return false;
    }

    handleLike() {
        const like = {
            likeable_id: this.props.postId,
            likeable_type: "Post",
            user_id: this.props.currentUser,
        };

        if (this.liked(like.likeable_id)) {
            const likeId = this.getLikeId(like.likeable_id);
            this.props.deleteLike(likeId);
        }
        if (!this.liked(like.likeable_id)) {
            this.props.createLike(like);
        }
    }



    render() {
      
        if (this.liked(this.props.postId)) {
            return (
                <div className="post-options">
                    <div className="post-options-heart-filled" onClick={this.handleLike}></div>
                    <div className="post-options-comment"></div>
                    {/* <div className="post-options-bookmark"></div> */}
                </div>
            )
        }
        else {
            return (
                <div className="post-options">
                    <div className="post-options-heart" onClick={this.handleLike}></div>
                    <div className="post-options-comment"></div>
                    {/* <div className="post-options-bookmark"></div> */}
                </div>
            )
        }
    }
}

export default Likes; 