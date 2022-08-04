import { configureStore } from '@reduxjs/toolkit';
import  OpenSingleDish  from '../slice/OpenSingleDish';
import  initDishes  from '../slice/Dishes';
import CustomizeIng from '../slice/CustomizeIng';
import OrderList from '../slice/OrderList';

export const store = configureStore({
    reducer: {
        DishCard: OpenSingleDish,
        getDishes: initDishes,
        CustomizedIngredients: CustomizeIng,
        HandleOrder: OrderList, 
    },
})