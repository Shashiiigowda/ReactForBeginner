import React, { Component } from 'react'

export class UserGreeting extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    render() {

        //Approach One
        /*if(this.state.isLoggedIn){
            return(
                <p>Welcome Admin</p>
            )
        }
        else{
            return (
                <p>Welcome Guest</p>
            )
        }*/

        //Approach two: Element Variable
        /*let message
        if(this.state.isLoggedIn){
            message= <p>Welcome Admin</p>
        }
        else{
            message= <p>Welcome Guest</p>
        }
        return (
            <div>{message}</div>
        )*/
        
        //Approach three: Conditional Operators
        return(
            <div>
                {this.state.isLoggedIn?
                <p>Welcome Admin</p> :
                <p>Welcome Guest</p>}
            </div>
        )
        }
    
    }

export default UserGreeting