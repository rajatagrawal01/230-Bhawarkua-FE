import React ,{useContext}from 'react'
import Button from './Button'
import { counterContext } from "../Context";
import UserName from "./UserName";


const Navbar = () => {
  const value = useContext(counterContext)
  return (
    <>
    <h1>{value.count}</h1>
    <Button/>
    <UserName/>
    </>
  )
}

export default Navbar