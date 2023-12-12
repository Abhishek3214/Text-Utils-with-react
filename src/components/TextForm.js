import React, {useState} from "react";
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text, setText] = useState('');

  function handleUpperCase() {
      setText(text.toUpperCase())
  }
  function handleLowerCase() {
    setText(text.toLowerCase())
  }
  function handelClear(params) {
    setText("")
  }
  function onChangedEvent(event) {
   setText(event.target.value)
      
  }
  return (
    <>
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
      <button className="btn btn-primary m-2" onClick={handleUpperCase}>Convert to Upper case</button>
      <button className="btn btn-primary m-2" onClick={handleLowerCase}>Convert to lower case</button>
      <button className="btn btn-primary m-2" onClick={handelClear}>Clear Text</button>
      </div>

      <div className="container">
        <h3>Text Summary</h3>
        <p>
          { 
          text.length === 0 ? 0:text.split(" ").length} Words<br />
          { text.length === 0?text.length: text.length - text.split(" ").length + 1} Characters Without Space<br />
          { text.length===0? 0  :text.split(" ").length*0.008} minutes read
          
        </p>
        <h2>Preview</h2>
        <p>
          {text}
        </p>
      </div>
      </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  
}
TextForm.defaultProps = {
  heading: "Text For analyze"
}