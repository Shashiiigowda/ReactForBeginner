import React, { Component } from 'react'
import ConstructorMethod from '../MountingLifecycleMethods/ConstructorMethod'
import RenderMethod from '../MountingLifecycleMethods/RenderMethod'
import ComponentDidMountMethod from '../MountingLifecycleMethods/ComponentDidMountMethod'
import GetSnapshotBeforeUpdateMethod from './GetSnapshotBeforeUpdateMethod'
import RenderMEthod from './RenderMEthod'
import ShouldComponentUpdate from './ShouldComponentUpdate'
import StaticgetDerivedStateFromPropsMethod from './StaticgetDerivedStateFromProps'
import ComponentDidUpdateMethod from './ComponentDidUpdateMethod'

export default class UpdatingLifecycleMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Shashi'
      }
    }
    changeofState =() =>{
        this.setState({
            name:"abc"
        })
    }
  render() {
    return (
      <div>Updating Lifecycle Method
        <ConstructorMethod/>
        <StaticgetDerivedStateFromPropsMethod/>
        <RenderMethod/>
        <ComponentDidMountMethod/>
        <button onClick={()=>this.changeofState()}>Change of State</button>
        <StaticgetDerivedStateFromPropsMethod/>
        <ShouldComponentUpdate/>
        <RenderMEthod/>
        <GetSnapshotBeforeUpdateMethod/>
        <ComponentDidUpdateMethod/>
      </div>
    )
  }
}
