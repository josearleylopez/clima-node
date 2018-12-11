// axios = require('axios');

const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


lugar.getLugarLatLng(argv.direccion).then((respuesta) => {
    console.log(respuesta);
}).catch((err) => {
    console.log(err);
});


clima.getClima(4.8087174, -75.690601).then((respuesta) => {
    console.log(respuesta);
}).catch((err) => {
    console.log(err);
});

// let encodedUrl = encodeURI(argv.direccion);

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
//     .then(respuesta => {

//         let location = respuesta.data.results[0];
//         let coordenadas = location.geometry.location;

//         console.log('Direccion', location.formatted_address);
//         console.log('Latitud', coordenadas.lat);
//         console.log('Longitud', coordenadas.lng);
//         // console.log(respuesta.data);
//         // console.log(JSON.stringify(respuesta.data, undefined, 2));
//         console.log(respuesta.status);
//     })
//     .catch(e => console.log('Error!', e));


const getInfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return `El clima en ${coordenadas.direccion} es de ${temperatura}`;

    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }
}

getInfo(argv.direccion).then((respuesta) => {
    console.log(respuesta);
}).catch((err) => {
    console.log(err);
});