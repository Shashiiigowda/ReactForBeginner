/*
shouldComponentUpdate(nextProps, nextState):
1. Dictates if the component should re-render or not.
2. Performance optimization.
3. Do not cause side effects. Eg: HTTP requests calling the set method. */

import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    shouldComponentUpdate(){
        console.log('Lifecycle Method of shouldComponentUpdate Method')
        return true
    }
  render() {
    return (
      <div>ShouldComponentUpdate</div>
    )
  }
}
