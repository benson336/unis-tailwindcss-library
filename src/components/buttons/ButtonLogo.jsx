import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function ButtonLogo(){

    const [buttonLogoState, setButtonLogoState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonLogoState({
            ...buttonLogoState,
            showColor:!buttonLogoState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonLogoState({
            ...buttonLogoState,
            showColor:!buttonLogoState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonLogoState({
            ...buttonLogoState,
            selectedFont: e.target.value,
        })
    }

    
    let buttonLogoCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold">Header</h4><p class="p-0 m-0">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    let buttonLogoComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center bg-white">
                <button className="px-3 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    <img src="../paypal_logo.png" className="w-44 h-6 object-none" />
                </button>
            </div>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonLogoComp={buttonLogoComp} 
            buttonLogoCompString={buttonLogoCompString}
            showColor={buttonLogoState.showColor} 
            selectedColor={buttonLogoState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}