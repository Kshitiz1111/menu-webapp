import React from "react";
import { Orders } from "./Orders";
const OrderList = ({removeIngs, extraIngs, orders})=>{

    return(
        <div className="absolute w-4/5 bg-gray-300 p-7 z-50">
            <span className="absolute top-1 left-2 font-semibold text-sm text-gray-500">Your order list</span>
            <Orders removeIngs={removeIngs} extraIngs={extraIngs} orders={orders}></Orders>
        </div>
    )
}
export{OrderList};