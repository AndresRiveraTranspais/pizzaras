import React  from 'react'
import Clock from 'react-digital-clock'
const Reloj = ({terminal}) => {
  const style = {
    color: 'blue',
    fontFamily: 'italic'
};
  return (
    <div className="flex-none bg-fondo-azul border-white rounded-xl m-10 p-3 px-10 font-medium text-white border">
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />    </div>
  )
}

export default Reloj