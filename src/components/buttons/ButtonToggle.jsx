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

    
   

    let buttonToggleComp = (
        <div>
            <div className="flex justify-center items-center bg-white items-center">
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-l-lg font-medium text-gray-800 bg-white hover:bg-gray-100 focus:bg-gray-800 focus:text-white">
                    Selection
                </button>
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-r-lg font-medium text-gray-800 bg-white hover:bg-gray-100 focus:bg-gray-800 focus:text-white">
                    Selection
                </button>
            </div>
            <br />
            <div className="flex justify-center items-center bg-white items-center">
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-l-lg font-medium text-gray-800 bg-white hover:bg-gray-100 focus:bg-gray-800 focus:text-white">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Selection</div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center border border-solid border-gray-800 rounded-r-lg font-medium text-gray-800 bg-white hover:bg-gray-100 focus:bg-gray-800 focus:text-white">
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
            showColor={buttonToggleState.showColor} 
            selectedColor={buttonToggleState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}