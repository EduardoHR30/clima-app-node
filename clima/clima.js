const axios = require('axios');

/*EJERCICIO*/
//----------------------------------------------------------------------------------------------------------------------
const getClima = async(lat, lng) => {
    let respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ce27bc33cab16f2f71a922999541a9a5`
    );
    // if (respuesta.data.cod === '400') {
    //     throw new Error(respuesta.data.message);
    // }

    return respuesta.data.main.temp;
}

//----------------------------------------------------------------------------------------------------------------------
/*FIN-EJERCICIO*/

module.exports = {
    getClima
}