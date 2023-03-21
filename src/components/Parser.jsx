import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function Stacked(){
    const [stackedState, setStackedState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setStackedState({
            ...stackedState,
            showColor:!stackedState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setStackedState({
            ...stackedState,
            showColor:!stackedState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setStackedState({
            ...stackedState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let stackedCompString = 
            
                <div class="border rounded-xl">
                    <div class="w-full h-1/6 p-3 flex justify-start items-center">
                        <div>
                            <p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full " + stackedState.selectedColor>A</p>
                        </div>
                        <div class="ml-4 leading-normal">
                            <h4 class="p-0 m-0 font-bold " + stackedState.selectedFont>Header</h4>
                            <p class="p-0 m-0 " + stackedState.selectedFont>Subheader</p>
                        </div>
                        <div class="ml-44">
                            <svg width={4} height={16} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232" />
                            </svg>
                        </div>   
                    </div>
                    <div>
                        <img src="ddd.png" class="h-48 object-cover m-0 mb-2" />
                    </div>
                    <div class="p-3">
                        <div class="leading-normal">
                            <h4 class="p-0 m-0 font-bold " + stackedState.selectedFont>Title</h4>
                            <p class="p-0 m-0 " + stackedState.selectedFont>Subtitle</p>
                        </div>
                        <div class="leading-tight">
                            <p class={stackedState.selectedFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div class="flex justify-end">
                            <button class="py-1 px-5 border border-solid rounded-lg text-[#444545] hover:bg-[#989A9C] focus:bg-[#989A9C] active:bg-[#777879] " + stackedState.selectedFont>
                                Cancel
                            </button>
                            <button class="py-1 px-5 ml-2 rounded-lg text-white " + stackedState.selectedColor + " hover:bg-[#989A9C] focus:bg-[#989A9C] active:bg-[#777879] " + stackedState.selectedFont>
                                Enabled
                            </button>
                        </div>
                    </div>
                </div>
           
    

        //let stackedCompString = ''

        let stackedCompString = '<div><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full '+ stackedState.selectedColor +'">A</p></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            stackedComp={stackedComp} 
            stackedCompString={stackedCompString}
            showColor={stackedState.showColor} 
            selectedColor={stackedState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}