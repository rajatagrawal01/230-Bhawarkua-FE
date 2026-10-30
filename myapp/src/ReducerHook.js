import React, { useReducer, useState} from 'react'

export default function ReducerHook() {
    const reducer=(state,action)=>{
        // console.log("State is: ",state);
        // console.log("Action is :",action);
        // console.log("Action Type is :",action.type);
        if(action.type=="Increase" && action.usrName!="Guest"){
            return state+1
        }
        else if(action.type=="Decrease" && action.usrName!="Guest"){
            return state-1
        }
        else if(action.type=="Reset" && action.usrName!="Guest"){
            return state=0
        }
        else{
            return state=0
        }
    }
    const [count,dispatch]=useReducer(reducer,0)
    const [name,setName]=useState("Guest")
  return (
    <div>
        <h1>Count is :{count} and Name is {name}</h1>
        <button onClick={()=>{dispatch({type:"Increase",usrName:`${name}`})}}>Increment</button>
        <button onClick={()=>{dispatch({type:"Decrease",usrName:`${name}`})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>

        <input onChange={(e)=>setName(e.target.value)}/>

        
    </div>
  )
}
