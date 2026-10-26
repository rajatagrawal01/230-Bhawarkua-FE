import React ,{useContext}from 'react'
import Button from './Button'
import { counterContext } from "../Context";

const Navbar = () => {
  const value = useContext(counterContext)
  return (
    <>
    <h1>{value.count}</h1>
    <Button/>
    </>
  )
}

export default Navbar