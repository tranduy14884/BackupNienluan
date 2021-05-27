import { Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import AdHome from "./Admin/Components/AdHome";
import AdminDangNhap from "./Admin/Components/Auth/Dangnhap";
import AdminDonHang from "./Admin/Features/AdminDonHang";
import AdminKhachHang from "./Admin/Features/AdminKhachHang";
import UpdateKhachHang from "./Admin/Features/AdminKhachHang/ListKhachHang/UpdateKhachHang";
import AdminKhachSan from "./Admin/Features/AdminKhachSan";
import AdminThemKhachSan from "./Admin/Features/AdminKhachSan/Components/AddKhachSan";
import UpdateKhachSan from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/UpdateKhachSan";
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
        <Route path="/Admin/khachsan" component={AdminKhachSan} exact></Route>
        <Route path="/Admin/khachsan/them" component={AdminThemKhachSan} exact></Route>
        <Route path="/Admin/khachsan/update/:khachsanId" component={UpdateKhachSan} exact></Route>
        <Route path="/Admin/khachhang" component={AdminKhachHang} exact></Route>
        <Route path="/Admin/khachhang/update/:khachhangId" component={UpdateKhachHang} exact/>
        <Route path="/Admin/donhang" component={AdminDonHang} exact></Route>
        <Route path="/hotel" component={Hotel} exact></Route>        
        <Route path="/hotel/:placeId" component={DetailPlace} exact/>
        <Route path="/hotel/detail/:hotelId" component={RenderHotelDetail} exact/>
        <Route path="/hotel/detail/pay/:roomId" component={RenderPay} exact/>
      </Switch>
       

      
    </div>
  );
}

export default App;
