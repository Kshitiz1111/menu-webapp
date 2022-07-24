import React from "react";
import { CustomIngredient } from "./CustomIngredient";

const Ingredient = ({item,selectedDish})=>{
    
    return(

        <div className="absolute inset-x-0 top-28 rounded-xl p-5 m-6 bg-gray-100 ">
            <span className="absolute left-5 p-2 rounded-full bg-gray-300">back</span>
            <span className="absolute right-5 p-2 rounded-full bg-gray-300">name</span>
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
                   
                        {
                            selectedDish.customIngredient.map((ingredient)=>(
                                <li className="flex list-disc">
                                    <p>{ingredient}</p>
                                    <div>
                                        <span>-</span> -
                                        <span>+</span>
                                    </div>
                                </li>
                            ))
                           
                        }

                </div>
                {/* <CustomIngredient></CustomIngredient> */}
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