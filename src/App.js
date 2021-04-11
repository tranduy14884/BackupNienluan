import { NavLink, Route } from "react-router-dom";
import "./App.css";
import Home from "./Features/Home/Components";
import Hotel from "./Features/Hotel";
import HotelCategory from "./Features/HotelCategory";
function App() {
  return (
    <div>
      <Route path="/" component={Home} exact></Route>
      <Route path="/hotel" component={Hotel} exact></Route>
      <Route path="/nhatrang" component={HotelCategory} exact></Route>
      
    </div>
  );
}

export default App;
