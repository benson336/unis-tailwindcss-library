import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function TonalButton(){

    const [tonalButtonState, setTonalButtonState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setTonalButtonState({
            ...tonalButtonState,
            showColor:!tonalButtonState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setTonalButtonState({
            ...tonalButtonState,
            showColor:!tonalButtonState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setTonalButtonState({
            ...tonalButtonState,
            selectedFont: e.target.value,
        })
    }

    
   

    let tonalButtonComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center bg-white items-center" style={{"width":"100%", "height":"45%"}}>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300">
                    Enabled
                </button>
                <button className="py-1 px-5 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3">
                    Hovered
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3">
                    Focused
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-gray-800 bg-gray-300 ml-3">
                    Active
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3" disabled>
                    Disabled
                </button> 
            </div>

            {/*Plus Left*/}
            <div className="flex justify-center items-center bg-white items-center mt-5" style={{"width":"100%", "height":"45%"}}>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-300 ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3" disabled>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path
                                d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                                fill="#B3B4B5"
                            />
                        </svg>
                    </div>
                    <div className="ml-3">Disabled</div>
                </button> 
            </div>

            {/*Plus Right*/}
            <div className="flex justify-center items-center bg-white items-center mt-5" style={{"width":"100%", "height":"45%"}}>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300">
                    <div className="mr-3">Enabled</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-300 ml-3">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3" disabled>
                    <div className="mr-3">Disabled</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path
                                d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                                fill="#B3B4B5"
                            />
                        </svg>
                    </div>
                </button> 
            </div>
        </div>
    )

    return(
        <>
            <PreviewWindow
            tonalButtonComp={tonalButtonComp} 
            showColor={tonalButtonState.showColor} 
            selectedColor={tonalButtonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}