import React, { Component } from 'react'

export default class RefsClassComponent extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>RefsClassComponent
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}
