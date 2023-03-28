import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function EcommerceSix(){
    const [ecommerceSixState, setEcommerceSixState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEcommerceSixState({
            ...ecommerceSixState,
            showColor:!ecommerceSixState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEcommerceSixState({
            ...ecommerceSixState,
            showColor:!ecommerceSixState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEcommerceSixState({
            ...ecommerceSixState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let ecommerceSixComp = (
            
                <div className="px-4 py-4 text-center bg-white rounded-xl border" style={{"width":"450px", "height":"auto"}}>
                    <div className="mb-8">
                        <h2 className="p-0 m-0">Payment Information</h2>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <button className="w-48% px-6 py-2 bg-[#FFC555]">Paypal</button>
                        <button className="w-48% px-6 py-2 bg-white border border-gray-100">G-Pay</button>
                    </div>

                    <div className="w-full mt-3 flex justify-between items-center">
                        <div className="w-45% border-b"></div>
                        <div className="text-xs">OR</div>
                        <div className="w-45% border-b"></div>
                    </div>

                    <div className="mb-8">
                        <h3 className="p-0 m-0 text-gray-700 text-sm">Debit / Credid Card</h3>
                    </div>
                    
                    <div className="w-full mb-3 flex justify-center items-center h-12 bg-gray-50 rounded">
                        <div className="flex justify-center">
                            <input type="radio"></input>
                            <div className="ml-3"><h3 className="p-0 m-0">Pay Now</h3></div>
                        </div>
                        <div className="flex justify-center ml-5">
                            <input type="radio"></input>
                            <div className="ml-3"><h3 className="p-0 m-0">Collect</h3></div>
                        </div>
                    </div>
                        
                    <div className="mb-5">
                        <h3 className="p-0 m-0 text-gray-500 text-sm">You will be charged once the shipment has been picked up.</h3>
                    </div>

                    <div className="mb-5">
                        <input className="w-full h-12 border border-gray-200 bg-gray-50 rounded-lg" value=""></input>
                    </div>

                    <div className="mb-5">
                        <input className="w-full h-12 border border-gray-200 bg-gray-50 rounded-lg" value=""></input>
                    </div>

                    <div className="mb-7 flex justify-start">
                        <input className="w-1/3 h-12 border border-gray-200 bg-gray-50 rounded-lg" value=""></input>
                        <input className="w-1/3 h-12 border border-gray-200 bg-gray-50 rounded-lg ml-3" value=""></input>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <button className="w-48% px-6 py-1 bg-white border border-gray-500 rounded-lg">Cancel</button>
                        <button className="w-48% px-6 py-1 bg-gray-200 rounded-lg">Next</button>
                    </div>
                 
 
                </div>
           
    )

        let ecommerceSixCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + ecommerceSixState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + ecommerceSixState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + ecommerceSixState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            ecommerceSixComp={ecommerceSixComp} 
            ecommerceSixCompString={ecommerceSixCompString}
            showColor={ecommerceSixState.showColor} 
            selectedColor={ecommerceSixState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}