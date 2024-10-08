import React from 'react'
import '../CssStyling/Stylesheet.css'

function CssStylesheets(props) {
    let className = props.primary ? "primary" : ''
  return (
    <div className={`${className} font-xl`}>
        CssStylesheets
    </div>
  )
}

export default CssStylesheets