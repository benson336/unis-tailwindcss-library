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

    
    let buttonFilterCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold">Header</h4><p class="p-0 m-0">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    let buttonFilterComp = (
        <div>
                <button className="relative py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-white hover:bg-gray-100 active:bg-gray-200">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Filter</div>
                    <div className="absolute flex flex-col justify-center items-center bg-white left-0 top-0 mt-14 h-38 w-32 border border-gray-100 rounded-lg" style={{"boxShadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-4">Option 1</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-4">Option 2</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-4">Option 3</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox"></input>
                            <div className="ml-4">Option 4</div>
                        </div>
                    </div>
                </button>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonFilterComp={buttonFilterComp} 
            buttonFilterCompString={buttonFilterCompString}
            showColor={buttonFilterState.showColor} 
            selectedColor={buttonFilterState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}