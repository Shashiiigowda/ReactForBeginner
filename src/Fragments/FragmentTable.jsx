import React from 'react'
import FragmentColumn from './FragmentColumn'

function FragmentTable() {
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <FragmentColumn/>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default FragmentTable