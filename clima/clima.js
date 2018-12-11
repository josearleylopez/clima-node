axios = require('axios');

const getClima = async(lat, lng) => {
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=63823db823547cc69da6b424b25a34e0`)
    return respuesta.data.main.temp;

    // let temperatura = respuesta.data.main.temp;
    // let coordenadas = respuesta.data.coord;

    // return {
    //     temperatura,
    //     latitud: coordenadas.lat,
    //     longitud: coordenadas.lon,
    // }

}

module.exports = {
    getClima
}