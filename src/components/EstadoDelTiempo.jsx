import React from 'react'

const EstadoDelTiempo = ({icon,description,terminal}) => {
  return (
    <div className="text-white text-center flex-none flex items-center justify-center flex-col">
      <img className="flex w-14" src={icon} alt={description}/>
      <span className="hidden">{terminal},MX</span>
      <span className="hidden">{description}</span>
    </div>
  )
}

export default EstadoDelTiempo