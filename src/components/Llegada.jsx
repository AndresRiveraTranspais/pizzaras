import ItinerarioLlegada from './ItinerarioLlegada'
const Llegada = ({ciudad, itinerarios}) => {
  return (
    <div className="pr-10 pl-10 w-1/2 p-5">
          <h2 className="bg-titulos-amarillos text-titulos-azules text-center p-3 font-bold text-lg mt-5 uppercase">{ciudad}</h2>
      {
        itinerarios.map(i => (
          <ItinerarioLlegada
            key={i.id}
            hora={i.hora}
            marca={i.marca}
            unidad={i.unidad}
          />
        ))
      }
    </div>
  )
}

export default Llegada