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
            showColor={buttonLinkState.showColor} 
            selectedColor={buttonLinkState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}