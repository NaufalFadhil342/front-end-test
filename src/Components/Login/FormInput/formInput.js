import React from 'react';

const FormInput = ({ value, changeUser, type, errorMessage, label, placeholder, name }) => {
  return (
    <div className="form">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          changeUser(name, e.target.value);
        }}
        required
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
