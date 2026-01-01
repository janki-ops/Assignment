import React from 'react'

export const ReactUseselector = () => {
    const count=useSelector((i)=>i.count)
       const dispatch=useDispatch()
  return (
    <div>
        <h4>React Hooks</h4>
        <h3>Counter is--{count}</h3>
        <button onClick={()=>dispatch(addfunc())}>Add Counter</button>
        <button onClick={()=>dispatch(minusfunc())}>Minus Counter</button>
    </div>
  )
}
