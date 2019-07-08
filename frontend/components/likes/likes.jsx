import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.liked = this.liked.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.getLike = this.getLike.bind(this);
    }

    liked(likeable) {

        const postLikes = this.props.postLikes;
        // const commentLikes = this.props.commentLikes;
        const likeableArr = [];
        const userArr = [];

        if (postLikes.length !== 0 && postLikes.constructor === Object) {
           for (let i = 0; i < postLikes.length; i++) {
               if (postLikes[i].user_id === this.props.currentUser) {
                   likeableArr.push(postLikes[i].likeable_id);
                   userArr.push(postLikes[i].user_id);

               }
           } 
        }

        if (likeableArr.includes(likeable)) {
            return true;
        } else return false;

    }

    handleLike() {
        const like = {
            likeableId: this.props.postId,
            likeableType: "Post",
        };

        if (!this.liked(like.likeableId)) {
            this.props.createLike(like);
        } else {
            const likeId = this.getLike(like.likeableId);
            this.props.deleteLike(likeId);
        }
    }
    

    getLike(likeableId) {
        const postLikes = this.props.postLikes;

        if (postLikes.length !== 0 && postLikes.constructor === Object) {
            for (let i = 0; i < postLikes.length; i++) {
                const userMatch = (postLikes[i].user_id === this.props.currentUser);
                const likeMatch = (postLikes[i].likeableId === likeableId); 
                if (userMatch && likeMatch) {
                    return postLikes[i].id;
                }
            }
        }
    }

    render() {
        if (this.liked(this.props.postId)) {
            return (
                <div className="post-options">
                    <div className="post-options-heart-filled" onClick={this.handleLike}></div>
                    <div className="post-options-comment"></div>
                    <div className="post-options-share"></div>
                    <div className="post-options-bookmark"></div>
                </div>
            )} 
        else {
            return (
                <div className="post-options">
                    <div className="post-options-heart" onClick={this.handleLike}></div>
                    <div className="post-options-comment"></div>
                    <div className="post-options-share"></div>
                    <div className="post-options-bookmark"></div>
                </div>
            )}
    }
}

export default Likes; 