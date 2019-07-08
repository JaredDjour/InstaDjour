import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.liked = this.liked.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.getLike = this.getLike.bind(this);
    }

    liked(likeableId, userId) {

        const likes = this.props.likes;
        const likeableArr = [];
        const userArr = [];

        if (Object.keys(likes).length !== 0 && likes.constructor === Object) {
           for (let i = 0; i < Object.values(likes).length; i++) {
            //    if (likes[i].user_id === this.props.currentUser) {
               if (Object.values(likes)[i].user_id === userId) {
                   likeableArr.push(Object.values(likes)[i].likeable_id);
                   userArr.push(Object.values(likes)[i].user_id);
               }
           } 
        }

        if (likeableArr.includes(likeableId)) {
            return true;
        } else return false;

    }

    handleLike() {
        const like = {
            likeable_id: this.props.postId,
            likeable_type: "Post",
            user_id: this.props.currentUser,
        };

        // if (!this.liked(like.likeableId, like.user_id)) {
        //     debugger
        //     this.props.createLike(like);
        // } else {
        //     const likeId = this.getLike(like.likeable_id, like.user_id);
        //     this.props.deleteLike(likeId);
        // }
        if (this.liked(like.likeable_id, like.user_id)) {
            const likeId = this.getLike(like.likeable_id, like.user_id);
            this.props.deleteLike(likeId);
        } 
        if (!this.liked(like.likeable_id, like.user_id)) {
            this.props.createLike(like);
        }
    }
    

    getLike(likeableId, userId) {
        const likes = this.props.likes;
     
        if (Object.keys(likes).length !== 0 && likes.constructor === Object) {
            for (let i = 0; i < Object.values(likes).length; i++) {
                const userMatch = (Object.values(likes)[i].user_id === userId);
                const likeMatch = (Object.values(likes)[i].likeable_id === likeableId); 
                if (userMatch && likeMatch) {
                    return Object.values(likes)[i].id;
                }
            }
        }
    }

    render() {
        // debugger
        if (this.liked(this.props.postId, this.props.currentUser)) {
            // debugger
            return (
                <div className="post-options">
                    <div className="post-options-heart-filled" onClick={this.handleLike}></div>
                    <div className="post-options-comment"></div>
                    <div className="post-options-bookmark"></div>
                </div>
            )} 
        else {
            // debugger
            return (
                <div className="post-options">
                    <div className="post-options-heart" onClick={this.handleLike}></div>
                    <div className="post-options-comment"></div>
                    <div className="post-options-bookmark"></div>
                </div>
            )}
    }
}

export default Likes; 