import React, { Component } from 'react'
import ForwardingRefs from './ForwardingRefs'

export default class ForwardingRefsParent extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }
    clickHandler= ()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <ForwardingRefs ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
