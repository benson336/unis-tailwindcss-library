import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function Sample(){
    const [horizontalState, setHorizontalState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
    });

    const toggleColor = (e) => {
        e.preventDefault();
        setHorizontalState({
            ...horizontalState,
            showColor:!horizontalState.showColor,
        })
    }

     const changeColor = (e) => {
        e.preventDefault();
        setHorizontalState({
            ...horizontalState,
            showColor:!horizontalState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setHorizontalState({
            ...horizontalState,
            selectedFont: e.target.value,
        })
    }

   let horizontalComp = (
        
           
                <div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}>
                    <div class="ml-4">
                        <p className={"w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full " + horizontalState.selectedColor}>A</p>
                    </div>
                    <div class="ml-4 leading-normal">
                        <h4 class={"p-0 m-0 font-bold " + horizontalState.selectedFont}>Header</h4>
                        <p class={"p-0 m-0 " + horizontalState.selectedFont}>Subheader</p>
                    </div>
                    <div class="ml-36">
                        <img src="vvv.png" className="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" />
                    </div>   
                </div>
         
    
    )

    return(
        <>
        <PreviewWindow 
        horizontalComp={horizontalComp} 
        showColor={horizontalState.showColor} 
        selectedColor={horizontalState.selectedColor}
        changeColor={changeColor} 
        changeFont={changeFont} 
        toggleColor={toggleColor}
        />
        </>
    )
}