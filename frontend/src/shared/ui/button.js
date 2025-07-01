import React from 'react'
import { Button as BsButton } from 'react-bootstrap'

export function Button(props) {
  return <BsButton {...props}>{props.children}</BsButton>
} 