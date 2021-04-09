import React from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import AppInfo from "./App-info";
import Commitments from "./Commitment";
import Fight from "./Fight";
import Hotdeal from "./Hotdeal";
import Mainbar from "./Mainbar";
import Membership from "./Membership";

function Home(props) {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <div className="main">
          {/*------------------------- mainbar ------------------*/}
          <Mainbar></Mainbar>
          {/*------------------------- fight --------------------*/}
          <Fight></Fight>
          {/*------------------------- hot-deal -----------------*/}
          <Hotdeal></Hotdeal>
          {/*------------------------- commitment ---------------*/}
          <Commitments></Commitments>
          {/*------------------------- membership ---------------*/}
          <Membership></Membership>
          {/*------------------------- app-info--------------- --*/}
          <AppInfo></AppInfo>
        </div>
      </div>
    <Footer></Footer>
      
    </div>
  );
}

export default Home;
