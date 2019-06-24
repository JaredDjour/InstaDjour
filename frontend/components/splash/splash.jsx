import React from 'react';
import SignupFormContainer from "../session_form/signup_form_container";
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../posts/post_index_container';
import CommentContainer from '../comments/comment_container';

    const splash = ({currentUser}) => {

        if (currentUser){
            return (
                <div>
                    <PostIndexContainer />
                    <CommentContainer />
                </div>
                ) 
        } else {
            return (
                <div>
                <SignupFormContainer />
                </div>
            )
        }
    
        
    }

export default splash;