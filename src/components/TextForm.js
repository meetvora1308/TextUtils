// rfc 
import React , { useState }from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("convert to upper text");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick = () =>{
        // console.log("convert to lower text");
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success");
    }
    const handlecleartext = () =>{
        // console.log("convert to lower text");
        let newText = '';
        setText(newText)
        props.showAlert("The text has been clear","success");
    }
    
    const handleOnChange = (event) => {
        // console.log("handle on change called");
        setText(event.target.value)
    }
    const handlecopyText = () => {
        let text = document.getElementById("myBox")
        text.select();
       
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("The text has been copy","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("The extra space are removed","success");
    }

   const [text,setText] = useState("");
  return (
    <>
    <div className='container my-2' style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.header}</h1>
        <div className="mb-3">
            
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{color: props.mode==='dark'?'white':'black',background:props.mode==='dark'?'grey':'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handlecleartext}>Cleartext</button>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyText}>copy text</button>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Extra Spaces</button>
    
      
    </div>

    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length}character </p>
        <p> { 0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Time required to read </p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter your text in text area"}</p>

    </div>
    
    </>
  
  )
}
