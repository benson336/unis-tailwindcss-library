import React, { Component, useState } from 'react' 
import PreviewWindow from './PreviewWindow'

export default function Sample(){
    const [state, setState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
    });

    const toggleColor = (e) => {
        e.preventDefault();
        setStackedState({
            ...state,
            showColor:!state.showColor,
        })
    }

     const changeColor = (e) => {
        e.preventDefault();
        setStackedState({
            ...state,
            showColor:!state.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setStackedState({
            ...state,
            selectedFont: e.target.value,
        })
    }

   let sampleComponent = (
        <div>
            
        </div>
    )

    return(
        <>
        <PreviewWindow sampleComponent="sampleComponent"/>
        </>
    )
}