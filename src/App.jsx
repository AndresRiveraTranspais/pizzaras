import { useState, useEffect } from 'react'
import Header from './components/Header'
import Salidas from './components/Salidas'
import Llegadas from './components/Llegadas'
import { conexion } from './helpers'
function App() {
  const [salidas, setSalidas] = useState([])
  const [llegadas, setLlegadas] = useState([])
  const [terminal, setTerminal] = useState('')
  useEffect(() => {
    const consultarWSPizzarras = async (ciudad) => {
      /*const data = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:piz="pizarraService">
          <soapenv:Header/>
          <soapenv:Body>
              <piz:consultarCorridasPorClave>
                  <piz:in0>${ciudad}</piz:in0>
              </piz:consultarCorridasPorClave>
          </soapenv:Body>
          </soapenv:Envelope>
      `*/
      //const url = 'http://192.168.20.33:8102/PizarraWebService/services/PizarraService';
      //const url = 'http://www.ventastranspais.com.mx:8102/PizarraWebService/services/PizarraService'
      const url = 'http://ventas.transpais.com.mx/VentaInternaWebService/services/VentaInternaService'
      let headers = new Headers();
      //console.log('ciudad:',ciudad)
      headers.set('Content-Type', 'text/xml;  charset=utf-8');
      //headers.append("Accept", '*/*')
      //headers.append('Accept-Encoding', 'gzip, deflate, br');
      //headers.append("Connection", 'Keep-alive');
      //headers.append('Content-Lenght',data.length);
      //headers.set('Data-Type','xml')
      headers.append('SOAPAction', "#POST");
      //headers.append("Access-Control-Allow-Origin", "*");
      //headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
      //console.log('data', data);
      //console.log('headers', headers);
      
      const origen = '2162'
      const destino = '2275'
      const fecha = '2023-10-22'

    const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="ventaService">
    <soapenv:Header/>
    <soapenv:Body>
       <ven:consultarCorridas>
          <ven:in0>`+origen+`</ven:in0>
          <ven:in1>`+destino+`</ven:in1>
          <ven:in2>`+fecha+`T00:00:00-06:00</ven:in2>
          <ven:in3>false</ven:in3>
          <ven:in4>`+'BOOT_GTP'+`</ven:in4>
          <ven:in5>`+'6007GTP152'+`</ven:in5>
       </ven:consultarCorridas>
    </soapenv:Body>
 </soapenv:Envelope>`

 console.log(xml.length)
 var options = {
  method:"POST",
  contentType: "text/xml; charset=utf-8",
  //muteHttpExceptions:true,
  headers:{
      "SOAPAction": "#POST"
  },
  payload:xml
};
    const response = await fetch(url, options).then(response => console.log(response))
    .catch(function (error) {
        return console.log(error);
    }),
    responseCode = response.getResponseCode(),
    responseBody = response.getContentText()
    if (responseCode === 200) {
      const xmlR = responseBody
      console.log(xmlR)
    }
/*
      const respuesta = await fetch(url, {
          body: data,
          method: 'POST',
          headers: new Headers({ 
            'Content-Type':'application/xml',
            'Accept-Encoding': 'gzip, deflate, br',
            'SOAPAction' : '#POST'
            //'Content-Lenght':data.length,
            //'Connection': 'Keep-alive',
            //'Access-Control-Allow-Origin': '*'
          })//,
          //mode: 'cors',
          //cache: 'default'
          
      }).then(response => console.log(response))
          .catch(function (error) {
              return console.log(error);
          });
      }*/
    }
   consultarWSPizzarras('LIN')
   //setTerminal('Monterrey')
  }, [])
  useEffect(() => {
    const salidasPrueba =
      [
        {
          'id': 'destinoUno',
          'ciudad': 'Tamazunchale',
          'itinerarios': [
            {
              'id': 'salidaUno',
              'hora': '07:30',
              'escalas': '16',
              'taquilla': 999,
              'digital': 650,
              'marca': 'vista',
              'unidad': 9808
            },
            {
              'id': 'salidaDos',
              'hora': '08:30',
              'escalas': '16',
              'taquilla': 999,
              'digital': 650,
              'marca': 'ibus',
              'unidad': 9901
            }
          ]
        },
        {
          'id': 'destinoDos',
          'ciudad': 'Tampico',
          'itinerarios': [
            {
              'id': 'salidaUnd',
              'hora': '11:30',
              'escalas': '15',
              'taquilla': 999,
              'digital': 650,
              'marca': 'ibus',
              'unidad': 9902
            }
          ]
        },
      ]

    const llegadasPrueba =
      [
        {
          'id': 'destinoUno',
          'ciudad': 'Linares',
          'itinerarios': [
            {
              'id': 'salidaUno',
              'hora': '07:30',
              'marca': 'vista_mix',
              'unidad': 9804
            }
          ]
        },
        {
          'id': 'destinoDos',
          'ciudad': 'Valles',
          'itinerarios': [
            {
              'id': 'salidaUnd',
              'hora': '11:30',
              'marca':'vista',
              'unidad':9505
            }
          ]
        },
      ]
    setSalidas(salidasPrueba)
    setLlegadas(llegadasPrueba)
  }, [terminal])
  return (
    <div className="mx-auto bg-fondo-azul">
      <Header
        terminal={terminal}
      />
      <Salidas
        salidas={salidas}
      />
      <Llegadas
        llegadas={llegadas}
      />

    </div>
  )
}

export default App
/*      */