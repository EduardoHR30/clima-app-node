const axios = require('axios');

const getLugarLatLng = async direccion => {
    //                                                      //Transforma a un URL friendly.
    let encodedUrl = encodeURI(direccion);

    //                                                      //Espera a que se envie la respuesta y lo guarda.
    let respuesta = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCh4Zx1RHNup9vahzSp1yX0EqGOysWhwts`
        )
        //                                                  //Cuando no hay coincidencia, el status es "ZERO_RESULT".
    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let location = respuesta.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}