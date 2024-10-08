/*
componentDidMount():
1. Invoked immediately after a component and all its children components have been rendered to the DOM.
2. Cause side effects Eg: Interact with the DOM or perform any ajax calls to load data. */
import React, { Component } from 'react'

export default class ComponentDidMountMethod extends Component {
    componentDidMount(){
        console.log('componentDidMount Lifecycle Method')
    }
  render() {
    return (
      <div>ComponentDidMount Lifecycle Method</div>
    )
  }
}
