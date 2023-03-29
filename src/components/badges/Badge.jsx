import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function Badge(){
    const [badgeState, setBadgeState] = useState({
        showColor: false,
        selectedColor:"bg-gray-700",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setBadgeState({
            ...badgeState,
            showColor:!badgeState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setBadgeState({
            ...badgeState,
            showColor:!badgeState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setBadgeState({
            ...badgeState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let badgeComp = (
            
      <div className="flex flex-col justify-center items-center">
        <div className={"w-3 h-3 rounded-full " + badgeState.selectedColor} style={{"marginBottom":"20px"}}>

        </div>
        <div className={"w-6 h-6 flex justify-center items-center text-white rounded-full " + badgeState.selectedColor + " " + badgeState.selectedFont} style={{"marginBottom":"20px"}}>
            3
        </div>
        <div className={"w-10 h-6 flex justify-center items-center text-white rounded-full " + badgeState.selectedColor + " " + badgeState.selectedFont}>
            32
        </div>
      </div>
           
    )

        let badgeCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + badgeState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + badgeState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + badgeState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            badgeComp={badgeComp} 
            badgeCompString={badgeCompString}
            showColor={badgeState.showColor} 
            selectedColor={badgeState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}