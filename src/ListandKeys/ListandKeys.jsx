import React from 'react'
import ListRenderingProps from '../ListRendering/ListRenderingProps'

function ListandKeys() {
    const persons =[
        {
            id: 1,
            name: 'abc',
            age: 10,
            skill: '123'
        },
        {
            id: 2,
            name: 'pqr',
            age: 11,
            skill: '456'
        },
        {
            id: 3,
            name: 'xyz',
            age: 12,
            skill: '789'
        }
    ]
    const personList = persons.map(person => <ListRenderingProps key={person.id} person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default ListandKeys