import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

const HooksIceCreamContainer = () => {
   
    const numOfIceCream=useSelector(state=>state.iceCream.numOfIceCreams)
    const dispatch=useDispatch()
  return (
    <div>
    <h2>No of Ice Cream :- {numOfIceCream}</h2>
    <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
</div>
  )
}

export default HooksIceCreamContainer