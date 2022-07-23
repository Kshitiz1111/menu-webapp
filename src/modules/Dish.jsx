import React from "react";
import dishImg from "../assets/dish.PNG"
const Dish = ({dishes,maxSize})=>{

    return(
        <>
        <h3 className='underline font-bold pl-4'>Your Previous Choice</h3> 
        <div className='flex flex-wrap justify-evenly p-4'>
            {

            dishes.slice(0,maxSize).map((item)=>(
                <div className="relative m-1 p-3" key={item.id}>
                    <span className="absolute -top-2 -left-1 text-xs bg-gray-300 pl-1">Rs: {item.price}</span>
                    <img src={dishImg} className='w-20 rounded-full' alt="" />
                    <h3 className="text-center">{item.name}</h3>
                </div>
            ))
            
            }
        </div>
        </>
    )
}
export{Dish};