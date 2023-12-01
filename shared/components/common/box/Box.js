import React from 'react'
import styles from './Box.module.scss'

function Box(props) {
    const { className, children } = props
  return (
    <div className={`${styles.box} ${className}`}>
      {children}
    </div>
  )
}

export default Box
