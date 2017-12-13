import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    this.setState({
      email: "",
      password: ""
    });
    const userCredentials = this.state;
    e.preventDefault();
    this.props.userLogin(userCredentials);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="containter">
        { this.props.isConnected ? <Redirect to='/feeds' /> :
        <div className="row">
          <div className="col s12 m6 push-m3 card-panel hoverable">
            <form onSubmit={this.onSubmit.bind(this)}>
              <input type="text" id="email" name="email" onChange={this.onChange.bind(this)} value={this.state.email} required placeholder="Email"/>
              <input type="password" id="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password}required placeholder="Password"/>
              <button class="btn waves-effect waves-light" type="submit" value="Log In">Log In<i class="material-icons right">send</i></button>
            </form>
            <p>or <a href="/signup">create a new account</a></p>
          </div>
      </div>}
      </div>
    )
  }
}

export default Login;
