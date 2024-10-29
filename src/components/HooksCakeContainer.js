import React from 'react'
import { useSelector } from 'react-redux'

const HooksCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.noOfCakes)

  return (
    <div>
        <h2>No of Cakes :- {numOfCakes}</h2>
        <button>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer