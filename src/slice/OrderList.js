import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    orderActiveToEdit: {
        id: null,
        status: "edit",
    },
}

export const  OrderList= createSlice({
    name:"addToOrder",
    initialState,
    reducers:{
        addToOrderList: (state,action)=>{
            const {dish,totalPrice,quantity,extraIngs,removeIngs} = action.payload;
            
            if(state.orders.find(item =>{
                    if(item.id === dish.id) return true;
                    return false;
                }))
            {
                console.log("already added to order list");
                state.orders = [...state.orders];
                
            }else{
                 state.orders = 
                [
                ...state.orders,
                    {
                    id: dish.id,
                    name: dish.name,
                    quantity: quantity,
                    price: totalPrice,
                    removeIngs: removeIngs,
                    extraIngs: extraIngs,
                    customIngredient: dish.customIngredient,
                    }
                ]
            }
           

            console.log(state.orders);
        },

        deleteOrder: (state, action)=>{

           state.orders = state.orders.filter((item)=>(
                item.id !== action.payload
              ))
        },

        editOrder: (state, action)=>{
            const {itemId, activeStatus} = action.payload;

            if(activeStatus === "edit"){
                state.orderActiveToEdit.id = itemId;
                state.orderActiveToEdit.status = "done";
                
                state.orders.map(
                    (item)=>(
                        (item.id === itemId)?item.extraIngs:""
                    )
                )
                // //set edit array items
                // setEditExtraIngs(
                //   orders.map((item)=>(
                //     (item.id === id)?
                //        item.extraIngs:""
                    
                //   ))
                // ) 
                // setEditRemoveIngs(
                //   orders.map((item)=>(
                //     (item.id === id)?
                //        item.extraIngs:""
                    
                //   ))
                // ) 
                //change orders remove and extra ings
             
              }else if(activeStatus === "done"){
                state.orderActiveToEdit.id = null;
                state.orderActiveToEdit.status = "edit";
              }
        },

        
    }
})

export const {addToOrderList, deleteOrder, editOrder} = OrderList.actions;
export default OrderList.reducer;