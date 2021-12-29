import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import PageNotFound from '../Components/NotFoundPage';
import Slider from '../Components/Slider';
import Table from '../Components/Table';
const AllRoutes = () => {
    return ( 
        <>
        <Routes>
          <Route path="/" element={<><NavBar/><Slider/><Table/></>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/NavBar" element={<NavBar/>}/>
          <Route path="/Slider" element={<Slider/>}/>
          <Route path="/Table" element={<Table/>}/>
        </Routes>
        </>
     );
}
 
export default AllRoutes;