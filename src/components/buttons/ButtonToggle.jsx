import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function ButtonToggle(){

    const [buttonToggleState, setButtonToggleState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonToggleState({
            ...buttonToggleState,
            showColor:!buttonToggleState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonToggleState({
            ...buttonToggleState,
            showColor:!buttonToggleState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonToggleState({
            ...buttonToggleState,
            selectedFont: e.target.value,
        })
    }

    
    let buttonToggleCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold">Header</h4><p class="p-0 m-0">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    let buttonToggleComp = (
        <div>
            <div className="flex justify-center items-center bg-white items-center">
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-l-lg font-medium text-gray-800 bg-white focus:bg-gray-800 focus:text-white">
                    Selection
                </button>
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-r-lg font-medium text-gray-800 bg-white focus:bg-gray-800 focus:text-white">
                    Selection
                </button>
            </div>
            <br />
            <div className="flex justify-center items-center bg-white items-center">
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-l-lg font-medium text-gray-800 bg-white focus:bg-gray-800 focus:text-white">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Selection</div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-r-lg font-medium text-gray-800 bg-white focus:bg-gray-800 focus:text-white">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Selection</div>
                </button>
            </div>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonToggleComp={buttonToggleComp} 
            buttonToggleCompString={buttonToggleCompString}
            showColor={buttonToggleState.showColor} 
            selectedColor={buttonToggleState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}