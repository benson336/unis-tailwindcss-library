import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function KanbanList(){
    const [kanbanListState, setKanbanListState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setKanbanListState({
            ...kanbanListState,
            showColor:!kanbanListState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setKanbanListState({
            ...kanbanListState,
            showColor:!kanbanListState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setKanbanListState({
            ...kanbanListState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let kanbanListComp = (
            
                <div className="border border-gray-100 rounded-xl" style={{"width":"348px", "height":"auto"}}>
                    <div className="px-5 py-4 w-full flex justify-center items-center">
                        <div className="w-1/2 flex justify-start items-center">
                            <div className="leading-normal">
                                <h3 className={"p-0 m-0 font-bold " + kanbanListState.selectedFont}>Header</h3>
                                <p className={"p-0 m-0 " + kanbanListState.selectedFont}>Subheader</p>
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
                    <div className="px-5 pb-4">
                        <div className="w-full flex justify-start items-center">
                            <div><h4 className="p-0 m-0 font-medium">Item Name</h4></div>
                            <div className="ml-5%"><p className="p-0 m-0">Item Description</p></div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <div><h4 className="p-0 m-0 font-medium">Item Name</h4></div>
                            <div className="ml-5%"><p className="p-0 m-0">Item Description</p></div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <div><h4 className="p-0 m-0 font-medium">Item Name</h4></div>
                            <div className="ml-5%"><p className="p-0 m-0">Item Description</p></div>
                        </div>
                    </div>

                  
                </div>
           
    )

        let kanbanListCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + kanbanListState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + kanbanListState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + kanbanListState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            kanbanListComp={kanbanListComp} 
            kanbanListCompString={kanbanListCompString}
            showColor={kanbanListState.showColor} 
            selectedColor={kanbanListState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}