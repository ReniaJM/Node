// zadanie3
// function div (a,b) {
//     return new Promise((resolve, reject)=> {
//         const dive = a-b;
//         if (dive < 0) {
//             reject('rejected');
//         }else{
//             resolve(dive);
//         }
//     })
// }
// div(7,4)
//
//         .then(dive =>{
//          console.log("suma", dive)
//         })
//         .catch(error =>{
//             throw new  Error('error')
//         })

// zadanie4
// const request = require('request');
//
// function getUser (id){
//     const url= `https://jsonplaceholder.typicode.com/users/${id}`
//     return new Promise((resolve, reject) =>{
//         request (url, (error, response, body) => {
//             if(error || (response && response.statusCode !== 200)){
//                 reject('error')
//                 // callback(null, 'error')
//             }else{
//                 resolve(JSON.parse(body))
//
//             }
//         })
//
//     })
// }
//
// getUser(2)
//    .then(user => console.log(user.name))
//
// getUser(2)
//     .then (user => console.log(user.name))
//     .catch (error => console.log(error))
//
// getUser(34)
//     .then (user => console.log(user.name))
//     .catch (error => console.log(error))

// zadanie 5


const request = require('request');
const axios = require('axios')
const fs= require('fs')

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return new Promise((resolve, reject) => {
        axios(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject('user not found');
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
}
// zadanie6
function getWeather(lat,lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;

    return new Promise((resolve, reject) => {
        axios(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject('weather not found');
            } else {
                const weather= JSON.parse(body)
                resolve(weather);
            }
        });
    });
}

function saveToFile(obj){
    return new Promise((resolve, reject)=>{
        const objToString= JSON.parse(obj)
        fs.writeFile('weather.txt', objToString, error =>{
            if (error){
                reject(error)
            }else {
                resolve()
            }
        })
    })
}


getUser(2)
    .then(user => {
        console.log(user.name);
        const { lat, lng } = user.address.geo;
        console.log(lat, lng)
        return getWeather(lat, lng);

    })
    .then(weather => {
        console.log(weather.main.temp);
        return weather
    })
    .then (saveToFile)
    .catch(error => console.log(error));




// to jest do zadanie 5
//
// Promise.all([getUser(2),getUser(3),getUser(5),getUser(7),getUser(8),getUser(10)])
//     .then(users =>{
//       users.forEach(user =>{
//           console.log(user.name)
//       })
//     })
//     .then(getWeather(lng, lat))
//     .then (getWeather(lat, lng, weather =>{
//     console.log(weather)
//     })
//     .catch(error => console.log(error))
//     .finally =() => {
//         console.log('zrobione')
//     })


