import React, { Component, useState, useEffect } from 'react' 


export default function PreviewWindow(props){

    const [previewState, setPreviewState] = useState({
       //filledButtonFlag:"",
       showCode:false,
       //showColor: false,
       //selectedColor: "bg-red-200",
       //selectedFont:"font-helvetica"
    });

    
    /*useEffect(() => {
        setPreviewState({
        ...previewState,
        filledButtonFlag:props.filledButtonFlag,
        })    
        },[]);*/


    const toggleShow = (e) => {
        e.preventDefault();
        setPreviewState({
            ...previewState,
            showCode:!previewState.showCode,
        })
    }

    /*const toggleColor = (e) => {
        setPreviewState({
            ...previewState,
            showColor:!previewState.showColor,
        })
       
    }*/

    /*const changeColor = (e) => {
        e.preventDefault();
        
        setPreviewState({
            ...previewState,
            showColor:!previewState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setPreviewState({
            ...previewState,
            selectedFont: e.target.value,
        })
    }*/

    console.log(previewState)


    const htmlString = "<div>I am html string</div>";



    return(

        <div className="bg-gray-50 rounded-lg justify-around items-top relative" style={{"border":"1px solid rgb(229 231 235)"}}>

            <div className="py-8 flex justify-around items-center text-center rounded-lg">

                <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} className="px-2 py-1 flex justify-center items-center font-medium rounded-lg bg-white 
                hover:bg-gray-100 text-gray-900 hover:text-blue-700">
                    <svg className="ml-2 mr-2" width={13} height={15} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path
                            d="M9.33333 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667H1.33333V1.33333H9.33333V0ZM11.3333 2.66667H4C3.26667 2.66667 2.66667 3.26667 2.66667 4V13.3333C2.66667 14.0667 3.26667 14.6667 4 14.6667H11.3333C12.0667 14.6667 12.6667 14.0667 12.6667 13.3333V4C12.6667 3.26667 12.0667 2.66667 11.3333 2.66667ZM11.3333 13.3333H4V4H11.3333V13.3333Z"
                            fill="#88898B"
                        />
                        </svg>
                    <div className="text-xs">Full code</div>
                </div>

                <div className="flex">
                    <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} className="px-2 py-2 flex justify-center items-center font-medium rounded-lg bg-white 
                    hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                        <div className="text-xs">
                            <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path
                                    d="M13.9998 0.333252H1.99984C1.2665 0.333252 0.666504 0.933252 0.666504 1.66659V9.66659C0.666504 10.3999 1.2665 10.9999 1.99984 10.9999H6.6665L5.33317 12.9999V13.6666H10.6665V12.9999L9.33317 10.9999H13.9998C14.7332 10.9999 15.3332 10.3999 15.3332 9.66659V1.66659C15.3332 0.933252 14.7332 0.333252 13.9998 0.333252ZM13.9998 8.33325H1.99984V1.66659H13.9998V8.33325Z"
                                    fill="#777879"
                                />
                            </svg>
                        </div>
                    </div>
                    <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} className="ml-4 px-2 py-2 flex justify-center items-center font-medium rounded-lg bg-white 
                    hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                        <div className="text-xs">
                            <svg width={13} height={16} viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path
                                    d="M11.3335 0H2.00016C1.08016 0 0.333496 0.746667 0.333496 1.66667V14.3333C0.333496 15.2533 1.08016 16 2.00016 16H11.3335C12.2535 16 13.0002 15.2533 13.0002 14.3333V1.66667C13.0002 0.746667 12.2535 0 11.3335 0ZM6.66683 15.3333C6.1135 15.3333 5.66683 14.8867 5.66683 14.3333C5.66683 13.78 6.1135 13.3333 6.66683 13.3333C7.22016 13.3333 7.66683 13.78 7.66683 14.3333C7.66683 14.8867 7.22016 15.3333 6.66683 15.3333ZM11.6668 12.6667H1.66683V2H11.6668V12.6667Z"
                                    fill="#777879"
                                />
                            </svg>
                        </div>
                    </div>
                    <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} className="ml-4 px-2 py-2 flex justify-center items-center font-medium rounded-lg bg-white 
                    hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                        <div className="text-xs">
                            <svg width={9} height={15} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path
                                    d="M7 0H1.66667C0.746667 0 0 0.746667 0 1.66667V13C0 13.92 0.746667 14.6667 1.66667 14.6667H7C7.92 14.6667 8.66667 13.92 8.66667 13V1.66667C8.66667 0.746667 7.92 0 7 0ZM4.33333 14C3.78 14 3.33333 13.5533 3.33333 13C3.33333 12.4467 3.78 12 4.33333 12C4.88667 12 5.33333 12.4467 5.33333 13C5.33333 13.5533 4.88667 14 4.33333 14ZM7.33333 11.3333H1.33333V2H7.33333V11.3333Z"
                                    fill="#777879"
                                />
                            </svg>
                        </div>
                    </div>
                    {/*<input onChange={props.changeColor}></input>*/}
                    {/*<input onChange={(e) => props.changeColor("test", e)}></input>*/}
                </div>
                
                <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} className="flex justify-center items-center font-medium rounded-lg bg-white 
                hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                    <div className="text-xs">
                    <select onChange={props.changeFont}>
                        <option value="font-helvetica">Helvetica Neue</option>
                        <option value="font-lato">Lato</option>
                    </select>
                    </div>
                </div>

                <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} className="px-2 py-2 relative z-30 flex justify-center items-center font-medium rounded-lg bg-white hover:bg-gray-100 text-gray-900 hover:text-blue-700">
                
                    <svg className="ml-2 mr-2" width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M1.6667 12.0667L2.53336 12.4667V6.4667L0.933365 10.3334C0.666698 11.0667 1.00003 11.8 1.6667 12.0667ZM10.1334 2.20003L13.4667 10.2L8.60003 12.2L5.2667 4.2667V4.20003L10.1334 2.20003ZM10.2 0.866699C10 0.866699 9.8667 0.866699 9.6667 0.933366L4.73336 3.00003C4.2667 3.20003 3.93336 3.6667 3.93336 4.20003C3.93336 4.33337 3.93336 4.53337 4.00003 4.73337L7.33336 12.6667C7.53336 13.2 8.00003 13.4667 8.53336 13.4667C8.73336 13.4667 8.8667 13.4667 9.0667 13.4L14 11.3334C14.6667 11.0667 15 10.2667 14.7334 9.60003L11.4 1.6667C11.2 1.13337 10.6667 0.866699 10.2 0.866699ZM7.00003 5.60003C6.60003 5.60003 6.33336 5.33337 6.33336 4.93337C6.33336 4.53337 6.60003 4.2667 7.00003 4.2667C7.40003 4.2667 7.6667 4.60003 7.6667 4.93337C7.6667 5.2667 7.40003 5.60003 7.00003 5.60003ZM3.93336 12.2C3.93336 12.9334 4.53336 13.5334 5.2667 13.5334H6.20003L3.93336 8.00003V12.2Z" fill="#B3B4B5"/></svg>
                    <div className={"px-3 py-2 rounded " + props.selectedColor} onClick={props.toggleColor}></div>
                
                    {props.showColor ? 
                    <div className="bg-white absolute right-0 top-0 mt-10 h-72 w-80 rounded-lg" style={{"border":"1px solid rgb(229 231 235)"}}>
                        <div className="mt-3">Choose primary color:</div>
                        <div className="flex justify-evenly items-center flex-wrap mt-2">
                            <div className="px-2 py-0.2 rounded bg-blue-50" onClick={props.changeColor} value="bg-blue-100">50</div>
                            <div className="px-2 py-0.2 rounded bg-blue-100" onClick={props.changeColor} value="bg-blue-100">100</div>
                            <div className="px-2 py-0.2 rounded bg-blue-200" onClick={props.changeColor} value="bg-blue-200">200</div>
                            <div className="px-2 py-0.2 rounded bg-blue-300" onClick={props.changeColor} value="bg-blue-300">300</div>
                            <div className="px-2 py-0.2 rounded bg-blue-400" onClick={props.changeColor} value="bg-blue-400">400</div>
                            <div className="px-2 py-0.2 rounded bg-blue-500" onClick={props.changeColor} value="bg-blue-500">500</div>
                        </div>
                        <div className="flex justify-evenly items-center flex-wrap mt-2 mb-2">
                            <div className="px-2 py-0.2 rounded bg-sky-50" onClick={props.changeColor} value="bg-sky-100">50</div>
                            <div className="px-2 py-0.2 rounded bg-sky-100" onClick={props.changeColor} value="bg-sky-100">100</div>
                            <div className="px-2 py-0.2 rounded bg-sky-200" onClick={props.changeColor} value="bg-sky-100">200</div>
                            <div className="px-2 py-0.2 rounded bg-sky-300" onClick={props.changeColor} value="bg-sky-100">300</div>
                            <div className="px-2 py-0.2 rounded bg-sky-400" onClick={props.changeColor} value="bg-sky-100">400</div>
                            <div className="px-2 py-0.2 rounded bg-sky-500" onClick={props.changeColor} value="bg-skye-100">500</div>
                        </div>
                        <div className="flex justify-evenly items-center flex-wrap mt-2">
                            <div className="px-2 py-0.2 rounded bg-teal-50" onClick={props.changeColor} value="bg-teal-100">50</div>
                            <div className="px-2 py-0.2 rounded bg-teal-100" onClick={props.changeColor} value="bg-teal-100">100</div>
                            <div className="px-2 py-0.2 rounded bg-teal-200" onClick={props.changeColor} value="bg-teal-100">200</div>
                            <div className="px-2 py-0.2 rounded bg-teal-300" onClick={props.changeColor} value="bg-teal-100">300</div>
                            <div className="px-2 py-0.2 rounded bg-teal-400" onClick={props.changeColor} value="bg-teal-100">400</div>
                            <div className="px-2 py-0.2 rounded bg-teal-500" onClick={props.changeColor} value="bg-teal-100">500</div>
                        </div>
                        <div className="flex justify-evenly items-center flex-wrap mt-2">
                            <div className="px-2 py-0.2 rounded bg-gray-50" onClick={props.changeColor} value="bg-gray-100">50</div>
                            <div className="px-2 py-0.2 rounded bg-gray-100" onClick={props.changeColor} value="bg-gray-100">100</div>
                            <div className="px-2 py-0.2 rounded bg-gray-200" onClick={props.changeColor} value="bg-gray-100">200</div>
                            <div className="px-2 py-0.2 rounded bg-gray-300" onClick={props.changeColor} value="bg-gray-100">300</div>
                            <div className="px-2 py-0.2 rounded bg-gray-400" onClick={props.changeColor} value="bg-gray-100">400</div>
                            <div className="px-2 py-0.2 rounded bg-gray-500" onClick={props.changeColor} value="bg-gray-100">500</div>
                        </div>
                        <div className="flex justify-evenly items-center flex-wrap mt-2">
                            <div className="px-2 py-0.2 rounded bg-night-50" onClick={props.changeColor} value="bg-night-100">50</div>
                            <div className="px-2 py-0.2 rounded bg-night-100" onClick={props.changeColor} value="bg-night-100">100</div>
                            <div className="px-2 py-0.2 rounded bg-night-200" onClick={props.changeColor} value="bg-night-100">200</div>
                            <div className="px-2 py-0.2 rounded bg-night-300" onClick={props.changeColor} value="bg-night-100">300</div>
                            <div className="px-2 py-0.2 rounded bg-night-400" onClick={props.changeColor} value="bg-night-100">400</div>
                            <div className="px-2 py-0.2 rounded bg-night-500" onClick={props.changeColor} value="bg-night-100">500</div>
                        </div>
                        <div className="flex justify-evenly items-center flex-wrap mt-2"> 
                            <div className="px-2 py-0.2 rounded bg-red-50" onClick={props.changeColor} value="bg-red-100">50</div>
                            <div className="px-2 py-0.2 rounded bg-red-100" onClick={props.changeColor} value="bg-red-100">100</div>
                            <div className="px-2 py-0.2 rounded bg-red-200" onClick={props.changeColor} value="bg-red-100">200</div>
                            <div className="px-2 py-0.2 rounded bg-red-300" onClick={props.changeColor} value="bg-red-100">300</div>
                            <div className="px-2 py-0.2 rounded bg-red-400" onClick={props.changeColor} value="bg-red-100">400</div>
                            <div className="px-2 py-0.2 rounded bg-red-500" onClick={props.changeColor} value="bg-red-100">500</div>
                        </div>
                    </div> : null}
                </div>
            </div>


                    <div className="py-20 flex justify-center items-center bg-white items-center">

                        {/*Button - FilledButton*/}
                        <div>{props.filledButtonComp}</div>

                        {/*Button - OutlinedButton*/}
                        <div>{props.outlinedButtonComp}</div>

                        {/*Button - TextButton*/}
                        <div>{props.textButtonComp}</div>

                        {/*Button - ElevatedButton*/}
                        <div>{props.elevatedButtonComp}</div>

                        {/*Button - TonalButton*/}
                        <div>{props.tonalButtonComp}</div>

                        {/*Button - UnderlinedButton*/}
                        <div>{props.underlinedButtonComp}</div>

                        {/*Button - ButtonSize*/}
                        <div>{props.buttonSizeComp}</div>

                        {/*Button - ButtonToggle*/}
                        <div>{props.buttonToggleComp}</div>

                        {/*Button - ButtonLink*/}
                        <div>{props.buttonLinkComp}</div>

                        {/*Button - ButtonTooltip*/}
                        <div>{props.buttonTooltipComp}</div>

                        {/*Button - ButtonFilter*/}
                        <div>{props.buttonFilterComp}</div>

                        {/*Button - ButtonFilterLarge*/}
                        <div>{props.buttonToggleLargeComp}</div>

                        {/*Button - Button Option*/}
                        <div>{props.buttonOptionComp}</div>

                        {/*Button - Button Logo*/}
                        <div>{props.buttonLogoComp}</div>

                        {/*Button - Button Radio*/}
                        <div>{props.buttonRadioComp}</div>
                        

                        {/*-------------------------------------*/}

                        {/*Card - Stacked*/}                        
                        <div>{props.stackedComp}</div>

                        {/*Card - Horizontal*/}                        
                        <div>{props.horizontalComp}</div>

                        {/*Card - Collapsible*/}                        
                        <div>{props.collapsibleComp}</div>

                        {/*Card - CollapsibleInput*/}                        
                        <div>{props.collapsibleInputComp}</div>

                        {/*Card - Kanban*/}                        
                        <div>{props.kanbanComp}</div>

                        {/*Card - Kanban List*/}                        
                        <div>{props.kanbanListComp}</div>

                        {/*Card - Ecommerce One*/}                        
                        <div>{props.ecommerceOneComp}</div>
                      
                        {/*Card - Ecommerce Two*/}                        
                        <div>{props.ecommerceTwoComp}</div>

                        {/*Card - Ecommerce Three*/}                        
                        <div>{props.ecommerceThreeComp}</div>

                        {/*Card - Ecommerce Four*/}                        
                        <div>{props.ecommerceFourComp}</div>

                        {/*Card - Ecommerce Five*/}                        
                        <div>{props.ecommerceFiveComp}</div>

                        {/*Card - Ecommerce Six*/}                        
                        <div>{props.ecommerceSixComp}</div>

                    </div>

                    

            {previewState.showCode ? 
            <div className="flex justify-center items-center absolute bg-gray-800" style={{"borderTop":"1px solid rgb(229 231 235)"}}>
                    <div className="text-xs text-green-400 ml-5">
                        {/*Button - FilledButton*/}
                        <div>{props.filledButtonCompString}</div>

                        {/*Button - OutlinedButton*/}
                        <div>{props.outlinedButtonCompString}</div>

                        {/*Button - TextButton*/}
                        <div>{props.textButtonCompString}</div>

                        {/*Button - ElevatedButton*/}
                        <div>{props.elevatedButtonCompString}</div>

                        {/*Button - TonalButton*/}
                        <div>{props.tonalButtonCompString}</div>

                        {/*Button - UnderlinedButton*/}
                        <div>{props.underlinedButtonCompString}</div>

                        {/*Button - ButtonSize*/}
                        <div>{props.buttonSizeCompString}</div>

                        {/*Button - ButtonToggle*/}
                        <div>{props.buttonToggleCompString}</div>

                        {/*Button - ButtonLink*/}
                        <div>{props.buttonLinkCompString}</div>

                        {/*Button - ButtonTooltip*/}
                        <div>{props.buttonTooltipCompString}</div>

                        {/*Button - ButtonFilter*/}
                        <div>{props.buttonFilterCompString}</div>

                        {/*Button - ButtonFilterLarge*/}
                        <div>{props.buttonToggleLargeCompString}</div>

                        {/*Button - Button Option*/}
                        <div>{props.buttonOptionCompString}</div>

                        {/*Button - Button Logo*/}
                        <div>{props.buttonLogoCompString}</div>

                        {/*Button - Button Radio*/}
                        <div>{props.buttonRadioCompString}</div>
                        

                        {/*-------------------------------------*/}

                        {/*Card - Stacked*/} 
                        <div>{props.stackedCompString}</div>

                        {/*Card - Horizontal*/}  
                        <div>{props.horizontalCompString}</div>

                        {/*Card - Collapsible*/}                        
                        <div>{props.collapsibleCompString}</div>

                        {/*Card - CollapsibleInput*/}                        
                        <div>{props.collapsibleInputCompString}</div>

                        {/*Card - Kanban*/}                        
                        <div>{props.kanbanCompString}</div>

                        {/*Card - Kanban List*/}                        
                        <div>{props.kanbanListCompString}</div>

                        {/*Card - Ecommerce One*/}                        
                        <div>{props.ecommerceOneCompString}</div>

                        {/*Card - Ecommerce Two*/}                        
                        <div>{props.ecommerceTwoCompString}</div>

                        {/*Card - Ecommerce Three*/}                        
                        <div>{props.ecommerceThreeCompString}</div>

                        {/*Card - Ecommerce Four*/}                        
                        <div>{props.ecommerceFourCompString}</div>

                        {/*Card - Ecommerce Five*/}                        
                        <div>{props.ecommerceFiveCompString}</div>

                        {/*Card - Ecommerce Six*/}                        
                        <div>{props.ecommerceSixCompString}</div>
                    </div>
            </div> : 
            <div className="justify-center items-center bg-gray-800 rounded-lg" style={{"borderTop":"1px solid rgb(229 231 235)"}}>
                <div className="py-5 flex justify-between items-center bg-gray-900">
                    <div className="flex justify-center items-center">
                        <div className="text-xs text-green-400 ml-5">HTML</div>
                        <div className="text-xs text-white ml-5">tailwind.config.js</div>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 rounded px-2 py-1 mr-5" style={{"border":"1px solid white"}}>
                        <div className="text-xs text-white">Copy code</div>
                    </div>
                </div>
                <div className="py-10 bg-gray-800 rounded-lg">
                    <div className="text-xs text-green-400 ml-5">
                        {/*Button - FilledButton*/}
                        <div>{props.filledButtonCompString}</div>

                        {/*Button - OutlinedButton*/}
                        <div>{props.outlinedButtonCompString}</div>

                        {/*Button - TextButton*/}
                        <div>{props.textButtonCompString}</div>

                        {/*Button - ElevatedButton*/}
                        <div>{props.elevatedButtonCompString}</div>

                        {/*Button - TonalButton*/}
                        <div>{props.tonalButtonCompString}</div>

                        {/*Button - UnderlinedButton*/}
                        <div>{props.underlinedButtonCompString}</div>

                        {/*Button - ButtonSize*/}
                        <div>{props.buttonSizeCompString}</div>

                        {/*Button - ButtonToggle*/}
                        <div>{props.buttonToggleCompString}</div>

                        {/*Button - ButtonLink*/}
                        <div>{props.buttonLinkCompString}</div>

                        {/*Button - ButtonTooltip*/}
                        <div>{props.buttonTooltipCompString}</div>

                        {/*Button - ButtonFilter*/}
                        <div>{props.buttonFilterCompString}</div>

                        {/*Button - ButtonFilterLarge*/}
                        <div>{props.buttonToggleLargeCompString}</div>

                        {/*Button - Button Option*/}
                        <div>{props.buttonOptionCompString}</div>

                        {/*Button - Button Logo*/}
                        <div>{props.buttonLogoCompString}</div>

                        {/*Button - Button Radio*/}
                        <div>{props.buttonRadioCompString}</div>

                        {/*-------------------------------------*/}

                        {/*Card - Stacked*/} 
                        <div>{props.stackedCompString}</div>

                        {/*Card - Horizontal*/}  
                        <div>{props.horizontalCompString}</div>

                        {/*Card - Collapsible*/}                        
                        <div>{props.collapsibleCompString}</div>

                        {/*Card - CollapsibleInput*/}                        
                        <div>{props.collapsibleInputCompString}</div>

                        {/*Card - Kanban*/}                        
                        <div>{props.kanbanCompString}</div>

                        {/*Card - Kanban List*/}                        
                        <div>{props.kanbanListCompString}</div>

                        {/*Card - Ecommerce One*/}                        
                        <div>{props.ecommerceOneCompString}</div>

                        {/*Card - Ecommerce Two*/}                        
                        <div>{props.ecommerceTwoCompString}</div>

                        {/*Card - Ecommerce Three*/}                        
                        <div>{props.ecommerceThreeCompString}</div>

                        {/*Card - Ecommerce Four*/}                        
                        <div>{props.ecommerceFourCompString}</div>

                        {/*Card - Ecommerce Five*/}                        
                        <div>{props.ecommerceFiveCompString}</div>

                        {/*Card - Ecommerce Six*/}                        
                        <div>{props.ecommerceSixCompString}</div>
                    </div>
                </div>
            </div>
            }
            
        </div>
    )
}