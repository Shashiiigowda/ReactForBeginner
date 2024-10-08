/*
render():
1. Only required method.
2. Read props and state and return JSX.
3. Do not change stste or interact with DOM or make ajax calls.
4. Children components lifecycle methods are also executed. */

import React, { Component } from 'react'

export default class RenderMethod extends Component {
  render() {
    console.log('Render Lifecycle Method')
    return (
      <div>Render Lifecycle Method</div>
    )
  }
}
