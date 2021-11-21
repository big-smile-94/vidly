import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema); // abortEarly should be false in this case!

    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSelect() {
    return (
      <div className="form-group">
        <label htmlFor="genreId">Genre</label>
        <select
          name="genreId"
          id="genreId"
          onChange={this.handleChange}
          className="form-select"
        >
          {this.state.genres.map((genre, index) => (
            <option
              key={`${genre._id}-${index}`}
              value={genre._id}
              selected={genre.selected}
            >
              {genre.name}
            </option>
          ))}
        </select>
        {this.state.errors['genreId'] && (
          <div className="alert alert-danger">
            {this.state.errors['genreId']}
          </div>
        )}
      </div>
    );
  }
}

export default Form;
