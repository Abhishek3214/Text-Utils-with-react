import React, {useState} from "react";
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  function upperCase() {
      setText(text.toUpperCase())
  }
  function onChangedEvent(event) {
   setText(event.target.value)
      
  }
  return (
    <div className="container">
       <h1  className=" my-3" >
          {props.heading}
        </h1>
      <div className="mb-3 ">
      
        <textarea
          className="form-control"
          id="text"
          rows="10"
          placeholder="Enter text here"
          value={text}
          onChange={onChangedEvent}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={
        upperCase
      }>Convert to Upeer case</button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  
}
TextForm.defaultProps = {
  heading: "Text For analyze"
}