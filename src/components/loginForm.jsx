import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Input from './common/input';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    // call the server
    console.log('submited');
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            type="text"
            onChange={this.handleChange}
            error={errors.username}
          />
          <div className="form-group">
            <Input
              name="password"
              value={data.password}
              label="Password"
              type="password"
              onChange={this.handleChange}
              error={errors.password}
            />
          </div>
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
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
