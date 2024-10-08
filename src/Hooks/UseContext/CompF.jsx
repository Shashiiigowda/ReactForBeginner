import React from 'react'
import { UserContext, ChannelContext } from '../../App'

function CompF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user =>{
                    return(
                        <div>
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                        return(
                                            <div>User Context value is {user}, channel is {channel}</div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default CompF