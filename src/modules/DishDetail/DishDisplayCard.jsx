import React from "react";
import dishImg from '../../assets/dish.PNG'

const DishDisplay = ({selectedDish,close,clickHandler})=>{ 
    return(
    <div className="absolute inset-x-0 top-28 rounded-xl p-5 m-6 bg-gray-100 ">
        <span className="absolute left-5 p-2 rounded-full bg-gray-300">Rs:{selectedDish.price}</span>
        <span className="absolute right-5 p-2 rounded-full bg-gray-300" onClick={close}>close</span>
        <img src={dishImg} className="w-3/4 rounded-full mx-auto  my-5" alt="" />
        <h2 className="text-center break-words text-xl mb-5">{selectedDish.name}</h2>
        <div className="flex justify-evenly flex-wrap">
          
            <div>
                <span className="text-xs" >customize</span>
                <div className="w-32 font-bold text-xl text-center p-3 rounded-xl bg-gray-400" onClick={()=>(clickHandler(selectedDish,true,false))}>Ingredient</div>
            </div>
            <div>
                <span className="text-xs">proceed to</span>
                <div className="w-32 font-bold text-xl text-center p-3 rounded-xl bg-gray-400">Order</div>
            </div>

        </div>
    </div>
)}

export{DishDisplay};