import React from 'react'
import axios from "axios"
import {useEffect,useState} from "react"
import { setListUser,listUser,isToggleForm,changeToggleForm,changeStateEditFalse,setUser} from '../../setup/redux/modal/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ItemUser } from './ItemUser'
import { AddUser } from './AddUser'

export const User = () => {
    const dispatch = useDispatch()

  const isOpenform = useSelector(isToggleForm)
    const list_User = useSelector(listUser)
    useEffect (() =>{
        axios.get("http://localhost:5000/user").then((response) => {
            dispatch(setListUser(response.data));
          });
    },[])


  return (
    <div>
        
        <table class="table table-bordered">
    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>number phone </th>
        <th>address</th>
        <th>xóa</th>
        <th>sửa</th>
      </tr>
    </thead>
    <tbody>

        {
            list_User.map((item)=>(
            <ItemUser user={item}/>

            ))
        }
    
    </tbody>
  </table>
<button onClick={()=>{

  dispatch(changeToggleForm())
  dispatch(changeStateEditFalse())
  dispatch(setUser({
    id:"",
    name:"",
    address:"",
    numberPhone:"",
    age:"",

  }))
}
  }> Add</button>


        <div style={{ width:300, margin : 20}}>
{
 isOpenform && <AddUser />

}
        </div>


    </div>
  )
}
