import Reloj from './Reloj'
import Tiempo from './Tiempo'
const Header = ({terminal}) => {
  return (
    <div className=" bg-fondo-azul flex items-center">
        <Reloj 
            terminal={terminal}
        />
        <div className="flex-grow"></div>
        <Tiempo 
            terminal={terminal}
        />
  </div>
  )
}

export default Header