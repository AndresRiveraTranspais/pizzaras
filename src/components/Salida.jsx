import { useState, useEffect } from 'react'
import ItinerarioSalida from './ItinerarioSalida'
const Salida = ({ ciudad, itinerarios }) => {
  return (
    <div className="pr-10 pl-10">
      <h2 className="bg-titulos-amarillos text-titulos-azules text-center p-5 font-bold text-2xl mt-5 uppercase">{ciudad}</h2>

      {
        itinerarios.map(i => (
          <ItinerarioSalida
            key={i.id}
            hora={i.hora}
            marca={i.marca}
            unidad={i.unidad}
            escalas={i.escalas}
            taquilla={i.taquilla}
            digital={i.digital}
          />
        ))
      }
    </div>
  )
}

export default Salida