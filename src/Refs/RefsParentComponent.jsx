import React, { Component } from 'react'
import RefsClassComponent from './RefsClassComponent'

export default class RefsParentComponent extends Component {
    constructor(props) {
      super(props)
      this.regcomponent= React.createRef()
    }
    clickHandler= () =>{
        this.regcomponent.current.focusInput()
    }
  render() {
    return (
      <div>
        <RefsClassComponent ref={this.regcomponent}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
