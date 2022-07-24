import React from "react";
import dishImg from "../assets/dish.PNG"



const Dish = ({dishes,maxSize,clickHandler})=>{

    return(
        <>
        <h3 className='font-bold pl-4'>Your Previous Choice</h3> 
        <div className='flex flex-wrap justify-evenly p-4'>
            {

            dishes.slice(0,maxSize).map((item)=>(
                <div className="relative m-1 p-3" key={item.id} onClick={()=>clickHandler(item,false,false)}>
                    <span className="absolute -top-2 -left-1 text-xs rounded-md bg-gray-300 px-1">Rs: {item.price}</span>
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