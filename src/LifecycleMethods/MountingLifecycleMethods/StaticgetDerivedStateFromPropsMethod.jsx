/*
staticgetDerivedStateFromProps(props,state)
1. When the state of the component depends on changes in props over time.
2. Set the state.
Do not cause side effects Eg: HTTP requests.
 */
import React, { Component } from 'react'

export default class StaticgetDerivedStateFromPropsMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Shashi'
      }
    }
    static getDerivedStateFromProps(props, state){
        console.log('StaticgetDerivedStateFromProps Lifecycle Method')
        return null
    }
  render() {
    return (
      <div>StaticgetDerivedStateFromProps Lifecycle Method</div>
    )
  }
}
