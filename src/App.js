import { useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import categoryApi from "./api/categoryApi";
import productApi from "./api/productApi";
import "./App.css";
import Home from "./Features/Home/Components";
import Hotel from "./Features/Hotel";
import DetailPlace from "./Features/Hotel/Components/HotelPlace/Components/DetailPlace";
import HotelCategory from "./Features/HotelCategory";
import RenderHotelDetail from "./Features/HotelCategory/Components/RenderHotelDetail";
import RenderPay from "./Features/HotelCategory/Components/RenderPay";
function App() {
  // useEffect(() =>{
  //   const fetchProducts = async () =>{

  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //     const test = {
  //       name : 'Tran Khanh Duy',
  //       categoryId : 1,
  //       price : 123000,
  //     }
  //     // productApi.remove(6);
  //     console.log(productList);

  //   }
  //   fetchProducts();
  // },[])
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/hotel" component={Hotel} exact></Route>        
        <Route path="/hotel/:placeId" component={DetailPlace} exact/>
        <Route path="/hotel/detail/:hotelId" component={RenderHotelDetail} exact/>
        <Route path="/hotel/detail/pay/:roomId" component={RenderPay} exact/>

      </Switch>
       

      
    </div>
  );
}

export default App;
