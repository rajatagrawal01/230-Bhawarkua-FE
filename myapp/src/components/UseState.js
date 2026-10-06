import { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0)
    const [userName,setUserName]=useState("Guest")
    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increasee Count</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>

            <h1>User Name</h1>
            <input placeholder='Enter your name' onKeyUp={(e)=>setUserName(e.target.value)}/>

            <h3>Hello {userName}</h3>

        </div>
    )
}

