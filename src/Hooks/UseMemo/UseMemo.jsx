import React from 'react'
import { useState } from 'react'

function UseMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = ()=>{
        setCounterOne(counterOne +1)
    }
    const incrementTwo = () =>{
        setCounterTwo(counterTwo +1)
    }
    const isEven = () =>{
        return counterOne % 2 === 0
    }
  return (
    <div>
        <button onClick={incrementOne}>CounterOne-{counterOne}</button>
        <span>
            {isEven ? 'Even':'Odd'}
        </span>
        <button onClick={incrementTwo}>CounterTwo-{counterTwo}</button>
    </div>
  )
}

export default UseMemo