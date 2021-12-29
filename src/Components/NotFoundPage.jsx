import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return ( 
        <>
          <div>
              <h1 Align="center">Page Not Found</h1>
              <br/>
              <Link to={"/"} Align="center">Go To Home Page</Link>
              <br/>
              <Link to={"/NavBar"} Align="center">Go To See Only NavBar</Link>
              <br/>
              <Link to={"/Slider"} Align="center">Go To See Only Slider</Link>
          </div>
        </>
     );
}
 
export default PageNotFound;