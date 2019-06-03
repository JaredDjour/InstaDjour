import React from 'react';
import SignupFormContainer from "../session_form/signup_form_container";
import NavBarContainer from '../nav_bar/nav_bar_container';

    const splash = ({currentUser}) => {

        if (currentUser){
            return (
                <div>
                <NavBarContainer />
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