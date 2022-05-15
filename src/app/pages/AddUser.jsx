import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, changeStateEditFalse, editUser, isEdit,setUser,user,changeToggleForm} from '../../setup/redux/modal/userSlice'
import {uuid} from "../ultis/uuid"

export const AddUser = () => {
    const inputRef = useRef()

    const stateEdit = useSelector(isEdit)
    const userForm = useSelector(user)

    const dispatch = useDispatch()

    const handeleAddUser =(event)=>{
        event.preventDefault();
        if(!stateEdit){
            const  payload={
                id:uuid(),
                 name:userForm.name,
                 age:userForm.age,
                 address:userForm.address,
                 numberPhone:userForm.numberPhone
             }
             axios.post("http://localhost:5000/user",
             payload
             ).then((res)=>{
                 dispatch(addUser(res.data))
                 setNullFiled()
             })
        }
        else{
            const  payload={
                id:userForm.id,
                 name:userForm.name,
                 age:userForm.age,
                 address:userForm.address,
                 numberPhone:userForm.numberPhone
             }
             axios.put(`http://localhost:5000/user/${userForm.id}`,payload).then((res)=>{
                dispatch(editUser(res.data))
                setNullFiled()
                dispatch(changeStateEditFalse())

             })


        }


       
    }

    const setNullFiled =()=>{
        dispatch(setUser({
            id:"",
            name:"",
            address:"",
            numberPhone:"",
            age:"",
        
          }))
        inputRef.current.focus();
    }


  return (
    <form >
    <div class="mb-3 mt-3">
      <label for="name">Name</label>
      <input type="name" ref={ ref => inputRef.current=ref}
 class="form-control"  placeholder="Enter name" name="name" value={userForm.name} onChange={(event)=>dispatch(setUser({name:event.target.value}))}/>
    </div>
    <div class="mb-3 mt-3">
      <label for="Age">Age</label>
      <input type="Age" class="form-control"  placeholder="Enter Age" name="Age" value={userForm.age} onChange={(event)=>dispatch(setUser({age:event.target.value}))}/>
    </div>
    <div class="mb-3 mt-3">
      <label for="adress">adress</label>
      <input type="adress" class="form-control"  placeholder="Enter adress" name="adress" value={userForm.address} onChange={(event)=>dispatch(setUser({address:event.target.value}))}/>
    </div>
    <div class="mb-3 mt-3">
      <label for="numberPhone">number phone</label>
      <input type="numberPhone" class="form-control"  placeholder="Enter number phone" name="numberPhone" value={userForm.numberPhone} onChange={(event)=>dispatch(setUser({numberPhone:event.target.value}))}/>
    </div>


    <button type="buton" class="btn btn-primary" onClick={handeleAddUser}>{!stateEdit ? 'Add' : 'Edit'}</button>
  </form>
  )
}
