import React, { Component } from 'react'
import ComponentDidMountMethod from './ComponentDidMountMethod'
import ConstructorMethod from './ConstructorMethod'
import RenderMethod from './RenderMethod'
import StaticgetDerivedStateFromPropsMethod from './StaticgetDerivedStateFromPropsMethod'

export default class MountingLifecycleMethods extends Component {
  render() {
    return (
      <div>Mounting Lifecycle Methods
        <ConstructorMethod/>
        <StaticgetDerivedStateFromPropsMethod/>
        <RenderMethod/>
        <ComponentDidMountMethod/>
      </div>
    )
  }
}
