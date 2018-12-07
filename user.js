// const request = require('request')
//
// function getUser(id, callback) {
//     const url= `https://jsonplaceholder.typicode.com/users/${id}`;
//     request (url, (error, response, body) => {
//         if(error || (response && response.statusCode !== 200)){
//             console.log('error')
//             // callback(null, 'error')
//         }else{
//             const user =JSON.parse(body)
//             callback(user);
//         }
//     })
// }
//
// module.exports = {
//     getUser
// }
const axios = require('axios');
const { writeFile } = require('fs');
const util = require('util');

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url)
        .then(response => response.data);
}

function getWeather(lat,lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    return axios.get(url)
        .then(response => response.data);
}

function saveToFile(obj) {
    const objToString = JSON.stringify(obj);
    new Promise((resolve, reject) => {
        writeFile('weather.json', objToString, error => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}

getUser(2)
    .then(user => {
        console.log(user.name);
        const { lat, lng } = user.address.geo;
        return getWeather(lat, lng);
    })
    .then(weather => {
        console.log(weather.main.temp);
        return weather;
    })
    .then(saveToFile)
    .catch(error => console.log(error.message));