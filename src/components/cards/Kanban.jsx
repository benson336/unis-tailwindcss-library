import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function Kanban(){
    const [kanbanState, setKanbanState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setKanbanState({
            ...kanbanState,
            showColor:!kanbanState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setKanbanState({
            ...kanbanState,
            showColor:!kanbanState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setKanbanState({
            ...kanbanState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let kanbanComp = (
            
                <div className="border rounded-xl" style={{"width":"348px", "height":"464px"}}>
                    <div className="px-5 w-full flex justify-start items-center" style={{"height":"12%"}}>
                        <div className="w-1/2 flex justify-start items-center">
                            <div className="leading-normal">
                                <h4 className={"p-0 m-0 font-bold " + kanbanState.selectedFont}>Title</h4>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-end items-center">
                            <div>
                                <svg width={4} height={16} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 w-full leading-snug">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, tellus eu blandit viverra, velit leo efficitur velit, eu condimentum dui leo 
                        vel nisl. Sed blandit fringilla ante, quis bibendum justo molestie eu. Proin mollis nulla vel enim malesuada.</p>
                    </div> 

                    

                    <div className="px-5 py-4 w-full">
                        <div className="flex leading-normal">
                            <div className={"flex items-center px-3 bg-gray-200 border rounded-full " + kanbanState.selectedFont}>
                                Tag
                            </div>
                            <div className={"py-1 px-3 bg-gray-200 border rounded-full " + kanbanState.selectedFont}>
                                Priority
                            </div>
                            <div className={"py-1 px-3 bg-gray-200 border rounded-full " + kanbanState.selectedFont}>
                                Status
                            </div>
                        </div>
                        <div className="leading-tight">
                            <p className={kanbanState.selectedFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className="flex justify-end">
                            <button className={"py-1 px-5 border border-solid rounded-lg text-[#444545] hover:bg-[#989A9C] focus:bg-[#989A9C] active:bg-[#777879] " + kanbanState.selectedFont}>
                                Cancel
                            </button>
                            <button className={"py-1 px-5 ml-2 rounded-lg text-white " + kanbanState.selectedColor + " hover:bg-[#989A9C] focus:bg-[#989A9C] active:bg-[#777879] " + kanbanState.selectedFont}>
                                Enabled
                            </button>
                        </div>
                    </div>
                </div>
           
    )

        let kanbanCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + kanbanState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + kanbanState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + kanbanState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            kanbanComp={kanbanComp} 
            kanbanCompString={kanbanCompString}
            showColor={kanbanState.showColor} 
            selectedColor={kanbanState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}