// import { useState } from 'react'

// export default function UseState() {
//     const [count, setCount] = useState(0)
//     const [userName,setUserName]=useState("Guest")
//     return (
//         <div>
//             <h1>Counter</h1>
//             <h3>{count}</h3>
//             <button onClick={() => setCount(count + 1)}>Increasee Count</button>
//             <button onClick={() => setCount(count - 1)}>Decrease Count</button>

//             <h1>User Name</h1>
//             <input placeholder='Enter your name' onKeyUp={(e)=>setUserName(e.target.value)}/>

//             <h3>Hello {userName}</h3>

//         </div>
//     )
// }

import { useState } from "react";
export default function UseState() {
    const [name, setName] = useState("Rajat");
    const [count, setCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [skills, setSkills] = useState(["HTML", "CSS"]);
    const [user, setUser] = useState({
        name: "Rajat",
        age: 25,
    });
    const [selectedUser, setSelectedUser] = useState(null);
    const [myFunction, setMyFunction] = useState(() => {
        return () => {
            alert("Hello from stored function!");
        };
    });

    const changeName = () => {
        setName("Amit");
    };

    const increaseCount = () => {
        setCount((prev) => prev + 1);
    };

    const toggleLogin = () => {
        setIsLoggedIn((prev) => !prev);
    };

    const addSkill = () => {
        setSkills((prev) => [...prev, "JavaScript"]);
    };

    const changeAge = () => {
        setUser((prev) => ({
            ...prev,
            age: prev.age + 1,
        }));
    };

    const selectUser = () => {
        setSelectedUser({
            name: "Amit",
            age: 30,
        });
    };

    return (
        <div style={{ padding: "30px", fontFamily: "Arial" }}>
            <h2>Login Page</h2>

            <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
            <button onClick={toggleLogin}>Toggle Login</button>

            {isLoggedIn ?
                <div>
                    <h1>useState Data Types</h1>

                    <hr />

                    {/* STRING */}
                    <h2>1. String</h2>

                    <p>Name: {name}</p>

                    <button onClick={changeName}>Change Name</button>

                    <hr />

                    {/* NUMBER */}
                    <h2>2. Number</h2>

                    <p>Count: {count}</p>

                    <button onClick={increaseCount}>Increase Count</button>

                    <hr />

                    {/* BOOLEAN */}


                    <hr />

                    {/* ARRAY */}
                    <h2>4. Array</h2>

                    <p>Skills:</p>

                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>

                    <button onClick={addSkill}>Add JavaScript</button>

                    <hr />

                    {/* OBJECT */}
                    <h2>5. Object</h2>

                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>

                    <button onClick={changeAge}>Increase Age</button>

                    <hr />

                    {/* NULL */}
                    <h2>6. Null</h2>

                    {selectedUser === null ? (
                        <p>No user selected</p>
                    ) : (
                        <div>
                            <p>Selected User: {selectedUser.name}</p>
                            <p>Age: {selectedUser.age}</p>
                        </div>
                    )}

                    <button onClick={selectUser}>Select User</button>

                    <hr />

                    {/* FUNCTION */}
                    <h2>7. Function</h2>

                    <button onClick={myFunction}>Execute Stored Function</button>
                </div>
            :
                <div>
                    <h1>Please Log in</h1>
                </div>
            }


        </div>
    );
}
