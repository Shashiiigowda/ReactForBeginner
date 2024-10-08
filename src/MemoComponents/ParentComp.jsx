import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'shashi'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Shashi'
            })
        },2000)
    }
  render() {
    console.log('**********Parent Component Render**********')
    return (
      <div>ParentComponent
        <MemoComponent name={this.state.name}/>
      </div>
    )
  }
}
