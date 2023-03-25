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
            
                <div className="border rounded-xl" style={{"width":"416px", "height":"486px"}}>
                    <div className="px-5 w-full flex justify-start items-center" style={{"height":"12%"}}>
                        <div className="w-1/2 flex justify-start items-center">
                            <div className="leading-normal">
                                <h3 className={"p-0 m-0 font-bold " + kanbanState.selectedFont}>Title</h3>
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
                        <p className={"p-0 m-0 " + kanbanState.selectedFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, tellus eu blandit viverra, velit leo efficitur velit, eu condimentum dui leo 
                        vel nisl. Sed blandit fringilla ante, quis bibendum justo molestie eu.</p>
                    </div> 


                    <div className="px-5 py-4 w-full">
                        <div className="flex leading-normal font-semibold">
                            <div className="py-1 px-4 flex items-center bg-gray-200 border-0 rounded-full">
                                <p className={"p-0 m-0 text-xs " + kanbanState.selectedFont}>Tag</p>
                            </div>
                            <div className="py-1 px-4 ml-2 bg-[#D6FCE7] border-0 rounded-full">
                                <p className={"p-0 m-0 text-[#268C55] text-xs " + kanbanState.selectedFont}>Priority</p>
                            </div>
                            <div className="py-1 px-4 ml-2 bg-gray-200 border-0 rounded-full">
                                <p className={"p-0 m-0 text-xs " + kanbanState.selectedFont}>Status</p>
                            </div>
                        </div>
                        <div className="my-5 leading-tight border-y-2 border-gray-100">
                            <div className="w-full flex justify-start items-center">
                                <div className="w-1/2 flex justify-start items-center">
                                    <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white"/>
                                            <path d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z" fill="#CECECE"/>
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#CECECE"/>
                                    </svg>

                                    </div>
                                    <div className="ml-10% leading-normal">
                                        <h4 className={"p-0 m-0 font-bold " + kanbanState.selectedFont}>Item Name</h4>
                                        <p className={"p-0 m-0 " + kanbanState.selectedFont}>Item Description</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end items-center">
                                    <p className={"font-bold " + kanbanState.selectedFont}>QTY</p>
                                    <p className={"ml-2 " + kanbanState.selectedFont}>UOM</p>
                                </div>   
                            </div>
                            <div className="w-full flex justify-start items-center">
                                <div className="w-1/2 flex justify-start items-center">
                                    <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white"/>
                                            <path d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z" fill="#CECECE"/>
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#CECECE"/>
                                    </svg>

                                    </div>
                                    <div className="ml-10% leading-normal">
                                        <h4 className={"p-0 m-0 font-bold " + kanbanState.selectedFont}>Item Name</h4>
                                        <p className={"p-0 m-0 " + kanbanState.selectedFont}>Item Description</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end items-center">
                                    <p className={"font-bold " + kanbanState.selectedFont}>QTY</p>
                                    <p className={"ml-2 " + kanbanState.selectedFont}>UOM</p>
                                </div>   
                            </div>
                            <div className="w-full flex justify-start items-center">
                                <div className="w-1/2 flex justify-start items-center">
                                    <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white"/>
                                            <path d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z" fill="#CECECE"/>
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#CECECE"/>
                                    </svg>

                                    </div>
                                    <div className="ml-10% leading-normal">
                                        <h4 className={"p-0 m-0 font-bold " + kanbanState.selectedFont}>Item Name</h4>
                                        <p className={"p-0 m-0 " + kanbanState.selectedFont}>Item Description</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end items-center">
                                    <p className={"font-bold " + kanbanState.selectedFont}>QTY</p>
                                    <p className={"ml-2 " + kanbanState.selectedFont}>UOM</p>
                                </div>   
                            </div>
                        </div>
                        <div className="flex jusify-center items-center">
                            <div className="w-1/2 flex justify-start items-center">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM18 7H2V4H18V7Z" fill="#88898B"/>
                                </svg>
                                <p className={"p-0 m-0 ml-2 " + kanbanState.selectedFont}>Date</p>
                            </div> 

                            <div className="w-1/2 flex justify-end items-center">
                                <button className={"py-1 px-5 border border-solid rounded-lg text-[#444545] hover:bg-[#989A9C] focus:bg-[#989A9C] active:bg-[#777879] " + kanbanState.selectedFont}>
                                    Cancel
                                </button>
                                <button className={"py-1 px-5 ml-2 rounded-lg text-white " + kanbanState.selectedColor + " hover:bg-[#989A9C] focus:bg-[#989A9C] active:bg-[#777879] " + kanbanState.selectedFont}>
                                    Enabled
                                </button>
                            </div>
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