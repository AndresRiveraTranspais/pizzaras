import Llegada from './Llegada'

const Llegadas = ({llegadas}) => {
  console.log(llegadas)
  return (
    <div className="mt-10 ml-10 mr-10">
        <h2 className="text-white text-center mx-auto font-bold bg-titulos-azules p-3 text-3xl ">{Object.keys(llegadas).length > 0 ? 'Llegadas':'No hay llegadas aún'}</h2>
        <div className="flex flex-wrap">
        {  
            llegadas.map(l => (
              <Llegada
                    key ={l.id}
                    ciudad={l.ciudad}
                    itinerarios={l.itinerarios}
                />
            ) )
        }
        </div>
  
        </div>
  )
}

export default Llegadas