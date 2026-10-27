import logo from './logo.svg';
import './App.css';
import img from './assets/image.jpg'
import User from './User';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
// import { useState } from 'react';
import APICall from './components/APICall';
import ChildOne from './propDrilling/ChildOne'
import { BrowserRouter } from 'react-router-dom';
import Redirect from './Routes/Redirect'

function App() {
  // const [visibility,setVisibility]=useState(true)
  return (
    <div>
      {/* <User name="Neha" mob="09876544" city="Indore"/>
      <User name="Rajat" mob="232435624" city="765765765"/>
      <User name="sjhfdhjs " mob="hfsdghfsd" city="syrdsd"/> */}
      {/* <UseState/> */}
      {/* {visibility && <UseEffect/>}
      <button onClick={()=>setVisibility(!visibility)}>Change Visibility</button> */}
      {/* <APICall/> */}
      {/* <ChildOne/> */}
      <BrowserRouter>
        <Redirect/>
      </BrowserRouter>
      
    </div>
  );
}


export default App;