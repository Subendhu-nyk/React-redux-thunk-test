import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySnacks } from '../redux'

const HooksSnackContainer = () => {
    const numOfSnacks=useSelector(state=>state.snack.numOfSnacks)
    const dispatch=useDispatch()
  return (
    <div>
    <h2>No of Snacks :- {numOfSnacks}</h2>
    <button onClick={()=>dispatch(buySnacks())}>Buy Ice Cream</button>
</div>
  )
}

export default HooksSnackContainer