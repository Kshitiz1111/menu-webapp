import React from "react";
import { CustomIngredient } from "./CustomIngredient";

const Ingredient = ({selectedDish,clickHandler,cusIngHandler,removeIngs,extraIngs})=>{
    
    // console.log(removeIngs);
    // console.log(extraIngs);

    return(

        <div className="absolute inset-x-0 top-28 rounded-xl p-5 m-6 bg-gray-100">
            <span className="absolute left-5 p-2 rounded-full bg-gray-300" onClick={()=>(clickHandler(selectedDish,false,false))}>back</span>
            <span className="absolute right-5 font-bold ">{selectedDish.name}</span>
            <div className="mt-16">
                <p><strong>Base Ingredient</strong></p>
                <div className="flex flex-wrap">
                    {
                        selectedDish.baseIngredient.map((ingredient)=>(
                            <span className="px-2 py-1 m-1 rounded-full bg-gray-400">{ingredient}</span>
                        ))
                    }
                </div>

                <p><strong>Customizable Ingredient</strong></p>
                <p>you can customized below items according to you preference</p>
                <div className="p-2">
                   <ul>
                        {
                            selectedDish.customIngredient.map((ingredient,index)=>(
                                <li className="flex my-2" key={index}>
                                    <p className="font-semibold">{ingredient.name}</p>
                                    <div className="px-2">
                                        <span onClick={()=>(cusIngHandler(ingredient,'remove'))} className="px-3 pb-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 " >remove</span> - 
                                        <span onClick={()=>(cusIngHandler(ingredient,'extra'))} className="px-3 pb-1 ml-2  rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300" >extra</span>
                                    </div>
                                </li>
                            ))
                           
                        }
                    </ul>
                </div>
                
                <CustomIngredient removeIngs={removeIngs} extraIngs={extraIngs}></CustomIngredient>
                <div>
                    <div>
                        <span className="text-xs">proceed to</span>
                        <div className="w-32 font-bold text-xl text-center p-3 rounded-xl bg-gray-400">Order</div>
                    </div>
                </div>
            </div>
        </div>  

    )
     
}

export{Ingredient};