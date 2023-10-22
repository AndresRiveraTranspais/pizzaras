import {useState, useEffect} from 'react'
import ibus from './../img/IBUS.svg'
import vista from './../img/VISTA.svg'
import transpais from './../img/TRANSPAIS.svg'
import vista_mix from './../img/MIX.svg'

const ItinerarioLlegada = ({ hora, marca, unidad}) => {
    //const hora = '07:30', marca = 'vista', unidad = '9806'
    const src = {ibus,vista,transpais,vista_mix}
  return (
    <div className="mt-1 flex flex-wrap border-4 border-white">
        <div className="text-white text-center p-4 text-4xl flex-none flex items-center justify-center w-1/2">
            <span>{hora}</span>
        </div>
        <div className="flex-auto text-center w-1/2">
            <img src={marca?(src[marca]):'logo_ibus'} className="w-24 mx-auto p-1"/>
            <span className="text-white text-lg">{unidad}</span>
        </div>
    </div>
  )
}

export default ItinerarioLlegada