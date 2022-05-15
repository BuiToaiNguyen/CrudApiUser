import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateEdit, deleteUser ,listUser,setUser } from '../../setup/redux/modal/userSlice'

export const ItemUser = ({user}) => {
    const dispatch = useDispatch()
    const list_User = useSelector(listUser)
    const handleDelete =(id)=>{
        axios.delete(`http://localhost:5000/user/${id}`)
        .then(()=>{
            dispatch(deleteUser(id))
        })
      }

      const handleEdit = id =>{
            dispatch(changeStateEdit())

            const userEdit = list_User.find((item)=>item.id===id)
            dispatch(setUser(userEdit));


      }


  return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.numberPhone}</td>
                <td>{user.address}</td>
                <td><button onClick={()=>handleDelete(user.id)}>xóa</button></td>
                <td><button onClick={()=>handleEdit(user.id)}>sửa</button></td>

              </tr>


  )
}
