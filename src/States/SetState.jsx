import React, { Component } from 'react'

export default class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        // UI will not rerender whenever the state is changing
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        // this.setState(
        //     {
        //     count: this.state.count +1
        //     },
        //     () =>{
        //         console.log('Callback value', this.state.count)
        //     }
        // )
        this.setState((prevState) =>({
            count: prevState.count +1
        }))
        //calls before state is set- should not do this
        // console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrement(){
        this.setState((prevState) =>({
            count: prevState.count-1
        }))
    }
  render() {
    return (
      <div>
        <button onClick={()=> this.increment()}>Increment</button>Count: {this.state.count}<button onClick={()=>this.decrement()}>Decrement</button>
        </div>
    )
  }
}
