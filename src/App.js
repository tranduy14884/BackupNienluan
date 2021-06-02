import { Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import AdminDangNhap from "./Admin/Components/Auth/Dangnhap";
import AdminDonHang from "./Admin/Features/AdminDonHang";
import AdminKhachHang from "./Admin/Features/AdminKhachHang";
import UpdateKhachHang from "./Admin/Features/AdminKhachHang/ListKhachHang/UpdateKhachHang";
import AdminKhachSan from "./Admin/Features/AdminKhachSan";
import AdminThemKhachSan from "./Admin/Features/AdminKhachSan/Components/AddKhachSan";
import AddDetail from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/AddDetail";
import AddRoom from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/AddRoom";
import AdminDetail from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/AdminDetail";
import AdminRoom from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/AdminRoom";
import UpdateDetail from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/UpdateDetail";
import UpdateKhachSan from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/UpdateKhachSan";
import UpdateRoom from "./Admin/Features/AdminKhachSan/Components/ListKhachSan/Components/KhachSan/Components/UpdateRoom";
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
        <Route path="/Admin/khachsan/room/:khachsanId" component={AdminRoom} exact></Route>
        <Route path="/Admin/khachsan/chitietkhachsan/:khachsanId" component={AdminDetail} exact></Route>
        <Route path="/Admin/khachsan/chitietkhachsan/sua/:detailId" component={UpdateDetail} exact></Route>
        <Route path="/Admin/khachsan/chitietkhachsan/them/:khachsanId" component={AddDetail} exact></Route>
        <Route path="/Admin/khachsan/phong/them/:khachsanId" component={AddRoom} exact></Route>
        <Route path="/Admin/khachsan/room/update/:roomId" component={UpdateRoom} exact></Route>
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
