import React from 'react'

//Method 1
// function DestructingProps({name, sname}) {
//   return (
//     <div>{name} and {sname}</div>
//   )
// }

//Method 2
function DestructingProps(props) {
    const {name, sname} = props
    return (
      <div>{name} and {sname}</div>
    )
  }
export default DestructingProps