import React from "react";
import { CustomIngredient } from "./DishDetail/CustomIngredient";

const Orders = ({removeIngs, extraIngs, orders})=>{

    return (
        orders.map((item)=>(
            <div className="bg-gray-100 p-3 m-2 rounded-xl" key={item.id}>
                <div className="flex flex-wrap justify-between">
                    <p className="break-all"><strong>{item.name}</strong></p>
                    <div>
                        <span className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300">delete</span>
                        <span className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 ml-5">edit</span>
                    </div>
                </div>
                <div className="px-3">
                    <span className="">quantity: {item.quantity}</span>
                    <CustomIngredient removeIngs={item.removeIngs} extraIngs={item.extraIngs}></CustomIngredient>
                </div>
                <span><strong>price: </strong>{item.price}</span>
            </div>
        ))
        
    )
}

export{Orders};