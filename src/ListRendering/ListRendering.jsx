import React from 'react'

function ListRendering() {
    const names =['abc','pqr','xyz']
    const nameList = names.map(name =><div>{name}</div>)
  return (
    <div>
        {/* 
        Method 1
        {
            names.map(name =><div>{name}</div>)
        } */}
        {nameList}
    </div>
  )
}

export default ListRendering