/*
staticgetDerivedStateFromProps(props,state)
1. Method is called every time a component is re-rendered.
2. Set the state.
3. Do not cause side effects Eg: HTTP requests.
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