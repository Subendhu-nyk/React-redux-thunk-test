import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.cake.noOfCakes)
    const dispatch=useDispatch()

  return (
    <div>
        <h2>No of Cakes :- {numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer