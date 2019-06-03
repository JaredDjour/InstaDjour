import React from 'react';
import {Link, Redirect} from 'react-router-dom';


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
    let main; 
    let left;
    let bottom;
    let sessionSubmit = (
      <input className="session-submit" type="submit" value={this.props.formType} />
    );
    if (this.props.formType === "Sign Up"){
      main = 
        (  
          <label>
            <h2 className="logo-greet">Sign up to see photos and videos from your friends. </h2>
          <div className="demo-user">
            <span className="demo-icon"></span>
            Log in as Demo User
            </div>
          <h3 className="or"> OR</h3>
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
          {sessionSubmit} 
          </label>
        )
        bottom = (
          <div className="terms-container">
          <h2 className="terms">By signing up, you agree to our <Link className="terms-link" to="https://help.instagram.com/581066165581870">Terms</Link>, <Link className="terms-link" to="https://help.instagram.com/519522125107875">Data Policy</Link> and <Link className="terms-link" to="https://help.instagram.com/1896641480634370?ref=ig">Cookies Policy</Link>.</h2>  
          </div>
        )
        left = (
          <div className="iphone-container">
            <div className="iphone">
              <div className="iphone-screen"></div>
            </div>
          </div>
        )
    } else if (this.props.formType === "Log In"){
      main = 
      (
        <label>
        <input className="login-input" type="text"
          placeholder="Phone number, username, or email" value={this.state.username}
          onChange={this.handleChange('username')} />
        <br/>
        <input className="login-input" type="password" value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange('password')}/>
          {sessionSubmit}
          <h3 className="or"> OR</h3>
          <div className="demo-user">
            <span className="demo-icon"></span>
            Log in as Demo User
            </div>
        </label> 
      )
    }
        
  
    return(
      <div className="everything">
        {left}
        <div className="main">
          <div className="login-form-container">
            <h1 className="logo">Instadjour</h1>

            <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
              {this.renderErrors()}
                <div className="login-form">
                  <br/>
                  {main}
                  <br/>
                  {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                  <br/>
                  {bottom}
                </div> 
            </form> 
          </div>
            <div className="session-switch">
              <div className="session-switch-content">
                {this.props.navLink}
              </div>
            </div>
            <div> 
            <div className="get-app-text"> Get the app.
              </div>
              <div className="app-links">
              <Link className="get-app-apple" to="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo" alt="Available on the App Store"></Link>
              <Link className="get-app-google" to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DW2TFUwAEAAGxVCg5GeSvCw1XTrHT%26utm_content%3Dlo%26utm_medium%3Dbadge" alt="Available on Google Play"></Link>
              </div> 
            </div>
      </div>
    </div>
    );
  };

};


export default SessionForm;

