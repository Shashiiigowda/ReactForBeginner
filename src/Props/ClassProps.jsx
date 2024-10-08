import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>{this.props.name} and {this.props.scname}</div>
    )
  }
}
