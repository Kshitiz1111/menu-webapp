import './App.css';
import {Nav} from './modules/Nav';
import {CustomerChoice} from './modules/CustomerChoice';
import {Menu} from './modules/Menu';
import {Dish} from './modules/Dish';

const userVisited = {
  visited: true,
  recentOrderNo: 6
}
function App() {
  const Dishes = [
    { id: 1, img_src: "", name: "Pasta1", price: "200" },
    { id: 2, img_src: "", name: "Pasta2", price: "250" },
    { id: 3, img_src: "", name: "Pasta3", price: "300" },
    { id: 4, img_src: "", name: "Pasta4", price: "350" },
    { id: 5, img_src: "", name: "Pasta5", price: "200" },
    { id: 6, img_src: "", name: "Pasta6", price: "200" },
    { id: 7, img_src: "", name: "Pasta3", price: "300" },
    { id: 8, img_src: "", name: "Pasta4", price: "350" },
    { id: 9, img_src: "", name: "Pasta5", price: "200" },
    { id: 10, img_src: "", name: "Pasta6", price: "200" },
  ];

  return (
    <>
      <Nav></Nav>
      <CustomerChoice dish={Dishes} maxSize='10' ></CustomerChoice>
      <Menu></Menu>
      
      {
        (userVisited.visited)? <Dish dishes={Dishes} maxSize={userVisited.recentOrderNo}></Dish> : ""
      }
      

      
    </>
  );
}

export default App;
