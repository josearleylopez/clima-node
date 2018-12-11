axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la llave de busqueda ${direccion}`);
    }

    let location = respuesta.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coordenadas.lat,
        longitud: coordenadas.lng,
    }

}

//63823db823547cc69da6b424b25a34e0
module.exports = {
    getLugarLatLng
}