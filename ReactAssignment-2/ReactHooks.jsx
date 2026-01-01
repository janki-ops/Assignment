import React, { useState } from 'react'

export const ReactHooks = () => {
    const[count,setCount]=useState(0);

    const incerement=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h2>Counter is---{count}</h2>
        <button onClick={incerement}>Add</button>
        <button onClick={decrement}>Minus</button>
    </div>
  )
}
