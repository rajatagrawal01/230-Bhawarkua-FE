import React ,{useContext}from 'react'
import { counterContext } from "../Context";

export default function UserName() {
 const value = useContext(counterContext);
 console.log("UserName",value);
 
  return (
    <div>
      <h1>{value.name}</h1>
      <input onChange={(e)=>value.setName(e.target.value)}/>
    </div>
  )
}
