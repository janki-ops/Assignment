import React, { useState } from 'react'

export const Short = () => {
    const[data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const[alldata,setAllData]=useState([])
    const[id,setId]=useState("")

    const handleChange=(e)=>{
      let{name,value}=e.target;
      setData({...data,[name]:value})
    }

    const saveData=(e)=>{
      e.preventDefault()
      
    
      setAllData([...alldata,data])
      setId("")
      setData({
      name:"",
      email:"",
      password:"",
     })
    }
   

    
     
  return (
    <div>
        <h3>Short Method </h3>

        <form method="post" name="frm" action="#" onSubmit={saveData}>
            <lable>Name:</lable>
            <input type="text" name="name" id="name" onChange={handleChange} value={data.name}/>
            <br></br>

             <lable>Email:</lable>
            <input type="email" name="email" id="email" onChange={handleChange} value={data.email}/>
            <br></br>
            
            <lable>Password:</lable>
            <input type="password" name="password" id="password" onChange={handleChange} value={data.password}/>
            <br></br>

            <input type="submit" value="Save"/>
        </form>

        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            


          </thead>
          <tbody>
            {
                alldata.map((i,index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{i.name}</td>
                      <td>{i.email}</td>
                      <td>{i.password}</td>

                    
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
    </div>
  )
}

