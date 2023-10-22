import {useState, useEffect} from 'react'
import EstadoDelTiempo from './EstadoDelTiempo'
import { Temperatura } from './Temperatura'

const Tiempo = ({terminal}) => {
  //const [data, setData] = useState([])
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')
  const [temp, setTemp] = useState('')
  useEffect(() => {
    console.log(terminal)
    if(terminal != '') {
      const fetchData = async () => {
        const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
        const REACT_APP_API_KEY = '8cb1d9b9dedbedd48bccc2d34ad29643'
        const REACT_APP_ICON_URL = 'https://openweathermap.org/img/wn/'
        await fetch(`${REACT_APP_API_URL}?q=${terminal},mx&units=metric&appid=${REACT_APP_API_KEY}&lang=es`)
        .then(res => res.json())
        .then(result => {
          //setData(result)
          setIcon(REACT_APP_ICON_URL+result.weather[0].icon+'@2x.png')
          setTemp(result.main.temp);
          setDescription(result.weather[0].description)
          console.log(result)
        })
      }
      fetchData()
    }
  },[terminal])

  return (
    <div className="flex-none bg-fondo-azul border-white rounded-xl m-10 p-3 px-10 font-medium text-white border flex items-center space-x-4">
      <EstadoDelTiempo 
        icon={icon}
        description={description}
        terminal={terminal}
      />
      <Temperatura
        temp={temp}
      />
    </div>
  )
}

export default Tiempo