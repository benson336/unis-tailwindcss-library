import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function ButtonFilter(){

    const [buttonFilterState, setButtonFilterState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonFilterState({
            ...buttonFilterState,
            showColor:!buttonFilterState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonFilterState({
            ...buttonFilterState,
            showColor:!buttonFilterState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonFilterState({
            ...buttonFilterState,
            selectedFont: e.target.value,
        })
    }

    
   

    let buttonFilterComp = (
        <div>
                <button className="relative py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                    <div className="flex flex-col justify-center items-center bg-white absolute left-0 top-0 mt-12 h-40 w-40 rounded-lg" style={{"border":"1px solid rgb(229 231 235)", "boxShadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-2 text-lg">Option 1</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-2 text-lg">Option 2</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-2 text-lg">Option 3</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-2 text-lg">Option 4</div>
                        </div>
                    </div>
                </button>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonFilterComp={buttonFilterComp} 
            showColor={buttonFilterState.showColor} 
            selectedColor={buttonFilterState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}