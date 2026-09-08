import { useState } from 'react'

function Counter(){
    const [counter,setCounter]=useState(0);

    const incCounter=()=>{
         setCounter (counter+1);
    }

    return (
        <>
        <h3>{counter}</h3>
        <button onClick={incCounter}>Counter</button>
        </>
    )
}
export default Counter;