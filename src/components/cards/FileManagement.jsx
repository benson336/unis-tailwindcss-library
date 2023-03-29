import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function FileManagement(){
    const [fileManagementState, setFileManagementState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setFileManagementState({
            ...fileManagementState,
            showColor:!fileManagementState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setFileManagementState({
            ...fileManagementState,
            showColor:!fileManagementState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setFileManagementState({
            ...fileManagementState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let fileManagementComp = (
            
        <div className="border border-gray-100 rounded-xl" style={{"width":"200px", "height":"auto"}}>
            <div className="px-5 pt-4 w-full flex justify-end items-center">
                <div>
                    <svg width={4} height={16} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232" />
                    </svg>
                </div>
            </div>
            <div className="px-5 pb-8 w-full flex justify-center items-start">
                <div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3333 3.16667V21.8333H2.66667V3.16667H21.3333ZM21.3333 0.5H2.66667C1.2 0.5 0 1.7 0 3.16667V21.8333C0 23.3 1.2 24.5 2.66667 24.5H21.3333C22.8 24.5 24 23.3 24 21.8333V3.16667C24 1.7 22.8 0.5 21.3333 0.5ZM14.8533 12.3133L10.8533 17.4733L8 14.02L4 19.1667H20L14.8533 12.3133Z" fill="#CECECE"/>
                    </svg>
                </div>
            </div>
            <div className="px-5 py-5 border-t border-gray-100">
                <div>
                    <h3 className={"p-0 m-0 leading-none " + fileManagementState.selectedFont}>File1.pdf</h3>
                    <p className={"p-0 m-0 " + fileManagementState.selectedFont}>12/13/2022 13:36</p>
                </div>
            </div>
        </div>
           
    )

        let fileManagementCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + fileManagementState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + fileManagementState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + fileManagementState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            fileManagementComp={fileManagementComp} 
            fileManagementCompString={fileManagementCompString}
            showColor={fileManagementState.showColor} 
            selectedColor={fileManagementState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}