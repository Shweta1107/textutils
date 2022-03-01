import React from "react";

export default function Alert(props) {

    const captilized = (word)=>{
        const lower = word.toLowerCase();
        return lower.CharAt(0).toUpperCase() + lower.slice(1);
      }  
  
  return (
      
       props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
       <strong>captilized{props.alert.type}</strong> : {props.alert.msg}
        <button
          type="button" className="close" data-dismiss="alert" aria-label="Close"></button>
      </div>

    
  );
}
