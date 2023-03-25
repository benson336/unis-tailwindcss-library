import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function Collapsible(){
    const [collapsibleState, setCollapsibleState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
    });

    const toggleColor = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            showColor:!collapsibleState.showColor,
        })
    }

     const changeColor = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            showColor:!collapsibleState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            selectedFont: e.target.value,
        })
    }

   let collapsibleComp = (
    <div className="border border-gray-100 rounded-lg" style={{"width":"416px", "height":"auto"}}>
        <div className="w-full px-5 py-3 flex justify-start items-center rounded-t-lg bg-gray-50">
            <div className="w-1/2 flex justify-start">
                <div className="leading-normal">
                    <h4 className={"p-0 m-0 font-bold " + collapsibleState.selectedFont}>Header</h4>
                    <p className={"p-0 m-0 " + collapsibleState.selectedFont}>Subheader</p>
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
        <div className="w-full px-5 flex justify-center items-center rounded-lg bg-white">
            <div className="leading-normal">
                <p className={collapsibleState.selectedFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, tellus eu blandit viverra, velit leo efficitur velit, 
                    eu condimentum dui leo SeSed blandit fringilla ante, quis bibenvel nisl. Sed blandit fringilla ante, quis bibendum justo molestie eu. Proin mollis nulla vel enim malesuada, ac accumsan sem auctor.</p>
            </div>
        </div>
    </div>
    )

    let collapsibleCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + collapsibleState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + collapsibleState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + collapsibleState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>';



    return(
        <>
        <PreviewWindow 
        collapsibleComp={collapsibleComp} 
        collapsibleCompString={collapsibleCompString}
        showColor={collapsibleState.showColor} 
        selectedColor={collapsibleState.selectedColor}
        changeColor={changeColor} 
        changeFont={changeFont} 
        toggleColor={toggleColor}
        />
        </>
    )
}