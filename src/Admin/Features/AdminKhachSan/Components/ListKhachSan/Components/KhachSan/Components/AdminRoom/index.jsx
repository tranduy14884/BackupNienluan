import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../../../../../../../Components/Sidebar';
import AdHeader from '../../../../../../../../Components/AdHeader';
import AdFooter from '../../../../../../../../Components/AdFooter';
import roomApi from '../../../../../../../../../api/roomApj';
import ListRoom from '../ListRoom';
import { useRouteMatch } from 'react-router';

AdminRoom.propTypes = {
    
};

function AdminRoom(props) {
    const [listRoom, setListRoom] = useState([]);
     //filter follow id
     const match = useRouteMatch();
     const {params: {khachsanId}} = match;
    useEffect(() => {
        const getListRoom = async () => {
          const dataApi = await roomApi.getAll();
          const data = dataApi.filter(item =>{
              return item.productId == khachsanId;
          })
          setListRoom(data);
        };
        getListRoom();
      }, []);
    //  console.log(listRoom);
    
    return (
        <div className="wrapper">
        {/* SideBar */}
        <Sidebar />
        {/* End - SideBar */}
        <div className="wapper-content">
          {/* ---------------------Header----------------- */}
          <AdHeader />
          {/* ---------------------End-Header------------- */}

          {/* --------------------Home-------------------- */}
        <ListRoom listRoom={listRoom} />
          
          {/* --------------------End-Home---------------- */}

          {/* --------------------Footer------------------ */}

          <AdFooter />

          {/* -------------------End-Footer--------------- */}
        </div>
      </div>
    );
}

export default AdminRoom;