import React from 'react';

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
    let loggy;
    (this.props.id) ?
      loggy = (
        <div >
          <p>Hello, {this.props.currentUser.username}!</p>
          <button onClick={this.handleSubmit}>Logout</button>
        </div>
      ) : loggy = null;

    return (
      <div className="nav-bar">
        <div className="nav-logout-display">
          {loggy}
        </div>
      </div>
    )
  }
}

export default NavBar;