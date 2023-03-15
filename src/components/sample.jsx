import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function Sample(){
    const [state, setState] = useState({
      
    });

    const sampleFunction = (e) => {
       e.preventDefault();
       setState({
           
       })
   };

   let sampleComponent = (
        <div>
            
        </div>
    )

    return(
        <>
        <PreviewWindow name="test"/>
        <h1>Hello from sample</h1>
        
        </>
    )
}