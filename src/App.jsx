import './App.css';
import {Nav} from './modules/Nav';
import {CustomerChoice} from './modules/CustomerChoice';
import {Menu} from './modules/Menu';
import {Dish} from './modules/Dish';
import { DishDisplay } from './modules/DishDetail/DishDisplayCard';
import {Ingredient} from './modules/DishDetail/Ingredient'
import React from 'react';

const userVisited = {
  visited: true,
  recentOrderNo: 6
}
function App() {
  const Dishes = [
    { id: 1, img_src: "", name: "Pasta1", price: "200",
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 2, img_src: "", name: "Pasta2", price: "250" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 3, img_src: "", name: "Pasta3", price: "300" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 4, img_src: "", name: "Pasta4", price: "350" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 5, img_src: "", name: "Pasta5", price: "200" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 6, img_src: "", name: "Pasta6", price: "200" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 7, img_src: "", name: "Pasta3", price: "300" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 8, img_src: "", name: "Pasta4", price: "350" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 9, img_src: "", name: "Pasta5", price: "200" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
    },
    { id: 10, img_src: "", name: "Pasta6", price: "200" ,
      baseIngredient: ["semolina flour","egg yolk"],
      customIngredient: ["garlic","ground meat","cheese"]
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
  }
  //close ingredient
  const closeIngredentHandler = ()=>{
    setOpenIngredent(false);
  }
  //close order
  const closeOrderHandler = ()=>{
    setOpenOrder(false);
  }
  console.log(openIngredent);

  return (
    <>
      <Nav></Nav>
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
        (openIngredent)?<Ingredient selectedDish = {getItem} clickHandler={clickHandler}></Ingredient>:""
      }
    </>
  );
}

export default App;
