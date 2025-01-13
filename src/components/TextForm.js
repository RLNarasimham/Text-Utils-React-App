import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearText = () => {
        setText('');
        props.showAlert("Cleared the text!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to ClipBoard!!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces from Text!!","success");
    }

    const [text, setText] = useState("Enter your text here....");

    return (
        <>
        <div className="container my-3" style={{ 
          backgroundColor: props.mode === 'dark' ? '#02417e' : 'white', 
          color: props.mode === 'dark' ? 'white' : 'black',
          borderRadius: '8px',
          padding: '20px'
        }}>
            <h1>{props.heading}</h1>
            <div>
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Please Enter Some Text to Preview"}</p>
        </div>
        </>
    );
}
