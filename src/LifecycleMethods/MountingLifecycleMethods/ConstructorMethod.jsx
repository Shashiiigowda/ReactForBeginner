/*Constructor:
1. A special function that will get called whenever a new component is created.
2. Initializing state and Binding the event handlers.
3. Do not cause side effects Eg: HTTP requests.
4. super(props): We can call the parent's constructor method and get access to the parent properties.
5. Directly overwrite this.state.*/

import React, { Component } from 'react'

export default class ConstructorMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Shashi"
      }
      console.log("Constructor Lifecycle Method")
    }
  render() {
    return (
      <div>Constructor Lifecycle Method</div>
    )
  }
}
