import React, { useContext } from "react";
import { counterContext } from "../Context";

// With Context
const Final = () => {
  const value = useContext(counterContext);
  return(
    <>
    <h1>{value.count}</h1>
    
    </>
  ) 
    

};

export default Final;
