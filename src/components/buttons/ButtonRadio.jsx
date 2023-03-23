import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function ButtonRadio(){

    const [buttonRadioState, setButtonRadioState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonRadioState({
            ...buttonRadioState,
            showColor:!buttonRadioState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonRadioState({
            ...buttonRadioState,
            showColor:!buttonRadioState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonRadioState({
            ...buttonRadioState,
            selectedFont: e.target.value,
        })
    }

    
    let buttonRadioCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold">Header</h4><p class="p-0 m-0">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    let buttonRadioComp = (
        <div>
            <div className="flex justify-start items-center rounded-xl bg-gray-50" style={{"width":"356px", "height":"70px"}}>
                <div className="w-1/2 flex justify-start items-center">
                    <div className="ml-10%">
                        <div className="py-4 px-4 bg-gray-100 rounded-full">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#323232"/>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-10%">
                        <h4 className="p-0 m-0 font-bold">Button Name</h4>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <div className="mr-10%">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="#323232"/>
                            <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" fill="#323232"/>
                        </svg>
                    </div>
                </div>
            </div>
            <br />
            <div className="flex justify-start items-center border border-gray-200 rounded-xl bg-white" style={{"width":"356px", "height":"70px"}}>
                <div className="w-1/2 flex justify-start items-center">
                    <div className="ml-10%">
                        <div className="py-4 px-4 bg-gray-100 rounded-full">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#323232"/>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-10%">
                        <h4 className="p-0 m-0 font-bold">Button Name</h4>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <div className="mr-10%">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="#323232"/>
                            <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" fill="#323232"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <>
            <PreviewWindow
            buttonRadioComp={buttonRadioComp} 
            buttonRadioCompString={buttonRadioCompString}
            showColor={buttonRadioState.showColor} 
            selectedColor={buttonRadioState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}

/*<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_404_17983)">
                                <rect width="40" height="40" rx="20" fill="#ECECEC"/>
                                <g clip-path="url(#clip1_404_17983)">
                                    <path d="M27 21H21V27H19V21H13V19H19V13H21V19H27V21Z" fill="#323232"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_404_17983">
                                    <rect width="40" height="40" rx="20" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_404_17983">
                                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg>*/