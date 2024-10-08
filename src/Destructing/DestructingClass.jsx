import React, { Component } from 'react'

export class DestructingClass extends Component {
  render() {
    const {name, sname} = this.props
    return (
      <div>{name} and {sname}</div>
    )
  }
}

export default DestructingClass