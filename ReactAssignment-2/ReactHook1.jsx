import React from 'react'
import axios from "axios";


export const ReactHook1 = () => {
    const[userdata,setUserdata]=useState([]);
    useEffect(()=>{
         axios.get("https://fakestoreapi.com/users")
         .then((res)=>setUserdata(res.data))
          },[]);
  return (
    <div>
          <h3>React Hook Example</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </tbody>
                {userdata.map((i)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.username}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                        </tr>
                    )
                })}
            </table>

    </div>
  )
}
