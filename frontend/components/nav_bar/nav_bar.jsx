import React from 'react';
import {Link} from 'react-router-dom';
import PostIndexContainer from "../posts/post_index_container";
const NavBar = ({currentUser, logout, loggedIn}) => {

    let ha;
    (loggedIn) ?
      ha = (
        <div>
          <div className="nav-bar">
            <div className="nav-display"> 
              <div className="nav-left">
                <span className= "nav-left-icon"></span>
              <Link className="nav-left-text" to="/">Instadjour</Link>
              </div> 
              <div className="nav-center">
                <span className="icon-search"></span>
              <input className="search-bar" type="text" placeholder="Search" /> 
              </div>
              <div className="nav-right">
                <Link className="icon-explore" to="/"></Link>
                <Link className="icon-heart" to="/"></Link>
                <Link className="icon-profile" to="/"></Link>
                <div className="logout">
                  <button type="button" onClick={logout}>Logout</button>
                </div>
              </div>
                </div>
            </div>
            <PostIndexContainer />
        </div>
      ) : ha = null;

      return (
        <div>
          {ha}
          <div className="nav-bar-bottom">
            <a href="https://www.linkedin.com/in/jared-djourabchi-7a2932160/" className="nav-bar-bottom-text">LinkedIn </a>
            <a href="https://www.instagram.com/" className="nav-bar-bottom-text">Instagram</a>
            <a href="https://www.linkedin.com/in/jared-djourabchi-7a2932160/" className="nav-bar-bottom-text">My Website</a>
            <a href="https://github.com/JaredDjour" className="nav-bar-bottom-text">Github</a>        
          </div>
          <h4 className="trademark">© 2019 INSTADJOUR</h4>
        </div>
      )
  }
  

export default NavBar;