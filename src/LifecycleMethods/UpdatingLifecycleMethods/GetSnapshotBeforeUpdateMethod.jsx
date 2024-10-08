/*
getSnapshotBeforeUpdate(prevProps, prevState):
1. Called right before the cahnges from the virtual DOM are to be reflected in the DOM.
2. Capture some information from the DOM.
3. Method will either return nall or return a value. Returned value will be passed as the third parameter to the next mwthod. */

import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdateMethod extends Component {
    getSnapshotBeforeUpdate(){
        console.log('Lifecyscle Method getSnapshotBeforeUpdate Method')
    }
  render() {
    return (
      <div>GetSnapshotBeforeUpdateMethod</div>
    )
  }
}
