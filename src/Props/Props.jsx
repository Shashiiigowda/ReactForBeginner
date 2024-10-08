import React from 'react'

function Props(props) {
  return (
    <div>{props.name} and {props.scname}
    {/* To scpecify a content write content in app .js and simply call it as children in main defination */}
    <p>{props.children}</p>
    </div>
  )
}

export default Props