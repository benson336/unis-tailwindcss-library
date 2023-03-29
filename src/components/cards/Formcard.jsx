import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function Formcard(){
    const [formcardState, setFormcardState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setFormcardState({
            ...formcardState,
            showColor:!formcardState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setFormcardState({
            ...formcardState,
            showColor:!formcardState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setFormcardState({
            ...formcardState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let formcardComp = (
            
        <div className="rounded-lg bg-gray-50" style={{"width":"696px", "height":"auto"}}>
            <div className="px-5 py-4 flex justify-start items-center rounded-t-lg">
                    <h2 className={"p-0 m-0 font-bold leading-normal " + formcardState.selectedFont}>Form card title</h2>
            </div>
            <div className="w-full px-5 pb-4 flex justify-center items-center rounded-lg">
                <div className="w-1/4">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
            </div>
            <div className="w-full px-5 pb-4 flex justify-center items-center rounded-lg">
                <div className="w-1/4">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
            </div>
            <div className="w-full px-5 pb-4 flex justify-center items-center rounded-lg">
                <div className="w-1/4">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-11 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
            </div>
        </div>
           
    )

        let formcardCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + formcardState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + formcardState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + formcardState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
            
    return(
        <>
            <PreviewWindow 
            formcardComp={formcardComp} 
            formcardCompString={formcardCompString}
            showColor={formcardState.showColor} 
            selectedColor={formcardState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}