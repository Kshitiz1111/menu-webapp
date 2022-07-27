import './App.css';
import {Nav} from './modules/Nav';
import {CustomerChoice} from './modules/CustomerChoice';
import {Menu} from './modules/Menu';
import {Dish} from './modules/Dish';
import { DishDisplay } from './modules/DishDetail/DishDisplayCard';
import {Ingredient} from './modules/DishDetail/Ingredient'
import { AddToOrder } from './modules/DishDetail/AddToOrder';
import { OrderList } from './modules/OrderList';
import React from 'react';

const userVisited = {
  visited: true,
  recentOrderNo: 6
}
function App() {
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
  //close ingredient

  // const closeIngredentHandler = ()=>{
  //   setOpenIngredent(false);
  // }
  //close order
  
  // const closeOrderHandler = ()=>{
  //   setOpenOrder(false);
  // }
  console.log(openIngredent);
  console.log(openOrder);

  //for remove and extra in customIngredient
  const [removeIngs , setRemoveIngs] = React.useState([]);
  const [extraIngs , setExtraIngs] = React.useState([{}]);

//check if item exist on array state

  function ifExisted(arrList,singleIng,btn){
    let result;

    for (let index = 0; index < arrList.length; index++) {
      result = (arrList[index].name === singleIng.name)?  true: false;

      
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
  const orderListToggleHandler = (flag)=>{
      setActive(flag);    
      
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
                  extraIngs: eIngs 
                }
              ])
    console.log(orders);
  }

  return (
    <>
      {
        (active === true)? <OrderList removeIngs={removeIngs} extraIngs={extraIngs} orders={orders}></OrderList> : ''
      }
      <Nav orderListToggleHandler={orderListToggleHandler}></Nav>
      <CustomerChoice dish={Dishes} maxSize='10' clickHandler={clickHandler}></CustomerChoice>
      <Menu></Menu>
      
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
        (openOrder)?<AddToOrder selectedDish = {getItem} clickHandler={clickHandler} removeIngs={removeIngs} extraIngs={extraIngs} addToOrderListHandler={addToOrderListHandler}></AddToOrder> : ""
      }
    </>
  );
}

export default App;
