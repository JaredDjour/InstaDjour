import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PostIndexContainer from "../posts/post_index_container";

class NavBar extends React.Component {
    constructor(props) {
      super(props);
    }

    // componentDidMount() {
    //   if (this.props.loggedIn) {
    //     this.props.fetchAllUsers()
    //     this.props.fetchAllFollows();
    //   }
    // }
    render() {
      // if (this.props.users < 2) return null;
        // const exploreItems = this.props.users
       
      //     .filter(user => user.id !== this.props.currentUser) 
      //   .map(user => {
      //       return (
      //         <li key={user.id}>{user.username}</li>
      //       )
      //   })
    
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
                <div className="icon-explore visibile">
                  {/* <ul className="hidden explore-list">{exploreItems}</ul>  */}
                </div> 
                <div className="icon-heart visibile">
                  {/* <ul className="hidden heart-list">{heartItems}</ul> */}
                </div>
                <Link className="icon-profile" to={`/users/${this.props.id}/posts`}></Link>
                <div className="logout">
                  <button type="button" onClick={this.props.logout}>Logout</button>
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
    