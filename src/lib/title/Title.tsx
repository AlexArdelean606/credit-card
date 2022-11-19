import React, { FC, ReactNode } from 'react'
import './Title.css'

export const Title :FC<{children: ReactNode}> = ({children}) => {
  return (
    <h1>{children}</h1>
  )
}
