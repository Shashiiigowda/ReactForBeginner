/*
render():
1. Only required method.
2. Read props and state and return JSX.
3. Do not change state or interact with DOM or make ajax calls.
 */
import React, { Component } from 'react'

export default class RenderMethod extends Component {
  render() {
    console.log('Render Lifecycle Method')
    return (
      <div>Render Lifecycle Method</div>
    )
  }
}