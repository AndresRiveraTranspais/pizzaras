export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}
export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}
export const formatearCantidad = cantidad => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
export const conexion = ciudad => {
    const consultarWSPizzarras = async () => {
    //const url = 'http://192.168.20.33:8102';
    //const urlProd = 'http://www.ventastranspais.com.mx:8102'
    const url = 'http://ventas.transpais.com.mx/VentaInternaWebService/services/VentaInternaService'
    const headers = new Headers();
    console.log('ciudad:',ciudad)
    headers.append('Content-Type', 'application/xml');
    headers.append('SOAPAction', 'basicInvoke');
    //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
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
    const origen = '2162'
    const destino = '2275'
    const fecha = '2023-10-22'

    const data = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="ventaService">
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
    console.log('data', data);
    const respuesta = await fetch(url, {
        body: data,
        method: 'POST',
        mode: 'no-cors',
        headers: headers
    })
    return respuesta
     /*   .then(response => console.log(response))
        .catch(function (error) {
            return console.log(error);
        });*/
    }
 consultarWSPizzarras()
}