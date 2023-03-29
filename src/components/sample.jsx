import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function Sample(){
    const [sampleState, setSampleState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setSampleState({
            ...sampleState,
            showColor:!sampleState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setSampleState({
            ...sampleState,
            showColor:!sampleState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setSampleState({
            ...sampleState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let sampleComp = (
            
      
           
    )

        let sampleCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + sampleState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + sampleState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + sampleState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            sampleComp={sampleComp} 
            sampleCompString={sampleCompString}
            showColor={sampleState.showColor} 
            selectedColor={sampleState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}