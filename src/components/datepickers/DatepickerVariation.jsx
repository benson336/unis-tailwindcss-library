import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function DatepickerVariation(){
    const [datepickerVariationState, setDatepickerVariation] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setDatepickerVariation({
            ...datepickerVariationState,
            showColor:!datepickerVariationState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setDatepickerVariation({
            ...datepickerVariationState,
            showColor:!datepickerVariationState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setDatepickerVariation({
            ...datepickerVariationState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let datepickerVariationComp = (
            
      <div style={{"paddingBottom":"250px"}}>

        <div><h3 className="p-0 m-0">Date</h3></div>
        <label className="relative flex items-center items-center">
            <div className="absolute right-2">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 7.25H4.75V8.75H3.25V7.25ZM13.75 3.5V14C13.75 14.825 13.075 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14L0.2575 3.5C0.2575 2.675 0.9175 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C13.075 2 13.75 2.675 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 8.75H10.75V7.25H9.25V8.75ZM6.25 8.75H7.75V7.25H6.25V8.75Z" fill="#88898B"/>
                </svg>
            </div>
            
            <input className="h-8 border border-gray-200 rounded-lg" value="MM/DD/YY"></input>

            
            <div className="absolute px-4 py-4 top-10 w-60 h-60 bg-gray-50 rounded-lg">
                <div className="flex justify-around items-center pb-4">
                    <div>
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70687 0.29291L-0.000234311 7.00016L6.70688 13.7071L8.12108 12.2929L2.82819 7.00012L8.12109 1.70711L6.70687 0.29291Z" fill="#323232"/>
                        </svg>
                    </div>
                    <div>Month 2023</div>
                    <div>
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.7072 0.29291L8.4143 7.00016L1.70718 13.7071L0.292984 12.2929L5.58587 7.00012L0.292968 1.70711L1.7072 0.29291Z" fill="#323232"/>
                        </svg>
                    </div>
                </div>

                <div className="flex justify-around items-center pb-4">
                    <div className="text-xs">S</div>
                    <div className="text-xs">M</div>
                    <div className="text-xs">T</div>
                    <div className="text-xs">W</div>
                    <div className="text-xs">T</div>
                    <div className="text-xs">F</div>
                    <div className="text-xs">S</div>
                </div>

                <div className="flex justify-around items-center">
                    <div className="text-xs flex justify-center">29</div>
                    <div className="text-xs flex justify-center">30</div>
                    <div className="text-xs flex justify-center">31</div>
                    <div className="text-xs flex justify-center">1</div>
                    <div className="text-xs flex justify-center">2</div>
                    <div className="text-xs flex justify-center">3</div>
                    <div className="text-xs flex justify-center">4</div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="text-xs flex justify-center">5</div>
                    <div className="text-xs flex justify-center">6</div>
                    <div className="text-xs flex justify-center">7</div>
                    <div className="text-xs flex justify-center">8</div>
                    <div className="text-xs">9</div>
                    <div className="text-xs">10</div>
                    <div className="text-xs">11</div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="text-xs">12</div>
                    <div className="text-xs">13</div>
                    <div className="text-xs">14</div>
                    <div className="text-xs">15</div>
                    <div className="text-xs">16</div>
                    <div className="text-xs">17</div>
                    <div className="text-xs">18</div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="text-xs">19</div>
                    <div className="text-xs">20</div>
                    <div className="text-xs">21</div>
                    <div className="text-xs">22</div>
                    <div className="text-xs">23</div>
                    <div className="text-xs">24</div>
                    <div className="text-xs">25</div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="text-xs">26</div>
                    <div className="text-xs">27</div>
                    <div className="text-xs">28</div>
                    <div className="text-xs">29</div>
                    <div className="text-xs">30</div>
                    <div className="text-xs">31</div>
                    <div className="text-xs">1</div>
                </div>

            </div>
       

        </label>

        
        
                    
       
      </div>
           
    )

        let datepickerVariationCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + datepickerVariationState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + datepickerVariationState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + datepickerVariationState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
    return(
        <>
            <PreviewWindow 
            datepickerVariationComp={datepickerVariationComp} 
            datepickerVariationCompString={datepickerVariationCompString}
            showColor={datepickerVariationState.showColor} 
            selectedColor={datepickerVariationState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}