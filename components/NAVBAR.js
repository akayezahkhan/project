import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';
import Image from "next/image"
import { useState } from 'react';


export default function MyNavbar(){
    return(  
<div className="h-16 sticky top-0 z-20 min-w-[750px] max-w-full
items-center align-top grid grid-cols-3
bg-white drop-shadow-lg">
        <div className="flex-grow-0 justify-stretch mx-1 h-8 bg-contain bg-no-repeat"
        style={{ backgroundImage: `url('/images/logo.png')`}}
        >
        </div>


        <div className="flex items-center rounded-full bg-white hover:drop-shadow-lg 
        border-2 border-gray-200 
        my-1 p-2">
            <input  className="flex-grow bg-white text-gray-500 focus:outline-none"
            type = "text" 
            placeholder = "    Start your search" 
            />
            <div className="rounded-full bg-contain h-6 w-6"
            style={{ backgroundImage: `url('/images/search.png')`}}>
            </div>
        </div>

        <div className="flex justify-end items-center mx-1 p-1">
            <div className="h-8 flex items-center rounded-full hover:bg-gray-200 hover:cursor-pointer py-3 px-1 mx-2 text-xs">
                Become a Host
            </div>

            <div className="h-8 w-8 mr-2 rounded-full hover:bg-gray-200 hover:cursor-pointer border-gray-200">
                <div className="m-1 rounded-full bg-cover h-6 w-6"
                style={{ backgroundImage: `url()`}}>
                </div>
            </div>
        
            <div className="h-8 w-16 flex justify-evenly items-center rounded-full bg-white hover:drop-shadow-lg hover:cursor-pointer border-2 border-gray-200">
                <div className="rounded-full px-1 bg-contain h-6 w-6"
                style={{ backgroundImage: `url()`}}>
                </div>
                <div className="rounded-full px-1 bg-contain h-6 w-6"
                style={{ backgroundImage: `url()`}}>
                </div>
            </div>
        </div>
    </div>  

)
}