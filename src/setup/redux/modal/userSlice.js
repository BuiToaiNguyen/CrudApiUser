import { createSlice } from '@reduxjs/toolkit'

const initialState = { 


  user:{
    id:null,
    name:null,
    address:null,
    numberPhone:null,
    age:null,

  },
  isToggleForm:false,
  isEdit:false,
  listUser:[]
 }



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    setListUser:(state,action)=>{
      state.listUser=action.payload
    },
    addUser:(state,action)=>{
      state.listUser.push(action.payload)
    }
    ,
    deleteUser:(state,action)=>{
      const oldState =  state.listUser.filter(item=> item.id!=action.payload)
      state.listUser=oldState
    },editUser:(state,action)=>{
      
      const oldState=state.listUser.map((item)=>{
        if(item.id==action.payload.id){
          return (

            Object.assign(item,action.payload)
          )
        }
        else{
          return (item)
        }
      })
      state.listUser=oldState
    },changeStateEdit:(state)=>{
      state.isEdit = true
      state.isToggleForm = true

    }
    ,changeStateEditFalse:(state)=>{
      state.isEdit = false
    },
    changeToggleForm:(state)=>{
      state.isToggleForm = !state.isToggleForm
    },
    setUser:(state,action)=>{
      Object.assign(state.user,action.payload)

    }

  },

})

export const {setUser,setListUser,deleteUser,editUser,addUser,changeStateEdit,changeStateEditFalse,changeToggleForm } = userSlice.actions

export const listUser = (state) => state.user.listUser
export const isEdit = (state) => state.user.isEdit
export const isToggleForm = (state) => state.user.isToggleForm
export const user = (state) => state.user.user

export default userSlice.reducer