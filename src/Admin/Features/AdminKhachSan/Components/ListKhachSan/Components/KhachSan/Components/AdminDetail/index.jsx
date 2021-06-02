import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../../../../../../../Components/Sidebar';
import AdHeader from '../../../../../../../../Components/AdHeader';
import AdFooter from '../../../../../../../../Components/AdFooter';
import detailApi from '../../../../../../../../../api/detailApi';
import { useRouteMatch } from 'react-router';
import ListDetail from '../ListDetail';

AdminDetail.propTypes = {
    
};

function AdminDetail(props) {
  const [listDetail, setListDetail] = useState([]);
     //filter follow id
     const match = useRouteMatch();
     const {params: {khachsanId}} = match;
    useEffect(() => {
        const getListDetail = async () => {
          const dataApi = await detailApi.getAll();
          const data = dataApi.filter(item =>{
              return item.productID == khachsanId;
          })
          setListDetail(data);
        };
        getListDetail();
      }, []);
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
          <ListDetail listDetail={listDetail} />
          
          {/* --------------------End-Home---------------- */}

          {/* --------------------Footer------------------ */}

          <AdFooter />

          {/* -------------------End-Footer--------------- */}
        </div>
      </div>
    );
}

export default AdminDetail;