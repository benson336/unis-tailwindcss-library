import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function CollapsibleInput(){
    const [collapsibleInputState, setCollapsibleInputState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
    });

    const toggleColor = (e) => {
        e.preventDefault();
        setCollapsibleInputState({
            ...collapsibleInputState,
            showColor:!collapsibleInputState.showColor,
        })
    }

     const changeColor = (e) => {
        e.preventDefault();
        setCollapsibleInputState({
            ...collapsibleInputState,
            showColor:!collapsibleInputState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setCollapsibleInputState({
            ...collapsibleInputState,
            selectedFont: e.target.value,
        })
    }

   let collapsibleInputComp = (
    <div className="border border-gray-100 rounded-lg" style={{"width":"696px", "height":"auto"}}>
        <div className="w-full px-5 py-3 flex justify-start items-center rounded-t-lg bg-gray-50">
            <div className="w-1/2 flex justify-start">
                <div className="leading-normal">
                    <h4 className={"p-0 m-0 font-bold " + collapsibleInputState.selectedFont}>Header</h4>
                    <p className={"p-0 m-0 " + collapsibleInputState.selectedFont}>Subheader</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-end">
                <div>
                    <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path
                            d="M1.41 7.41003L6 2.83003L10.59 7.41003L12 6.00003L6 3.43323e-05L0 6.00003L1.41 7.41003Z"
                            fill="#323232"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div className="w-full px-10 py-5 flex justify-center items-center rounded-lg bg-white">
            <div className="w-1/4">
                <div className={"font-bold " + collapsibleInputState.selectedFont}><h4>Label</h4></div>
                <input className="border border-gray-200 rounded-lg w-11/12" value="Input"></input>
                <div><p className={"m-0 text-gray-500 " + collapsibleInputState.selectedFont}>supporting text</p></div>
            </div>
            <div className="w-1/4 ml-3">
                <div className={"font-bold " + collapsibleInputState.selectedFont}><h4>Label</h4></div>
                <input className="border border-gray-200 rounded-lg w-11/12" value="Input"></input>
                <div><p className={"m-0 text-gray-500 " + collapsibleInputState.selectedFont}>supporting text</p></div>
            </div>
            <div className="w-1/4 ml-3">
                <div className={"font-bold " + collapsibleInputState.selectedFont}><h4>Label</h4></div>
                <input className="border border-gray-200 rounded-lg w-11/12" value="Input"></input>
                <div><p className={"m-0 text-gray-500 " + collapsibleInputState.selectedFont}>supporting text</p></div>
            </div>
            <div className="w-1/4 ml-3">
                <div className={"font-bold " + collapsibleInputState.selectedFont}><h4>Label</h4></div>
                <input className="border border-gray-200 rounded-lg w-11/12" value="Input"></input>
                <div><p className={"m-0 text-gray-500 " + collapsibleInputState.selectedFont}>supporting text</p></div>
            </div>
        </div>
    </div>
    )

    let collapsibleCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + collapsibleInputState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + collapsibleInputState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + collapsibleInputState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';



    return(
        <>
        <PreviewWindow 
        collapsibleInputComp={collapsibleInputComp} 
        //collapsibleCompString={collapsibleCompString}
        showColor={collapsibleInputState.showColor} 
        selectedColor={collapsibleInputState.selectedColor}
        changeColor={changeColor} 
        changeFont={changeFont} 
        toggleColor={toggleColor}
        />
        </>
    )
}