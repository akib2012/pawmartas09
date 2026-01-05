import React, { useContext } from "react";
import { Authcontext } from "../ContextAuth/Authcontext";
import {  Navigate } from "react-router";
import { useLocation } from "react-router";

const Privaterouter = ({ children }) => {
  const { user, loading  } = useContext(Authcontext);

  const loaction = useLocation()
  console.log(loaction);

  if(loading){
   return <p>loading ...</p>
  }

  if (user) {
     return <>{children}</>;
  
  }
 
    return <Navigate state={location?.pathname}  to="/login" ></Navigate>;
};

export default Privaterouter;
