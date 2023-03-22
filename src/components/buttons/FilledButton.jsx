import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function FilledButton(){

    const [fillButtonState, setFillButtonState] = useState({
        showColor: false,
        selectedColor:"bg-night-500",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setFillButtonState({
            ...fillButtonState,
            showColor:!fillButtonState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setFillButtonState({
            ...fillButtonState,
            showColor:!fillButtonState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setFillButtonState({
            ...fillButtonState,
            selectedFont: e.target.value,
        })
    }

    
   

    let filledButtonComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center bg-white">
                {/*<button className={"py-1 px-5 border border-solid rounded-lg text-white " + fillButtonState.selectedColor + " hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 " 
                + fillButtonState.selectedFont}>
                    Enabled
                </button>*/}
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    Enabled
                </button>
                <button className="py-1 px-5 rounded-lg font-medium text-white bg-gray-400 ml-3">
                    Hovered
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-white bg-gray-400 ml-3">
                    Focused
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-white bg-gray-600 ml-3">
                    Active
                </button> 
                <button className="py-1 px-5 rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3" disabled>
                    Disabled
                </button> 
            </div>

            {/*Plus Left*/}
            <div className="flex justify-center items-center bg-white mt-5">
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-600 ml-3">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
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
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600">
                    <div className="mr-3">Enabled</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                </button>
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-1 px-5 flex justify-center items-center rounded-lg font-medium text-white bg-gray-600 ml-3">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
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
            filledButtonComp={filledButtonComp} 
            showColor={fillButtonState.showColor} 
            selectedColor={fillButtonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}



            {/*<div class="flex justify-center items-center bg-white items-center" style={{"width":"100%", "height":"45%"}}>
            <div className={fillButtonState.selectedFont + " " + fillButtonState.selectedColor + " rounded py-1 px-3 text-white font-medium text-md"}>Whereas recognition</div>
            <div class="ml-5">
                <div class="relative mt-1 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" />
                    <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>*/}