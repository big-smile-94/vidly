import React from 'react';
// before = const Input = ({ name, label, value, onChange, type, error }) =>
// <input value={value} onChange={onChange} name={name} type={type} id={name} className="form-control" />

// after = const Input = ({ name, label, error, ...rest }) =>
// <input {...reset} name={name} id={name} className="form-control" />

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

// <input we use the name property because of the following
//to be able to use the dynamic bracket notation to set the target property of the account object in the handle the change event
