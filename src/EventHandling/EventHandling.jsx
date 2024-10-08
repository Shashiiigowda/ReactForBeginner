import React from 'react'

function EventHandling() {
    function clickHandler(){
        //event handler is a function not function call which consiste of '()' at the end of a function
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Event1</button>
    </div>
  )
}

export default EventHandling