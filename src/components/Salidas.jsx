import Salida from './Salida'

const Salidas = ({ salidas }) => {
  return (
    <div className="mt-0 ml-10 mr-10">
      <h2 className="text-white text-center mx-auto font-bold bg-titulos-azules p-3 text-3xl ">{Object.keys(salidas).length > 0 ? 'Salidas' : 'No hay salidas aún'}</h2>
      {
        salidas.map(s => (
          <Salida
            key={s.id}
            ciudad={s.ciudad}
            itinerarios={s.itinerarios}
          />
        ))
      }

    </div>
  )
}

export default Salidas