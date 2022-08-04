import React from "react";
import { CustomIngredient } from "./DishDetail/CustomIngredient";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder,editOrder } from "../slice/OrderList";
import {addExtraIng, addRemoveIng, reset} from "../slice/CustomizeIng";

const Orders = ({orders})=>{
    const dispatch = useDispatch();
    let removeIngs = useSelector((state)=>state.CustomizedIngredients.removeIngs);
    let extraIngs = useSelector((state)=>state.CustomizedIngredients.extraIngs);

    const orderActiveToEdit = useSelector((state)=>state.HandleOrder.orderActiveToEdit);

    
    function customizedIngs(selectedItem,btn,dish){
        if(orderActiveToEdit.id !== null){
          
        }

        
    }

    console.log(orderActiveToEdit.id, orderActiveToEdit.status);

    return (
        <div>
        {
            orders.map((item)=>{
                return(
                    <div className="bg-gray-100 p-3 m-2 rounded-xl" key={item.id}>
                        <div className="flex flex-wrap justify-between">
                            <p className="break-all"><strong>{item.name}</strong></p>
                            <div>
                                <span onClick={()=>dispatch(deleteOrder(item.id))} className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300">delete</span>
                                {
                                    (orderActiveToEdit.id === item.id ) ? <span onClick={()=>dispatch( editOrder( {itemId: item.id, activeStatus: orderActiveToEdit.status} ) )} className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 ml-5">{orderActiveToEdit.status}</span> 
                                    :<span onClick={()=>dispatch( editOrder( {itemId: item.id, activeStatus: orderActiveToEdit.status} ) )} className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 ml-5">edit</span>
                                }
                               
                            </div>
                        </div>
                        <div className="px-3">
                            
                            {
                            (orderActiveToEdit.status !== "edit" && (orderActiveToEdit.id === item.id ))?
                            <>
                                <span className="">quantity: <input type="number" className='w-14 border border-black rounded-lg'/></span>
                                
                                {
                                (item.extraIngs.length > 1 || item.removeIngs.length > 0)?
                                <>
                                    <div className="flex justify-between relative">
                                        <p><strong>Customizable Ingredient</strong></p>
                                        <span onClick={''} className="absolute top-0 right-0 py-1 px-2 text-white bg-black rounded-full shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 hover:text-black">reset</span>
                                        </div>
                                        <p>you can customized below items according to you preference</p>
                                        <div className="p-2">
                                        <ul>
                                            {
                                        
                                            item.customIngredient.map((ingredient,index)=>{
                                                return(
                                                    <li className="flex my-2" key={index}>
                                                        <p className="font-semibold">{ingredient.name}</p>
                                                        <div className="px-2">
                                                            <span onClick={()=>customizedIngs(ingredient,"remove",item)} className="px-3 pb-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 " >remove</span> - 
                                                            <span onClick={()=>customizedIngs(ingredient,"extra",item)} className="px-3 pb-1 ml-2  rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300" >extra</span>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                            } 
                                        </ul>
                                    </div>
                                    </>: ""
                                }
                                
                            </> : <span className="">quantity: {item.quantity}</span>
                            }
                            {
                                ((item.removeIngs.length > 0 || item.extraIngs.length > 1) )?
                                <CustomIngredient removeIngs={item.removeIngs} extraIngs={item.extraIngs}></CustomIngredient> 
                                : "" 
                            }
                            
                        </div>
                        <span><strong>price: </strong>{item.price}</span>
                    </div>
                )
           })
        }
        
        </div>
        
    )
}

export{Orders};