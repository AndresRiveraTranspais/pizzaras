import { useState, useEffect } from 'react'
import { formatearCantidad } from '../helpers'
import ibus from './../img/IBUS.svg'
import vista from './../img/VISTA.svg'
import transpais from './../img/TRANSPAIS.svg'
import vista_mix from './../img/MIX.svg'

const ItinerarioSalida = ({ hora, marca, unidad, escalas, taquilla, digital }) => {
    const src = { ibus, vista, transpais, vista_mix }
    return (
        <div className="m-5 flex flex-wrap">
            <div className="bg-hora text-precio-digital text-center p-4 text-4xl flex-none flex items-center justify-center w-1/5">
                <span>{hora}</span>
            </div>
            <div className="bg-marca flex-auto text-center">
                <img src={marca ? (src[marca]) : 'logo_ibus'} className="w-40 mx-auto p-1" />
                <span className="text-white text-lg">{unidad}</span>
            </div>
            <div className="bg-escalas text-white text-center flex-none flex items-center justify-center text-lg w-1/5">
                {escalas} escalas
            </div>
            <div className="bg-precio-taquilla text-white text-center flex-none flex items-center justify-center w-1/5 flex-col">
                <span className="text-white text-center text-2xs">Precio taquilla</span>
                <span className="text-white text-center text-2xl">{formatearCantidad(taquilla)}</span>
            </div>
            <div className="bg-precio-digital text-white text-center flex-none flex items-center justify-center w-1/5 flex-col">
                <span className="text-white text-center text-2xs">Precio digital desde</span>
                <span className="text-white text-center text-2xl">{formatearCantidad(digital)}</span>
            </div>
        </div>
    )
}

export default ItinerarioSalida