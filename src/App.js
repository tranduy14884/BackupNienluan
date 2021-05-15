import { Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import AdHome from "./Admin/Components/AdHome";
import AdminDangNhap from "./Admin/Components/Auth/Dangnhap";
import "./App.css";
import Home from "./Features/Home/Components";
import Hotel from "./Features/Hotel";
import DetailPlace from "./Features/Hotel/Components/HotelPlace/Components/DetailPlace";
import RenderHotelDetail from "./Features/HotelCategory/Components/RenderHotelDetail";
import RenderPay from "./Features/HotelCategory/Components/RenderPay";
function App() {
 
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/Admin" component={Admin} exact></Route>
        <Route path="/Admin/dangnhap" component={AdminDangNhap} exact></Route>
        <Route path="/hotel" component={Hotel} exact></Route>        
        <Route path="/hotel/:placeId" component={DetailPlace} exact/>
        <Route path="/hotel/detail/:hotelId" component={RenderHotelDetail} exact/>
        <Route path="/hotel/detail/pay/:roomId" component={RenderPay} exact/>

      </Switch>
       

      
    </div>
  );
}

export default App;
