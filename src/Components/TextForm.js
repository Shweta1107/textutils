import React, {useState} from 'react';


export default function TextForm(props) {

  const handleUpClick = ()=>{
      let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to uppercase')
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
  setText(newText)
  props.showAlert('Converted to Lowercase')
}
  
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    // console.log('I am copy')
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

    const [text, setText] = useState('Enter text here');

  return (
    <div className='container' style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor :props.mode === 'dark' ? 'blue':'white' , color: props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
       </div>
       <button className='btn btn-primary mx-2' onClick ={handleUpClick} >Convert Uppercase</button>
       <button className='btn btn-primary mx-2' onClick ={handleLoClick} >Convert LoweCase</button>
       <button className='btn btn-primary mx-2' onClick ={handleCopy} >Handle Copy</button>
       <button className='btn btn-primary mx-2' onClick ={handleExtraSpaces} >Remove extra spaces</button>

       <div className="container" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
         <h1 className='my-3'>Your text summary</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} minutes to read</p>
         <h2>Preview</h2>
       </div>
    </div>
  )
}

