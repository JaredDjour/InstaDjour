import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    (this.props.logout()).then(() => {
      this.props.history.push("/login");
    });
  }



  render(){
    let ha;
    (this.props.id) ?
      ha = (
        <div>
          <div className="nav-bar">
            <div className="nav-display"> 
              <div className="nav-left">
                <span className= "nav-left-icon"></span>
              <Link className="nav-left-text" to="/#/">Instadjour</Link>
              </div> 
              <div className="nav-center">
                <span className="icon-search"></span>
              <input className="search-bar" type="text" placeholder="Search" /> 
              </div>
              <div className="nav-right">
                <Link className="icon-explore"></Link>
                <Link className="icon-heart"></Link>
                <Link className="icon-profile"></Link>
                <div className="logout">
                  <button type="button" onClick={this.handleSubmit}>Logout</button>
                </div>
              </div>
                </div>
            </div>
          {/* <p className="nav-user">{this.props.currentUser.username}!</p> */}
        </div>
      ) : ha = null;

    return (
      <div>
        {ha}
        <div className="nav-bar-bottom">
          <Link className="nav-bar-bottom-text" to="https://www.linkedin.com/in/jared-djourabchi-7a2932160/">LinkedIn</Link>
          <Link className="nav-bar-bottom-text" to="https://www.instagram.com/">True Instagram</Link>
          <Link className="nav-bar-bottom-text" to="https://www.linkedin.com/in/jared-djourabchi-7a2932160/">My Website</Link>
          <Link className="nav-bar-bottom-text" to="https://github.com/JaredDjour">Github</Link>        
        </div>
        <h4 className="trademark">© 2019 INSTADJOUR</h4>
      </div>
    )
  }
}

export default NavBar;