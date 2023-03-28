import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function EcommerceThree(){
    const [ecommerceThreeState, setEcommerceThreeState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEcommerceThreeState({
            ...ecommerceThreeState,
            showColor:!ecommerceThreeState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEcommerceThreeState({
            ...ecommerceThreeState,
            showColor:!ecommerceThreeState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEcommerceThreeState({
            ...ecommerceThreeState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let ecommerceThreeComp = (
            
        <div className="bg-gray-50 rounded-xl" style={{"width":"300px", "height":"auto"}}>
            <div className="py-4 px-4 flex">
                <div className="w-1/2 flex justify-start items-center">
                    <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" fill="white"/>
                            <path d="M55.3333 36.6667V55.3333H36.6667V36.6667H55.3333ZM55.3333 34H36.6667C35.2 34 34 35.2 34 36.6667V55.3333C34 56.8 35.2 58 36.6667 58H55.3333C56.8 58 58 56.8 58 55.3333V36.6667C58 35.2 56.8 34 55.3333 34ZM48.8533 45.8133L44.8533 50.9733L42 47.52L38 52.6667H54L48.8533 45.8133Z" fill="#CECECE"/>
                        <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" stroke="#CECECE"/>
                    </svg>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <div>
                        <div className="p-1 flex justify-around items-center border-2 rounded-xl bg-white">
                            <h2 className="m-0 p-0">1</h2>
                            <h2 className="m-0 p-0">^</h2>
                            <div className="w-6 h-6 flex justify-center items-center border-2 border-black rounded-full">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.8334 6.83317H6.83341V11.8332H5.16675V6.83317H0.166748V5.1665H5.16675V0.166504H6.83341V5.1665H11.8334V6.83317Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <h2 className="m-0 p-0">$1,0000.00</h2>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="px-4 pb-4">
                <h2 className="m-0 p-0">Product Name</h2>
                <h3 className="m-0 p-0 text-gray-400">Product Description</h3>
            </div>
            <div className="px-4 pb-4">
                <h3 className="m-0 p-0 text-gray-300">Unis Item: <span className="text-gray-800">00-00-000000</span></h3>
            </div>
        </div>
           
    )

        let ecommerceThreeCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + ecommerceThreeState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + ecommerceThreeState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + ecommerceThreeState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            ecommerceThreeComp={ecommerceThreeComp} 
            ecommerceThreeCompString={ecommerceThreeCompString}
            showColor={ecommerceThreeState.showColor} 
            selectedColor={ecommerceThreeState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}