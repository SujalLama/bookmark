import React from 'react'
import "./button.css";

export default function Button({children, variant, className, ...rest}) {
  
  return (
    <button className={`btn btn--${variant} ${className}`} {...rest}>{children}</button>
  )
}
