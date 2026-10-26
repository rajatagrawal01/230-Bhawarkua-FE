import React, { useContext } from "react";
import { counterContext } from "../Context";
import UserName from "./UserName";

// With Context
const Final = () => {
  const value = useContext(counterContext);
  return(
    <>
    <h1>{value.count}</h1>
    <UserName/>
    </>
  ) 
    

};

export default Final;
