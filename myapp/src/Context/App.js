import { useState } from "react";
import Navbar from "./Components/Navbar";
import { counterContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("Guest")
  return (
    <>
      <counterContext.Provider value={{ count, setCount,name,setName}}>
        <Navbar />
      </counterContext.Provider>
    </>
  );
}
export default App;
