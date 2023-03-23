import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function ButtonLink(){

    const [buttonLinkState, setButtonLinkState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonLinkState({
            ...buttonLinkState,
            showColor:!buttonLinkState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonLinkState({
            ...buttonLinkState,
            showColor:!buttonLinkState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonLinkState({
            ...buttonLinkState,
            selectedFont: e.target.value,
        })
    }

    
    let buttonLinkCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold">Header</h4><p class="p-0 m-0">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    let buttonLinkComp = (
        <div>
                <div className="flex flex-col justify-center items-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#ECECEC"/>
                    <path d="M25 15H21V17H25C26.65 17 28 18.35 28 20C28 21.65 26.65 23 25 23H21V25H25C27.76 25 30 22.76 30 20C30 17.24 27.76 15 25 15ZM19 23H15C13.35 23 12 21.65 12 20C12 18.35 13.35 17 15 17H19V15H15C12.24 15 10 17.24 10 20C10 22.76 12.24 25 15 25H19V23ZM16 19H24V21H16V19Z" fill="#5E5F5F"/>
                    </svg>
                    <div>Copy Link</div>
                </div>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonLinkComp={buttonLinkComp} 
            buttonLinkCompString={buttonLinkCompString}
            showColor={buttonLinkState.showColor} 
            selectedColor={buttonLinkState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}