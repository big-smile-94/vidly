import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  validateProperty = (input) => {
    const { name, value } = input;
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required.';
      // ...more
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required.';
      // ...more
    }
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === '')
      errors.username = 'Username is required.';
    if (account.password.trim() === '')
      errors.password = 'Password is required.';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    console.log('submited');
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            type="text"
            onChange={this.handleChange}
            error={errors.username}
          />
          <div className="form-group">
            <Input
              name="password"
              value={account.password}
              label="Password"
              type="password"
              onChange={this.handleChange}
              error={errors.password}
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
