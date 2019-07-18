import React from 'react';
import {Link, Redirect} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", full_name: "", username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    // this.changeBg = this.changeBg.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors;
    window.scrollTo(0, 0);
    // window.setInterval(() => this.changeBg());
  }

  // changeBg(){
  //   $('bg1').fadeToggle("slow","swing", "bg2");
  //   // $('.iphone-screen').fadeIn("slow", "swing", 'bg2');
  //   // $('.iphone-screen').fadeToggle("slow", "swing", 'bg3');
  //   // $('.iphone-screen').fadeToggle("slow", "swing", 'bg4');
  //   // $('.iphone-screen').fadeToggle("slow", "swing", 'bg5');
  // }

  handleChange(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    // .then(() => this.props.history.push("/"));
  }

  handleEnter(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      if (user.username && user.password) {
        this.props.processForm(user);
      }
    }
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = Object.assign({}, {username: "DemoUser", password: "DemoUser"});
    this.props.processDemo(demoUser);
    // .then(() => this.props.history.push("/"));
  }

  renderErrors() {
    let errors = Object.values(this.props.errors)
      
    if ( errors.length > 0){
      return(
        <ul>
          {errors.map((error, i) => (<li key={`error-${i}`}> {error} </li> ) )}
        </ul>
      );
    }
  }

  render() {
    const pics = ( 
    <div className="iphone-screen">
      <img className="bg1" src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
      <img className="bg2" src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" />
      <img className="bg3" src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" />
      <img className="bg4" src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" />
      <img className="bg5" src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" />
    </div>
    ) 
    const emailErrors = ((this.state.username && !this.state.email) || 
      (this.state.email && (!this.state.email.includes(".com") || 
      !this.state.email.includes("@") || this.state.email.slice(-4) !== ".com"))) ?
      <div className="session-errors">Please enter a valid Email.</div>
      :null;
        
    const fullNameErrors = ((this.state.username && !this.state.full_name) || 
    (this.state.full_name && !this.state.full_name.includes(" "))) ?
      <div className="session-errors">Please enter your Full Name.</div>
      :null;
      
      const signUpSubmit = (
          <button className="session-submit" disabled={!this.state.email || !this.state.full_name 
            || !this.state.username || !this.state.password} 
          type="submit" onClick={this.handleSubmit}>{this.props.formType}</button>
      );
      const signInSubmit = (
          <button className="session-submit" disabled={!this.state.username || !this.state.password} 
          type="submit" onClick={this.handleSubmit}>{this.props.formType}</button>
      );
      let demo = (
          <label className="demo-button-container">
            <button type="button" onClick={this.handleDemo} className="demo-button">Log in as a Demo User</button>
            <div className="demo-icon"></div>
          </label>
      );
        let main; 
        let left;
        let bottom;
    if (this.props.formType === "Sign Up"){
      main = 
        ( 
          <div> 
          <h2 className="logo-greet">Sign up to see photos and videos from your friends. </h2>
            {demo}
          <h3 className="or"> OR</h3>
          <label>
            <input className="login-input" type="text"
              placeholder="Mobile Number or email" value={this.state.email}
              onChange={this.handleChange('email')} onKeyUp={this.handleEnter} />
          </label>
          {emailErrors}
          <label>
            <input className="login-input" type="text"
              placeholder="Full Name" value={this.state.full_name}
              onChange={this.handleChange('full_name')} onKeyUp={this.handleEnter}/>
          </label>
          {fullNameErrors}
          <label>
            <input className="login-input" type="text"
              placeholder="Username" value={this.state.username}
              onChange={this.handleChange('username')} onKeyUp={this.handleEnter}/>
          </label> 
          <label>
            <input className="login-input" type="password" value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange('password')} onKeyUp={this.handleEnter}/>
          </label>
          {signUpSubmit} 
        </div> 
        )
        bottom = (
          <div className="terms-container">
          <h2 className="terms">By signing up, you agree to our <a className="terms-link" href="https://help.instagram.com/581066165581870">Terms</a>, <a className="terms-link" href="https://help.instagram.com/519522125107875">Data Policy</a> and <a className="terms-link" href="https://help.instagram.com/1896641480634370?ref=ig">Cookies Policy</a>.</h2>  
          </div>
        )
        left = (
          <div className="iphone-container">
            <div className="iphone">
              {pics}
            </div>
          </div>
        )
    } else if (this.props.formType === "Log In"){
      main = 
      (
        <div>
          <label>
            <input className="login-input" type="text"
            placeholder="Username" value={this.state.username}
            onChange={this.handleChange('username')} onKeyUp={this.handleEnter}/>
          </label> 
          <label>
            <input className="login-input" type="password" value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange('password')} onKeyUp={this.handleEnter}/>
          </label> 
          {signInSubmit}
          <h3 className="or"> OR</h3>
          {demo}
        </div>
      )
    }
        
  
    return(
      <div>
      <div className="everything">
        {left}
        <div className="main">
          <div className="login-form-container">
            <h1 className="logo">Instadjour</h1>

            <form className="login-form-box">
            
             
                <div className="login-form">
                  
                  {main}
                  <div className="session-errors">
                    {this.renderErrors()}
                  </div>
                  
                  {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                  
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
              <div className="get-app-text"> Get the app.</div>
              <div className="app-links">
                <a href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo" alt="Available on the App Store" target="_blank" className="get-app-apple"></a>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DW2TFUwAEAAGxVCg5GeSvCw1XTrHT%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank" className="get-app-google" alt="Available on Google Play"></a>
              </div> 
            </div>
        </div>
          <div>
    </div>
            <div className="session-form-footer">
              <a href="https://www.instagram.com/" target="_blank" className="session-form-footer-text">REAL INSTAGRAM</a>
              <a href="https://www.linkedin.com/in/jared-djourabchi-7a2932160/" target="_blank" className="session-form-footer-text">LINKEDIN </a>
              <a href="https://github.com/JaredDjour" target="_blank" className="session-form-footer-text">GITHUB</a>
              <a href="https://jareddjour.github.io/" target="_blank" className="session-form-footer-text">PORTFOLIO SITE</a>
              <a href="https://angel.co/jared-djourabchi" target="_blank" className="session-form-footer-text">ANGELLIST</a>
            </div>
            <h4 className="trademark">© 2019 INSTADJOUR</h4>
          </div>
        </div>
    );
  };

};


export default SessionForm;

