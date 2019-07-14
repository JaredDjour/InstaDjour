import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PostIndexContainer from "../posts/post_index_container";

class NavBar extends React.Component {
    constructor(props) {
      super(props);
    }

  // componentDidMount() {
  //   this.props.fetchAllPosts();
  //   this.props.fetchAllComments();
  //   this.props.fetchAllLikes();
  //   this.props.fetchAllUsers();
  //   this.props.fetchAllFollows();
  // }

    render() {
      
        const users = (this.props.users) ?
        this.props.users
        .filter(user => user.id !== this.props.currentUser.id)
        // .sort((a, b) => {
        //   return (
        //   parseFloat(a.username) - parseFloat(b.username))})
        .sort((a, b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)) 
        .map(user => {
          return (
            <li key={user.id} className="explore-list-item">
                <Link className="explore-list-item-link" to={`/users/${user.id}/posts`}>{user.username}</Link>
              </li>
            )
          })
          : null;
          
        const posts = (this.props.posts) ? 
        this.props.posts
        .filter(post => post.username !== this.props.currentUser.username)
        .sort((a, b) => (a.caption > b.caption) ? 1 : ((b.caption > a.caption) ? -1 : 0)) 
        // .sort((a, b) => parseFloat(a.caption) - parseFloat(b.caption))
        .map(post => {
          return (
            <li key={post.id} className="heart-list-item">
              <Link className="heart-list-item-link" to={`/posts/${post.id}`}>{post.caption}</Link>
            </li>
          )
        })
        : null;
       
        
        const exploreIcon = {users} ?
            (
            <div className="icon-explore visible">
              <ul className="hidden explore-list">
                <li className="discover-people">Discover People</li>
                {users}
              </ul>
            </div> 
            ) : null;

        const heartIcon = {posts} ?
          (
          <div className="icon-heart visible">
            <ul className="hidden heart-list">
              <li className="recent-likes">Find a Post</li>
              {posts}
            </ul>
          </div>
        ) : null;

        let nav;
        (this.props.loggedIn) ?

        nav = (
          <div>
          <div className="nav-bar">
            <div className="nav-display"> 
              <div className="nav-left">
                <Link className="nav-left-icon" to="/"></Link>
                <Link className="nav-left-text" to="/">Instadjour</Link>
               </div> 
              <div className="nav-center">
                <span className="icon-search"></span>
              <input className="search-bar" type="text" placeholder="Search" /> 
              </div>
              <div className="nav-right">

             {exploreIcon}
             {heartIcon} 
                <Link className="icon-profile" to={`/users/${this.props.id}/posts`}></Link>
                <Link className="icon-home" to="/"></Link>
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
    