import React, { Component } from 'react'

export class EventHandlingClass extends Component {
  
    classEventHandler(){
        console.log("Click Button")
    }
    render() {
    return (
      <div>
        <button onClick={this.classEventHandler}>Event 2</button>
      </div>
    )
  }
}

export default EventHandlingClass