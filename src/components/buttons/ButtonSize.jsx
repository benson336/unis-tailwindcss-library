import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function ButtonSize(){

    const [buttonSizeState, setButtonSizeState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonSizeState({
            ...buttonSizeState,
            showColor:!buttonSizeState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonSizeState({
            ...buttonSizeState,
            showColor:!buttonSizeState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonSizeState({
            ...buttonSizeState,
            selectedFont: e.target.value,
        })
    }

    
   

    let buttonSizeComp = (
        <div>
            <div className="bg-white">
                <button className="px-2 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    Small
                </button>
                <br />
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    Regular
                </button>
                <br />
                <button className="py-1 px-16 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    Medium
                </button>
                <br />
                <button className="py-2 px-32 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    Large
                </button>
                <br />
                <button className="py-2 px-48 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    Extra Large
                </button>
            </div>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonSizeComp={buttonSizeComp} 
            showColor={buttonSizeState.showColor} 
            selectedColor={buttonSizeState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}