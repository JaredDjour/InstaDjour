import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PostIndexContainer from "../posts/post_index_container";

class NavBar extends React.Component {
    constructor(props) {
      super(props);
    }


    render() {
        const users = this.props.users
        .filter(user => user.id !== this.props.currentUser.id) 
        .map(user => {
          return (
            <li key={user.id} className="explore-list-item">
                <Link className="explore-list-item-link" to={`/users/${user.id}/posts`}>{user.username}</Link>
              </li>
            )
          })
          
        const posts = this.props.posts
        .filter(post => post.username !== this.props.currentUser.username)
        .map(post => {
          return (
            <li key={post.id} className="heart-list-item">
              <Link className="heart-list-item-link" to={`/posts/${post.id}`}>{post.caption}</Link>
            </li>
          )
        });
        

        let nav;
        (this.props.loggedIn) ?
        nav = (
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

                <div className="icon-explore visible">
                  <ul className="hidden explore-list">
                      <li className="discover-people">Discover People</li>
                      {users}
                  </ul> 
                </div> 
                <div className="icon-heart visible">
                  <ul className="hidden heart-list">
                      <li className="recent-likes">Discover Posts</li>
                      {posts}
                  </ul> 
                </div> 
                <Link className="icon-profile" to={`/users/${this.props.id}/posts`}></Link>
                <div className="logout">
                  <button type="button" className="logout-button" onClick={this.props.logout}>Logout</button>
                </div>
              </div>
                </div>
            </div>
            <div className="index-left"></div>
      
        </div>
      ) 
      : null; 
      
      return (
        <div>
          {nav}
        </div>
      )
    }
  }
    
    
    export default NavBar;
    