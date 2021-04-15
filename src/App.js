import { useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import categoryApi from "./api/categoryApi";
import productApi from "./api/productApi";
import "./App.css";
import Home from "./Features/Home/Components";
import Hotel from "./Features/Hotel";
import HotelCategory from "./Features/HotelCategory";
function App() {
  useEffect(() =>{
    const fetchProducts = async () =>{
      
      const productList = await categoryApi.getAll();
      console.log(productList);
    }
    fetchProducts();
  },[])
  return (
    <div>
      <Route path="/" component={Home} exact></Route>
      <Route path="/hotel" component={Hotel} exact></Route>
      <Route path="/nhatrang" component={HotelCategory} exact></Route>
      
    </div>
  );
}

export default App;
