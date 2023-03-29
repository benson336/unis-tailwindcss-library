import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function DefaultCheckbox(){
    const [defaultCheckboxState, setDefaultCheckboxState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setDefaultCheckboxState({
            ...defaultCheckboxState,
            showColor:!defaultCheckboxState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setDefaultCheckboxState({
            ...defaultCheckboxState,
            showColor:!defaultCheckboxState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setDefaultCheckboxState({
            ...defaultCheckboxState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let defaultCheckboxComp = (
      <div>
        <div style={{"marginBottom":"20px"}}>
            <input type="checkbox" className="h-7 w-7 rounded checked:text-gray-600 focus:ring-0"></input>
            <input type="checkbox" className="h-7 w-7 rounded checked:text-gray-600 focus:ring-0 ml-4" checked></input>
        </div>

        <div style={{"marginBottom":"20px"}}>
        <input type="checkbox" className="h-7 w-7 rounded checked:text-red-600 focus:ring-0"></input>
        <input type="checkbox" className="h-7 w-7 rounded checked:text-red-600 focus:ring-0 ml-4" checked></input>
        </div>

        
        
      </div>
           
    )

        let defaultCheckboxCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + defaultCheckboxState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + defaultCheckboxState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + defaultCheckboxState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            defaultCheckboxComp={defaultCheckboxComp} 
            defaultCheckboxCompString={defaultCheckboxCompString}
            showColor={defaultCheckboxState.showColor} 
            selectedColor={defaultCheckboxState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}