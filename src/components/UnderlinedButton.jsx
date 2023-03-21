import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function UnderlinedButton(){

    const [underlinedButtonState, setUnderlinedButtonState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setUnderlinedButtonState({
            ...underlinedButtonState,
            showColor:!underlinedButtonState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setUnderlinedButtonState({
            ...underlinedButtonState,
            showColor:!underlinedButtonState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setUnderlinedButtonState({
            ...underlinedButtonState,
            selectedFont: e.target.value,
        })
    }

    
   

    let underlinedButtonComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center bg-white items-center" style={{"width":"100%", "height":"45%"}}>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-900 bg-white hover:text-gray-400 focus:text-gray-500 active:text-gray-700">
                    Enabled
                </button>
                <button className="py-1 px-5 rounded-lg font-medium text-gray-400 bg-white ml-3">
                    Hovered
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-gray-500 bg-white ml-3">
                    Focused
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-gray-700 bg-white ml-3">
                    Active
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-gray-300 disabled:bg-white ml-3" disabled>
                    Disabled
                </button> 
            </div>

            {/*Plus Left*/}
            <div className="flex justify-center items-center bg-white items-center mt-5" style={{"width":"100%", "height":"45%"}}>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-900 bg-white hover:text-gray-400 focus:text-gray-500 active:text-gray-700">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#323232"/>
                        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-400 bg-white ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#989A9C"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-500 bg-white ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#88898B"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-700 bg-white ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#5E5F5F"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-white ml-3" disabled>
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
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-900 bg-white hover:text-gray-400 focus:text-gray-500 active:text-gray-700">
                    <div className="mr-3">Enabled</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#323232"/>
                        </svg>
                    </div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-400 bg-white ml-3">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#989A9C"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-500 bg-white ml-3">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#88898B"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-700 bg-white ml-3">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#5E5F5F"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-white ml-3" disabled>
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
            underlinedButtonComp={underlinedButtonComp} 
            showColor={underlinedButtonState.showColor} 
            selectedColor={underlinedButtonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}