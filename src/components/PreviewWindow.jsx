import React, { Component, useState } from 'react' 

export default function PreviewWindow(){

    const [previewState, setPreviewState] = useState({
       showCode:false,
       showColor: false,
       selectedColor: "bg-red-200",
    });


    const toggleShow = (e) => {
        e.preventDefault();
        setPreviewState({
            ...previewState,
            showCode:!previewState.showCode,
        })
    }

    const toggleColor = (e) => {
        e.preventDefault();
        setPreviewState({
            ...previewState,
            selectedColor: "tttttttttt",
            showColor:!previewState.showColor,
        })
    }

    const changeColor = (e) => {
        console.log(e.target.classList[3]);
        setPreviewState({
            ...previewState,
            selectedColor: "s",
            showColor:!previewState.showColor,
        })
    }

    {/*const changeColor = (e) => {
        console.log(e.target.value);
        setPreviewState({
            ...previewState,
            selectedColor: e.target.value,
        })
    }*/}

    {/*const changeColor = (name, e) => {
        setPreviewState({
            ...previewState,
            [name]: e.target.value,
        })
    }*/}



   console.log(previewState)


    return(

        
        <div class="bg-gray-50 rounded-lg justify-around items-top relative" style={{"width":"100%", "height":"850px" ,"border":"1px solid rgb(229 231 235)"}}>

            <div class="flex justify-around items-center text-center rounded-lg" style={{"width":"100%", "height":"10%"}}>
                <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} class="flex justify-center items-center font-medium rounded-lg bg-white 
                hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1" onClick={toggleShow}>
                    <div class="text-xs">&lt;/&gt; Full code</div>
                </div>
                <div class="flex">
                    <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} class="flex justify-center items-center font-medium rounded-lg bg-white 
                    hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                        <div class="text-xs">Desktop</div>
                    </div>
                    <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} class="flex justify-center items-center font-medium rounded-lg bg-white 
                    hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                        <div class="text-xs">Tablet</div>
                    </div>
                    <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} class="flex justify-center items-center font-medium rounded-lg bg-white 
                    hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                        <div class="text-xs">Mobile</div>
                    </div>
                    {/*<input onChange={changeColor}></input>*/}
                    {/*<input onChange={(e) => changeColor("test", e)}></input>*/}
                </div>
                <div style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} class="flex justify-center items-center font-medium rounded-lg bg-white 
                hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                    <div class="text-xs">
                    <select>
                        <option value="gray">Helvetica Neue</option>
                        <option value="blue">Lato</option>
                    </select>
                    </div>
                </div>

                <div onClick={toggleColor} style={{"border":"1px solid rgb(229 231 235)", "cursor":"pointer"}} class="relative z-30 flex justify-center items-center font-medium rounded-lg bg-white hover:bg-gray-100 text-gray-900 hover:text-blue-700 px-2 py-1">
                    <div class="px-3 py-2 rounded" style={{"backgroundColor":"#1F8BEA"}}></div>
                    <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                    
                    {previewState.showColor ? 
                    <div class="bg-white absolute right-0 top-0 mt-10 h-72 w-80 rounded-lg" style={{"border":"1px solid rgb(229 231 235)"}}>
                        <div class="mt-3">Choose primary color:</div>
                        <div class="flex justify-evenly items-center flex-wrap mt-2">
                            
                            <div class="px-2 py-0.2 rounded bg-blue-50" onClick={changeColor} value="bg-blue-100">50</div>
                            <div class="px-2 py-0.2 rounded bg-blue-100" onClick={changeColor} value="bg-blue-100">100</div>
                            <div class="px-2 py-0.2 rounded bg-blue-200" onClick={changeColor} value="bg-blue-200">200</div>
                            <div class="px-2 py-0.2 rounded bg-blue-300" onClick={changeColor} value="bg-blue-300">300</div>
                            <div class="px-2 py-0.2 rounded bg-blue-400" onClick={changeColor} value="bg-blue-400">400</div>
                            <div class="px-2 py-0.2 rounded bg-blue-500" onClick={changeColor} value="bg-blue-500">500</div>
                        </div>
                        <div class="flex justify-evenly items-center flex-wrap mt-2 mb-2">
                            <div class="px-2 py-0.2 rounded bg-sky-50">50</div>
                            <div class="px-2 py-0.2 rounded bg-sky-100">100</div>
                            <div class="px-2 py-0.2 rounded bg-sky-200">200</div>
                            <div class="px-2 py-0.2 rounded bg-sky-300">300</div>
                            <div class="px-2 py-0.2 rounded bg-sky-400">400</div>
                            <div class="px-2 py-0.2 rounded bg-sky-500">500</div>
                        </div>
                        <div class="flex justify-evenly items-center flex-wrap mt-2">
                            <div class="px-2 py-0.2 rounded bg-teal-50">50</div>
                            <div class="px-2 py-0.2 rounded bg-teal-100">100</div>
                            <div class="px-2 py-0.2 rounded bg-teal-200">200</div>
                            <div class="px-2 py-0.2 rounded bg-teal-300">300</div>
                            <div class="px-2 py-0.2 rounded bg-teal-400">400</div>
                            <div class="px-2 py-0.2 rounded bg-teal-500">500</div>
                        </div>
                        <div class="flex justify-evenly items-center flex-wrap mt-2">
                            <div class="px-2 py-0.2 rounded bg-gray-50">50</div>
                            <div class="px-2 py-0.2 rounded bg-gray-100">100</div>
                            <div class="px-2 py-0.2 rounded bg-gray-200">200</div>
                            <div class="px-2 py-0.2 rounded bg-gray-300">300</div>
                            <div class="px-2 py-0.2 rounded bg-gray-400">400</div>
                            <div class="px-2 py-0.2 rounded bg-gray-500">500</div>
                        </div>
                        <div class="flex justify-evenly items-center flex-wrap mt-2">
                            <div class="px-2 py-0.2 rounded bg-night-50">50</div>
                            <div class="px-2 py-0.2 rounded bg-night-100">100</div>
                            <div class="px-2 py-0.2 rounded bg-night-200">200</div>
                            <div class="px-2 py-0.2 rounded bg-night-300">300</div>
                            <div class="px-2 py-0.2 rounded bg-night-400">400</div>
                            <div class="px-2 py-0.2 rounded bg-night-500">500</div>
                        </div>
                        <div class="flex justify-evenly items-center flex-wrap mt-2">
                            <div class="px-2 py-0.2 rounded bg-red-50">50</div>
                            <div class="px-2 py-0.2 rounded bg-red-100">100</div>
                            <div class="px-2 py-0.2 rounded bg-red-200">200</div>
                            <div class="px-2 py-0.2 rounded bg-red-300">300</div>
                            <div class="px-2 py-0.2 rounded bg-red-400">400</div>
                            <div class="px-2 py-0.2 rounded bg-red-500">500</div>
                        </div>
                    </div> : null}
                </div>
            </div>

            <div class="flex justify-center bg-white items-center" style={{"width":"100%", "height":"45%", "borderTop":"1px solid rgb(229 231 235)"}}>
     
                {/*<div class="bg-blue-600 rounded py-2 px-3 text-white font-medium">Confirm</div>*/}
                <div className={previewState.selectedColor + " rounded py-2 px-3 text-white font-medium"}>Confirm</div>
                <div class="ml-5">
                    
                    <div class="relative mt-1 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" />
                        <div class="absolute inset-y-0 right-0 flex items-center">
                            <label for="currency" class="sr-only">Currency</label>
                            <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                </div>

                

            </div>
                    
            {previewState.showCode ? 
            <div class="flex justify-center items-center absolute bg-gray-800" style={{"width":"100%", "height":"88%", "borderTop":"1px solid rgb(229 231 235)", "top":"10%"}}>
                    <div class="text-xs text-green-400 ml-5 pt-5">
                        &lt;div&gt;
                        &lt;label for=&quot;price&quot; class=&quot;block text-sm font-medium text-gray-700&quot;&gt;Price&lt;/label&gt;
                        &lt;div class=&quot;relative mt-1 rounded-md shadow-sm&quot;&gt;
                            &lt;div class=&quot;pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3&quot;&gt;
                                &lt;span class=&quot;text-gray-500 sm:text-sm&quot;&gt;$&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;input type=&quot;text&quot; name=&quot;price&quot; id=&quot;price&quot; class=&quot;block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm&quot; placeholder=&quot;0.00&quot; /&gt;
                            &lt;div class=&quot;absolute inset-y-0 right-0 flex items-center&quot;&gt;
                                &lt;label for=&quot;currency&quot; class=&quot;sr-only&quot;&gt;Currency&lt;/label&gt;
                                &lt;select id=&quot;currency&quot; name=&quot;currency&quot; class=&quot;h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm&quot;&gt;
                                    &lt;option&gt;USD&lt;/option&gt;
                                    &lt;option&gt;CAD&lt;/option&gt;
                                    &lt;option&gt;EUR&lt;/option&gt;
                                &lt;/select&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                         &lt;/div&gt;</div>
            </div> : 
            <div class="justify-center items-center bg-gray-800" style={{"width":"100%", "height":"45%", "borderTop":"1px solid rgb(229 231 235)"}}>

                <div class="flex justify-between items-center bg-gray-900" style={{"width":"100%", "height":"15%"}}>

                    <div class="flex justify-center items-center">
                        <div class="text-xs text-green-400 ml-5">HTML</div>
                        <div class="text-xs text-white ml-5">tailwind.config.js</div>
                    </div>
                    <div class="flex justify-center items-center bg-gray-800 rounded px-2 py-1 mr-5" style={{"border":"1px solid white"}}>
                        <div class="text-xs text-white">Copy code</div>
                    </div>


                </div>
                <div class="bg-gray-800" style={{"width":"100%", "height":"85%"}}>
                    <div class="text-xs text-green-400 ml-5 pt-5">
                        &lt;div&gt;
                        &lt;label for=&quot;price&quot; class=&quot;block text-sm font-medium text-gray-700&quot;&gt;Price&lt;/label&gt;
                        &lt;div class=&quot;relative mt-1 rounded-md shadow-sm&quot;&gt;
                            &lt;div class=&quot;pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3&quot;&gt;
                                &lt;span class=&quot;text-gray-500 sm:text-sm&quot;&gt;$&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;input type=&quot;text&quot; name=&quot;price&quot; id=&quot;price&quot; class=&quot;block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm&quot; placeholder=&quot;0.00&quot; /&gt;
                            &lt;div class=&quot;absolute inset-y-0 right-0 flex items-center&quot;&gt;
                                &lt;label for=&quot;currency&quot; class=&quot;sr-only&quot;&gt;Currency&lt;/label&gt;
                                &lt;select id=&quot;currency&quot; name=&quot;currency&quot; class=&quot;h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm&quot;&gt;
                                    &lt;option&gt;USD&lt;/option&gt;
                                    &lt;option&gt;CAD&lt;/option&gt;
                                    &lt;option&gt;EUR&lt;/option&gt;
                                &lt;/select&gt;
                            &lt;/div&gt;
                            &lt;/div&gt;
                         &lt;/div&gt;
                    </div>
                </div>
                
            </div>
            }
            



        </div>
    )
}