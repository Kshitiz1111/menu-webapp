import React from "react";
import {InnerNav} from "../modules/InnerNav";
import { DishDisplay } from '../modules/DishDetail/DishDisplayCard';
import { OrderList } from '../modules/OrderList';
import {Ingredient} from '../modules/DishDetail/Ingredient'
import { AddToOrder } from '../modules/DishDetail/AddToOrder';

import filtericon from "../assets/filtericon.PNG";
import { Dish } from "../modules/Dish";

const Starter = ()=>{

        const userVisited = {
            visited: true,
            recentOrderNo: 6
          }
        
          const Dishes = [
            { id: 1, img_src: "", name: "Pasta1", price: "200",
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 2, img_src: "", name: "Pasta2", price: "250" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 3, img_src: "", name: "Pasta3", price: "300" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 4, img_src: "", name: "Pasta4", price: "350" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 5, img_src: "", name: "Pasta5", price: "200" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 6, img_src: "", name: "Pasta6", price: "200" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 7, img_src: "", name: "Pasta3", price: "300" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 8, img_src: "", name: "Pasta4", price: "350" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 9, img_src: "", name: "Pasta5", price: "200" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
            { id: 10, img_src: "", name: "Pasta6", price: "200" ,
              baseIngredient: ["semolina flour","egg yolk"],
              customIngredient: [
                {
                  name: "garlic",
                  price: 20
                },
                {
                  name: "ground meat",
                  price: 20
                },
                {
                  name: "cheese",
                  price: 20
                }
            ]
            },
          ];
        
          //open and close dish on selecting
          let [open, setOpen] = React.useState(false);
          let [openIngredent, setOpenIngredent] = React.useState(false);
          let [openOrder, setOpenOrder] = React.useState(false);
          let [getItem, setItem] = React.useState('');
        
          const clickHandler = (item,ingredent,order)=>{
            setOpen(true);
            setItem(item);
            (ingredent)? setOpenIngredent(true) : setOpenIngredent(false);
            (order)? setOpenOrder(true) : setOpenOrder(false);
          }
        
          
          const closeHandler = ()=>{
            setOpen(false);
            setOpenIngredent(false);
            setOpenOrder(false);
        
            //revisit
            setRemoveIngs([]);
            setExtraIngs([{}]);
          }
          //for remove and extra in customIngredient
          const [removeIngs , setRemoveIngs] = React.useState([]);
          const [extraIngs , setExtraIngs] = React.useState([{}]);
        
        //for edit remove and extra in customIngredient
        const [editRemoveIngs , setEditRemoveIngs] = React.useState([]);
        const [editExtraIngs , setEditExtraIngs] = React.useState([{}]);
        //check if item exist on array state
        
        function ifExisted(arrList,singleIng,btn){
         let result;
        
         for (let index = 0; index < arrList.length; index++) {
           if(btn === "extra"){
             result = (arrList[index].name === singleIng.name)?  true: false;
           }else if(btn === "remove"){
             result = (arrList[index] === singleIng.name)?  true: false;
           }
        
           
           if(result === true && btn === "extra"){
             // console.log(result + " from ifExisted inside map");
        
             arrList[index].c += 1;
             //revisit
             arrList[index].price += arrList[index].initPrice;
             
             console.log( "count : " + arrList[index].c);
             return result;
           }else if(result === true && btn === "remove"){
             arrList[index].c = 0;
             console.log("count : " + arrList[index].c);
             return result;
           }
        
         }
        
         // console.log(result + " from ifExisted");
         return result;
        }
        //cusIngHandler = customIngredientHandler
        const cusIngHandler = (cusIng,btn)=>{
         switch (btn) {
           case 'remove':
             if( removeIngs.includes(cusIng.name) ){
                 console.log('already included');
             }else{
               //pop selected item from extra arr if selected item exists 
               if(ifExisted(extraIngs,cusIng,btn)){
                 setExtraIngs(
                   extraIngs.filter((item)=>(
                   item.name !== cusIng.name
                   ))
                 )
               //and put that selected item into remove ings arr
                 setRemoveIngs(
                   oldArr => [...oldArr,cusIng.name]
                 );
               console.log(extraIngs + 'modified ex');
               }else{
                 //if selected item doesnot exist in extra arr add it to remove arr
                 setRemoveIngs(
                   oldArr => [...oldArr,cusIng.name]
                 );
               }
                     
             }
        
           break;
           case 'extra':
             setRemoveIngs(
               removeIngs.filter((item)=>(
                 cusIng.name !== item
               ))
             )
             let count = 1;
        
             if(ifExisted(extraIngs,cusIng,btn)){
               console.log("already in added to extra");
             }else if(ifExisted(extraIngs,cusIng,btn) === false){
               setExtraIngs(
                 //revisit for initprice
                 oldObj => [...oldObj,{name:cusIng.name,initPrice:cusIng.price,price:cusIng.price,c:count}]
               )
             }
        
        
           break;
           case "reset":
             setExtraIngs([{}]);
             setRemoveIngs([]); 
           break;
        
           default:
           break;
         }
        }
        //orderlist
        const [active, setActive] = React.useState(false)
        const orderListToggleHandler = ()=>{
           (active === false)? setActive(true): setActive(false);
        }
        
        const [orders, setOrders] = React.useState([]);
        
        
        const addToOrderListHandler = (dish, price, value, rIngs, eIngs)=>{
         setOrders(
           (obj)=>[
                   ...obj,
                     {
                       id: dish.id,
                       name: dish.name,
                       quantity: value,
                       price: price,
                       removeIngs: rIngs,
                       extraIngs: eIngs,
                       customIngredient: dish.customIngredient
                     }
                   ]
         )
         console.log(orders);
         //revisit
         setExtraIngs([{}]);
         setRemoveIngs([]);
         //revisit to make data persistant
         // const ordersInJsonFormat = JSON.stringify(orders);
         // console.log(ordersInJsonFormat);
         // if( ordersInJsonFormat !== ['']){
         //   localStorage.setItem('orderList' , ordersInJsonFormat );
         // }
        }
        
        const deleteOrderListItemHandler = (id)=>{
         //revisit to make data persistant
         // const items = JSON.parse(localStorage.getItem('orderList'));
         // items.filter((item)=>item.id !== id);
        
         setOrders(
             orders.filter((item)=>(
               item.id !== id
             ))
         )
        }
        
        const [editActive, setEditActive] = React.useState({id:null,status:"edit"})
        const editOrderListItemHandler = (id,status)=>{
        
        
         if(status === "edit"){
           setEditActive({id: id,status:"done"});
           //set edit array items
           setEditExtraIngs(
             orders.map((item)=>(
               (item.id === id)?
                  item.extraIngs:""
               
             ))
           ) 
           setEditRemoveIngs(
             orders.map((item)=>(
               (item.id === id)?
                  item.extraIngs:""
               
             ))
           ) 
           //change orders remove and extra ings
        
         }else if(status === "done"){
           setEditActive({id: null,status:"edit"});
         }
         
        }
        
        console.log("... edit r" + editRemoveIngs);
        console.log("... edit e" + editExtraIngs);
    
    return(
        <>
        <InnerNav orderListToggleHandler={orderListToggleHandler}></InnerNav>
        
            <div className="flex justify-between px-4">
                <div className="flex overflow-x-scroll overflow-y-hidden py-2">
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer ">your choice</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">customer choice</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">all</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">new</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">light</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">cheapest</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer ">your choice</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">customer choice</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">all</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">new</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">light</span>
                    <span className="px-2 min-w-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">cheapest</span>
                </div>
                <div>
                    <img className="w-10 py-2 m-1" src={filtericon} alt="" />
                </div>
            </div>
            {
                (active === true)? 
                <OrderList 
                selectedDish = {getItem} 
                orders={orders} 
                deleteOrderListItemHandler={deleteOrderListItemHandler} 
                editOrderListItemHandler={editOrderListItemHandler} 
                editActive={editActive} 
                cusIngHandler={cusIngHandler}
                >
                </OrderList> : ''
            }
                
            {
                (userVisited.visited)? <Dish dishes={Dishes} maxSize={userVisited.recentOrderNo} clickHandler={clickHandler}></Dish> : ""
            }
            {
                (open)? 
                <DishDisplay 
                selectedDish = {getItem} 
                close={closeHandler}
                clickHandler={clickHandler}
                ></DishDisplay>:""
            }
            {
                (openIngredent)?<Ingredient selectedDish = {getItem} clickHandler={clickHandler} cusIngHandler={cusIngHandler} removeIngs={removeIngs} extraIngs={extraIngs}></Ingredient>:""
            }
            {
                (openOrder)?<AddToOrder selectedDish = {getItem} clickHandler={clickHandler} removeIngs={removeIngs} extraIngs={extraIngs} addToOrderListHandler={addToOrderListHandler} closeHandler={closeHandler}></AddToOrder> : ""
            }

            
        
        
        </>
       
    
        
    )
}

export{Starter}