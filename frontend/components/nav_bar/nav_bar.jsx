import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PostIndexContainer from "../posts/post_index_container";


const NavBar = ({currentUser, id, logout, loggedIn}) => {
  // debugger
    const exploreItems = [];
    const heartItems = [];
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
                <div className="icon-explore visibile">
                  <ul className="hidden explore-list">{exploreItems}</ul> 
                </div> 
                <div className="icon-heart visibile">
                  <ul className="hidden heart-list">{heartItems}</ul>
                </div>
                <Link className="icon-profile" to={`/users/${id}/posts`}></Link>
                <div className="logout">
                  <button type="button" onClick={logout}>Logout</button>
                </div>
              </div>
                </div>
            </div>
            <div className="index-left"></div>
      
        </div>
      ) 
      // : ha = (
      //   <div>
      //     <div className="nav-bar-bottom">
      //       <a href="https://www.instagram.com/" className="nav-bar-bottom-text">REAL INSTAGRAM</a>
      //       <a href="https://www.linkedin.com/in/jared-djourabchi-7a2932160/" className="nav-bar-bottom-text">LINKEDIN </a>
      //       <a href="https://github.com/JaredDjour" className="nav-bar-bottom-text">GITHUB</a>
      //       <a href="https://www.linkedin.com/in/jared-djourabchi-7a2932160/" className="nav-bar-bottom-text">PORTFOLIO SITE</a>
      //     </div>
      //     <h4 className="trademark">© 2019 INSTADJOUR</h4>
      //   </div>
      // );
     : null; 
      return (
        <div>
          {ha}
        </div>
      )
  }
  

export default NavBar;