const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp} °C`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



//console.log(argv.direccion);

//                                                          //Transforma a un URL friendly.
// let encodedUrl = encodeURI(argv.direccion)
//     //                                                      //Especificar el url del servicio a llamar.
// axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCh4Zx1RHNup9vahzSp1yX0EqGOysWhwts`
//     )
//     .then(resp => {
//         //                                                  //El el segundo argumento es un replaced.
//         //                                                  //      El tercero es el espaciado.

//         /*EJERCICIO*/
//         //Imprimir en consola el formatted_addres así como la longitud y latitud.
//         //--------------------------------------------------------------------------------------------------------------
//         let location = resp.data.results[0];

//         console.log(`Dirección: ${location.formatted_address}`);
//         console.log(`lat: ${location.geometry.location.lat}`);
//         console.log(`lon  ${location.geometry.location.lng}`);

//         //--------------------------------------------------------------------------------------------------------------
//         /*FIN-EJERCICIO*/

//         //console.log(JSON.stringify(resp.data, undefined, 2));
//         //console.log(resp.status);
//     .catch(e => console.log('Error!!!', e));
//     })