import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function ButtonOption(){

    const [buttonOptionState, setButtonOptionState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonOptionState({
            ...buttonOptionState,
            showColor:!buttonOptionState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonOptionState({
            ...buttonOptionState,
            showColor:!buttonOptionState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonOptionState({
            ...buttonOptionState,
            selectedFont: e.target.value,
        })
    }

    
    let buttonOptionCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold">Header</h4><p class="p-0 m-0">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    let buttonOptionComp = (
        <div>
            <div className="flex justify-center items-center bg-white mt-5" style={{"marginBottom":"100px"}}>
                <button className="relative py-1 px-4 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-white">
                    <div className="mr-3">Option</div>
                    <div>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="absolute flex flex-col justify-center items-center bg-white left-0 top-0 mt-12 h-28 w-24 border border-gray-100 rounded-lg" style={{"boxShadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                            <div className="px-4 hover:bg-gray-100 rounded">Option 1</div>
                            <div className="px-4 hover:bg-gray-100 rounded">Option 2</div>
                            <div className="px-4 hover:bg-gray-100 rounded">Option 3</div>
                    </div>
                </button>
                <button className="relative py-1 px-4 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-white bg-gray-800 ml-3">
                    <div className="mr-3">Option</div>
                    <div>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="absolute flex flex-col justify-center items-center bg-white left-0 top-0 mt-12 h-28 w-24 border border-gray-100 rounded-lg" style={{"boxShadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                            <div className="px-4 text-gray-800 hover:bg-gray-100 rounded">Option 1</div>
                            <div className="px-4 text-gray-800 hover:bg-gray-100 rounded">Option 2</div>
                            <div className="px-4 text-gray-800 hover:bg-gray-100 rounded">Option 3</div>
                    </div>
                </button>
            </div>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonOptionComp={buttonOptionComp} 
            buttonOptionCompString={buttonOptionCompString}
            showColor={buttonOptionState.showColor} 
            selectedColor={buttonOptionState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}