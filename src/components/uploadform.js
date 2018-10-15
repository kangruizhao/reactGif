import { reduxForm ,Field } from 'redux-form';
import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import formFields from './formfield';

import {handleupload} from '../actions';
import { connect } from 'react-redux';
const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);
const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  label,
  meta: { touched,omitMeta, error },
  ...props
}) => {
  return (
    <div className="form-group">
   <label>{label}</label>
    <br/>
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
    <div>
        {touched && error && <span style={{color: "red" }}>{error}</span>}
        </div>
      <br/>
    </div>
  );
};
class UpLoad extends Component{

  render(){

    const { handleSubmit,touched,error} = this.props;
    var h1style={
      textAlign: 'center'
    }
    var outerstyle={
      width:'50%',
      margin:'25px auto'
    }
  return(
    <div>
    <h1 style={h1style}>UpLoad Your Gif</h1>
    <div style={outerstyle}>
    <form onSubmit={handleSubmit(props => this.props.handleupload(props,history))}>
    <Field name="file" type="file"component={FileInput} label="UpLoad From you Computer"/>
    <Field name="source_image_url" type="text"  component={formFields} label="UpLoad From other site"/>
    <Field name="tags" type="text"  component={formFields} label="Tags"/>
    <Field name="source_post_url"   type="text" component={formFields} label="The URL source of the asset."/>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}
}
function validate(values) {
  const errors = {};

  if (!values['file']&&!values['source_image_url']) {
    errors['file']= `Please select path to upload your gif`
    errors['source_image_url']= `Please select path to upload your gif`
  }

  return errors;
}
export default reduxForm({
  validate,
  form: 'upLoadForm'
})(connect(null,{handleupload})(UpLoad));
