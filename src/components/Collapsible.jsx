import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function Collapsible(){
    const [collapsibleState, setCollapsibleState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
    });

    const toggleColor = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            showColor:!collapsibleState.showColor,
        })
    }

     const changeColor = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            showColor:!collapsibleState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            selectedFont: e.target.value,
        })
    }

   let collapsibleComp = (
                <div className="flex justify-start items-center border rounded-xl" style={{"width":"348px", "height":"80px"}}>
                    
                    <div className="ml-4 leading-normal">
                        <h4 className={"p-0 m-0 font-bold " + collapsibleState.selectedFont}>Header</h4>
                        <p className={"p-0 m-0 " + collapsibleState.selectedFont}>Subheader</p>
                    </div>
                     
                </div>
    )

    let collapsibleCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + collapsibleState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + collapsibleState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + collapsibleState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    //let stackedCompString = '<div><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + stackedState.selectedColor +'">A</p></div>';

    return(
        <>
        <PreviewWindow 
        collapsibleComp={collapsibleComp} 
        collapsibleCompString={collapsibleCompString}
        showColor={collapsibleState.showColor} 
        selectedColor={collapsibleState.selectedColor}
        changeColor={changeColor} 
        changeFont={changeFont} 
        toggleColor={toggleColor}
        />
        </>
    )
}