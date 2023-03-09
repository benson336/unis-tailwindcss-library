import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function FilledButton(){

    const [fillButtonState, setFillButtonState] = useState({
        showColor: false,
        selectedColor:"bg-red-200",
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
        
        <div class="flex justify-center items-center bg-white items-center" style={{"width":"100%", "height":"45%"}}>

            <button className="border border-solid py-2 px-6 rounded-lg text-white bg-[#444545] hover:bg-[#989A9C] active:bg-[#777879]">
                Enabled
            </button>
            <button className="border border-solid py-2 px-6 rounded-lg text-white bg-[#444545] hover:bg-[#989A9C] active:bg-[#777879] disabled-[#ECECEC] disabled">
                Enabled
            </button>

            {/*<div className="flex flex-col justify-center items-center gap-2 rounded-lg bg-[#444545]">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-6 py-2">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">Enabled</p>
                </div>
            </div>*/}
            
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
            <div className={fillButtonState.selectedFont + " " + fillButtonState.selectedColor + " rounded py-2 px-3 text-white font-medium text-md"}>Whereas recognition</div>
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