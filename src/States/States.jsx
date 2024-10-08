import React, { Component } from 'react'

export default class States extends Component {
    constructor(){
        super()
        this.state ={
            message: 'Welcome Visitor'
        }
    }
    changeMessage(){
        // Accepts the new state of the component
        this.setState({
            message: "Thank you for subcribing!"
        })
    }
  render() {
    return (
    <div>
        {this.state.message}
        {/* Event Handling */}
        <button onClick={()=> this.changeMessage()}>Subscribe</button> 
    </div>
    )
  }
}
