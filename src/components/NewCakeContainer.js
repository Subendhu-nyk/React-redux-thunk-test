import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const NewCakeContainer = () => {
    const [num,setNum]=useState(1)
    const numOfCakes=useSelector(state=>state.cake.noOfCakes)
    const dispatch=useDispatch()

  return (
    <div>
        <h2>No of Cakes :- {numOfCakes}</h2>
        <input type='text' value={num} onChange={e=>setNum(e.target.value)}/>
        <button onClick={()=>dispatch(buyCake(num))}>Buy {num} cakes</button>
    </div>
  )
}

export default NewCakeContainer