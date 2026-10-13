import { Button } from 'bootstrap'
import React,{useEffect,useState} from 'react'

export default function UseEffect() {
    const [count,setCount]=useState(0)
    const [stuName,setStuName]=useState("")
    
    useEffect(()=>{
        console.log("Count Changed");
    },[count])

    useEffect(()=>{
        console.log("Name Changed");
    },[stuName])

    useEffect(()=>{
        console.log("Component Mounted");
        return()=>{
            console.log("Component Unmounted");
        }
    },[])
  
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
        <button onClick={()=>setCount(count-1)}>Decrease count</button>

        <h1>{stuName}</h1>
        <input onKeyUp={(e)=>{setStuName(e.target.value)}}/>
    </div>
  )
}