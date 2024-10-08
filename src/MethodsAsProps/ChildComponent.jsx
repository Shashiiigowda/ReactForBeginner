import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* If using any parameter inside a method use arrow function syntax */}
        <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent