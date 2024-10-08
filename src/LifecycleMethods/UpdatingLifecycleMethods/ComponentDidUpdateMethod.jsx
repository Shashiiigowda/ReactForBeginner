/*
componentDidUpdate():
1. Invoked immediately after a component and all its children components have been rendered to the DOM.
2. Cause side effects Eg: Interact with the DOM or perform any ajax calls to load data. 
*/

import React, { Component } from 'react'

export default class ComponentDidUpdateMethod extends Component {
    componentDidUpdate(){
        console.log('componentDidMount Lifecycle Method')
    }
  render() {
    return (
      <div>ComponentDidUpdate Lifecycle Method</div>
    )
  }
}