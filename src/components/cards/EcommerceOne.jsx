import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function EcommerceOne(){
    const [ecommerceOneState, setEcommerceOneState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEcommerceOneState({
            ...ecommerceOneState,
            showColor:!ecommerceOneState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEcommerceOneState({
            ...ecommerceOneState,
            showColor:!ecommerceOneState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEcommerceOneState({
            ...ecommerceOneState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let ecommerceOneComp = (
            
                <div className="flex justify-start items-top bg-gray-50 rounded-xl" style={{"width":"auto", "height":"auto"}}>
                    <div className="py-4 px-4">
                        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" fill="white"/>
                                <path d="M55.3333 36.6667V55.3333H36.6667V36.6667H55.3333ZM55.3333 34H36.6667C35.2 34 34 35.2 34 36.6667V55.3333C34 56.8 35.2 58 36.6667 58H55.3333C56.8 58 58 56.8 58 55.3333V36.6667C58 35.2 56.8 34 55.3333 34ZM48.8533 45.8133L44.8533 50.9733L42 47.52L38 52.6667H54L48.8533 45.8133Z" fill="#CECECE"/>
                            <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" stroke="#CECECE"/>
                        </svg>
                    </div>
                    <div className="py-4 px-4 border-r-2 border-gray-100">
                        <h3 className={"p-0 m-0 leading-tight font-normal text-gray-400 " + ecommerceOneState.selectedFont}>CATEGORY</h3>
                        <h3 className={"p-0 m-0 leading-tight " + ecommerceOneState.selectedFont}>Product Name</h3>
                        <p className={"p-0 m-0 " + ecommerceOneState.selectedFont}>Unis Item: 00-00-00000</p>
                        <input className="border border-gray-100 rounded-lg" value="Add item note..."></input>
                    </div>
                    <div className="py-4 px-4">
                        <div className="flex justify-end items-start mb-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 7.25V8.75H11.75V7.25H4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z" fill="#BE110B"/>
                            </svg>
                        </div>
                        <div className="flex justify-end items-center mb-4">
                            <div className="flex justify-center items-center w-6 h-6 bg-white border">-</div>
                            <div className="flex justify-center items-center w-6 h-6 bg-white border">1</div>
                            <div className="flex justify-center items-center w-6 h-6 bg-white border">+</div>
                        </div>
                        <div><h2 className={"m-0 p-0 " + ecommerceOneState.selectedFont}>$1,0000.00</h2></div>
                    </div>
                </div>
           
    )

        let ecommerceOneCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + ecommerceOneState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + ecommerceOneState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + ecommerceOneState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            ecommerceOneComp={ecommerceOneComp} 
            ecommerceOneCompString={ecommerceOneCompString}
            showColor={ecommerceOneState.showColor} 
            selectedColor={ecommerceOneState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}