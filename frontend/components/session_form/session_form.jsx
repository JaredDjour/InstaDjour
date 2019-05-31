import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(field){
    return e => this.setState({[field]: e.currentTarget.value})
  };

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"))
  };

  renderErrors() {
    if (typeof this.state.errors !== "undefined"){
      return(
        <ul>
          {this.state.errors.map((error, i) => (<li key={`error-${i}`}> {error} </li> ) )}
        </ul>
      );
    }
  };

  render() {
    return(
      <div className="login-form-container">
        <h1 className="logo">InstaDjour</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
            <div className="login-form">
                <br/>
                <label>
                  <input className="login-input" type="text"
                   placeholder="Phone number, username, or email" value={this.state.username}
                  onChange={this.handleChange('username')}/>
                </label>
                <br/>
                <label>
                  <input className="login-input" type="password" value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange('password')}/>
                </label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              <br/>
            {this.props.navLink}
            </div>
        </form>
      </div>
    );
  };

};


export default SessionForm;
