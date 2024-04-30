import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case", "success");
    }
    

     
    const handleLoClick = () => {
        let nwText = text.toLowerCase();
        setText(nwText);
        props.showAlert("Converted to Lower case", "success");
    }
    const clear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Box is Cleared", "success");
    }

    const handleCopy = () =>{
        var text = document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied ", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces", "success"); 
    }

    const handleOnChange = (event) => {
        console.log("on change" );
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" style= {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copt Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
    </div>
    <div className="container my-3">
        <h1>Your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
