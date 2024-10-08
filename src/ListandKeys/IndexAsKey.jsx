import React from 'react'

function IndexAsKey() {
    const names =['abc', 'pqr','xyz']
    const nameList = names.map((name, index) => <div key={index}>{index} {name}</div>)
  return (
    <div>{nameList}</div>
  )
}

export default IndexAsKey