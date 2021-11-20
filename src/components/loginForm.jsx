import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('submited');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username" // to be able to use the dynamic bracket notation to set the target property of the account object in the handle the change event
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password" // to be able to use the dynamic bracket notation to set the target property of the account object in the handle the change event
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// old way of accessing form data in vanilla javascript
// const username = document.getElementById('username').value;

// if you really have to work with the 'document'. you can use the ref
// 1. username = React.createRef(); 2.  <input ref={this.username}.../> 3. const u = this.username.current.value

// to auto focus on load
//   componentDidMount() {
//     this.username.current.focus();
//   }
