import React, { Component } from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      postcode: "",
      username: "",
      email: "",
      password: ""
    };
  }
  onSubmit(e){
    this.setState({
      postcode: "",
      username: "",
      email: "",
      password: ""
    });
    const user = this.state;
    e.preventDefault();
    this.props.userSignUp(user);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        Please enter your address:
        <input type="text" name="postcode" onChange={this.onChange.bind(this)} value={this.state.postcode} required placeholder="Post Code"/>
        <input type="text" name="username" onChange={this.onChange.bind(this)} value={this.state.username}required placeholder="Username"/>
        <input type="text" name="email" onChange={this.onChange.bind(this)} value={this.state.email} required placeholder="Email"/>
        <input type="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password}required placeholder="Password"/>
        <input type="submit" value="Submit">
        </input>
      </form>
      </div>
    );
  }
};

export default Signup;
