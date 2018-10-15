import React from 'react';

export default ({ input, label,type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
     {type=="file"&&<br/>}
      <input {...input} placeholder={label} type={type}  className="form-control" />
      <div>
      {touched && error && <span style={{color: "red" }}>{error}</span>}
      </div>
      {type=="file"&&<br/>}
  </div>
);
