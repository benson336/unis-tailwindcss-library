import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function TonalButton(){

    const [tonalButtonState, setTonalButtonState] = useState({
        showColor: false,
        selectedColor:"bg-gray-100",
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

    
    let tonalButtonCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold">Header</h4><p class="p-0 m-0">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';

    let tonalButtonComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center bg-white">
                <button className={"py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 " + tonalButtonState.selectedColor + " " + tonalButtonState.selectedFont}>
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
            <div className="flex justify-center items-center bg-white mt-5">
                <button className={"py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 " + tonalButtonState.selectedColor + " " + tonalButtonState.selectedFont}>
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
            <div className="flex justify-center items-center bg-white mt-5">
                <button className={"py-1 px-5 flex justify-center items-center rounded-lg font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 " + tonalButtonState.selectedColor + " " + tonalButtonState.selectedFont}>
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
            tonalButtonCompString={tonalButtonCompString}
            showColor={tonalButtonState.showColor} 
            selectedColor={tonalButtonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}