import React, { Component } from 'react'

export class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    handleUserNameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    const {username, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName </label>
            <input 
                type='text'
                value={username} 
                onChange={this.handleUserNameChange}>
            </input>
        </div>
        <div>
            <label>Comments </label>
            <input
                type='textarea'
                value={comments}
                onChange={this.handleCommentsChange}>
            </input>
        </div>
        <div>
            <label>Topic </label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
            </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>

    )
  }
}

export default FormHandling