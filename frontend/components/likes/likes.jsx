import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.fetchLike = this.fetchLike.bind(this);
        this.liking = this.liking.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.commentForm = React.createRef();
        this.handleComment = this.handleComment.bind(this);
    }

    fetchLike(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
                return likes[i].id;
            }
        }
    }

    liking(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser && likes[i].likeable_id === likeableId);
            if (match) {
               return true;
            }
        } 
        return false;
    }

    handleClick() {
        const like = {
            user_id: this.props.currentUser,
            likeable_type: "Post",
            likeable_id: this.props.postId,
        };

        if (this.liking(like.likeable_id)) {
            const likeId = this.fetchLike(like.likeable_id);
            this.props.deleteLike(likeId);
        } else {
            this.props.createLike(like);
        }
    }

      
    handleComment() {
        console.log(this.commentForm); 
        $('.add-comment').first().focus();
     
    }

    render() {
        const likes = Object.values(this.props.likes);
        const likeCount = likes.filter(like => like.likeable_id === this.props.postId).length;

        const count = (likeCount !== 0) ?
            likeCount
            :
            null; 

        if (this.liking(this.props.postId)) {
            return (
                <div className="post-options">
                    <div className="post-options-heart-filled" onClick={this.handleClick}></div>
                    <div className="like-count">{count}</div>
                    <div className="post-options-comment" onClick={() => {this.handleComment()}}></div>
                    {/* <div className="post-options-bookmark"></div> */}
                </div>
            )
        }
        else {
            return (
                <div className="post-options">
                    <div className="post-options-heart" onClick={this.handleClick}></div>
                    <div className="like-count">{count}</div>
                    <div className="post-options-comment" onClick={() => {this.handleComment()}}></div>
                    {/* <div className="post-options-bookmark"></div> */}
                </div>
            )
        }
    }
}

export default Likes; 