import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello!"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: "GoodBye!"
        })
    }
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler}>Event Bind</button>
      </div>
    )
  }
}

export default EventBinding