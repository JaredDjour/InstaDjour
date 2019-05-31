import React from 'react';
import {Link} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"))
  }

  renderErrors() {
    if (typeof this.state.errors !== "undefined"){
      return(
        <ul>
          {this.state.errors.map((error, i) => (<li key={`error-${i}`}> {error} </li> ) )}
        </ul>
      );
    }
  }

  render() {
    let conditional 
    if (this.props.formType === "Sign Up"){
      conditional = 
        (  
          <label>
          <h2 className="logo-greet">Sign up to see photos and videos from your friends. </h2>
            <input className="login-input" type="text"
              placeholder="Mobile Number or email" value={this.state.email}
              onChange={this.handleChange('email')} />
            <br/>
            <input className="login-input" type="text"
              placeholder="Full Name" value={this.state.fullName}
              onChange={this.handleChange('fullName')} />
            <br/>
            <input className="login-input" type="text"
              placeholder="Username" value={this.state.username}
              onChange={this.handleChange('username')} />
            <br/>  
            <input className="login-input" type="password" value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange('password')} />
          </label>
        )
    } else if (this.props.formType === "Log In"){
      conditional = 
      (
        <label>
        <input className="login-input" type="text"
          placeholder="Phone number, username, or email" value={this.state.username}
          onChange={this.handleChange('username')} />
        <br/>
        <input className="login-input" type="password" value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange('password')}/>
        </label>
      )
    }
        
  
    return(
      <div>
      <div className="login-form-container">
        <h1 className="logo">Instadjour</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
            <div className="login-form">
                <br/>
               {conditional}
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              <br/>
              <h2 className="terms">By signing up, you agree to our <Link className="terms-link" to="https://help.instagram.com/581066165581870">Terms</Link>, <Link className="terms-link" to="https://help.instagram.com/519522125107875">Data Policy</Link> and <Link className="terms-link" to="https://help.instagram.com/1896641480634370?ref=ig">Cookies Policy</Link>.</h2> 
            </div> 
        </form>
      </div>

      <div className="session-nav">
          <div className="session-nav-content">
          {this.props.navLink}
          </div>
      </div>
    </div>
    );
  };

};


export default SessionForm;

