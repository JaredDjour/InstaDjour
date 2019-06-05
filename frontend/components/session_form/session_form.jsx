import React from 'react';
import {Link, Redirect} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    // this.changeBg = this.changeBg.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors;

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
    // if (this.props.formType === "Sign up"){

    // }else if (this.props.formType === "Log in"){

    // }

    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = Object.assign({}, {username: "DemoUser", password: "DemoUser"});
    this.props.processDemo(demoUser)
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
        let main; 
        let left;
        let bottom;
        let demo = (
      <div>
        <button type="button" onClick={this.handleDemo} className="demo-button">Log in as Demo User</button>
        <div className="demo-icon"></div>
      </div>
    )
    let sessionSubmit = (
      <input className="session-submit" type="submit" value={this.props.formType} />
    );
    if (this.props.formType === "Sign Up"){
      main = 
        (  
          <label>
            <h2 className="logo-greet">Sign up to see photos and videos from your friends. </h2>
            {demo}
          <h3 className="or"> OR</h3>
            <input className="login-input" type="text"
              placeholder="Mobile Number or email" value={this.state.email}
              onChange={this.handleChange('email')} />
            
            <input className="login-input" type="text"
              placeholder="Full Name" value={this.state.fullName}
              onChange={this.handleChange('fullName')} />
            
            <input className="login-input" type="text"
              placeholder="Username" value={this.state.username}
              onChange={this.handleChange('username')} />
            {/* <br/>   */}
            <input className="login-input" type="password" value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange('password')} />
          {sessionSubmit} 
          </label>
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
        <label>
        <input className="login-input" type="text"
          placeholder="Phone number, username, or email" value={this.state.username}
          onChange={this.handleChange('username')} />
        
        <input className="login-input" type="password" value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange('password')}/>
          {sessionSubmit}
          <h3 className="or"> OR</h3>
          {demo}
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
            <div className="get-app-text"> Get the app.
              </div>
              <div className="app-links">
              <a href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo" alt="Available on the App Store" className="get-app-apple"></a>
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DW2TFUwAEAAGxVCg5GeSvCw1XTrHT%26utm_content%3Dlo%26utm_medium%3Dbadge" className="get-app-google" alt="Available on Google Play"></a>
              </div> 
            </div>
      </div>
      <div className="nav-bar-bottom">
        <a href="https://www.linkedin.com/in/jared-djourabchi-7a2932160/" className="nav-bar-bottom-text">LinkedIn </a>
        <a href="https://www.instagram.com/" className="nav-bar-bottom-text">Instagram</a>
        <a href="https://www.linkedin.com/in/jared-djourabchi-7a2932160/" className="nav-bar-bottom-text">My Website</a>
        <a href="https://github.com/JaredDjour" className="nav-bar-bottom-text">Github</a>
      </div>
      <h4 className="trademark">© 2019 INSTADJOUR</h4>
    </div>
    );
  };

};


export default SessionForm;

