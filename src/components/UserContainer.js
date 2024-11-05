import React, { useEffect } from 'react'
import { fetchUsers } from '../redux'
import { useDispatch, useSelector } from 'react-redux'

const UserContainer = () => {
   const userData= useSelector(state=>state.user)   
   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(fetchUsers())
   },[])
  return userData.loading?(
    <h2>Loading</h2>    
  ): userData.error ? (
    <h2>{userData.error}</h2>
  ):(
    <div>
       <h2>User List</h2>    
    <div>       
        {userData && userData.users && userData.users.map((user,i)=>{return(<p key={i}>{user.name}</p>)})}
    </div>
    </div>
  )
}

export default UserContainer