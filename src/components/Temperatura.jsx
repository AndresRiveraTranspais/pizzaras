import React from 'react'

export const Temperatura = ({temp}) => {
  return (
    <div>{Math.round(temp)}°C</div>
  )
}
