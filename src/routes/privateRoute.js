import React from 'react';
import { Navigate } from 'react-router-dom';

// handle the private routes
/* function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route path="/123" element={()=>{return(<>HI</>)}} />
 
  
  )
} */
const PrivateRoute = ({ element, isLoggedIn, fallbackPath = '/login' }) => {
    return isLoggedIn ? (
        element
    ) : (
      <Navigate to={fallbackPath} state={{ from: window.location.pathname }} replace />
    );
    
    
    


  };

export default PrivateRoute;