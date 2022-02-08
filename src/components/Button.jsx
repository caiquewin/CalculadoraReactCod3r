import React from "react";
import './Button.css'

export default props =>{ 
    let color =props.color?props.color:"withe" 
    
    return(
       <button className="button" style={{
           backgroundColor:`${color}`
           }}>
        {props.label}
       </button>
    )
}