// zadanie 4 wykłąd 3
const {argv} = require('yargs');
const {getUser} = require('./user')
const {getWeather} = require('./weather')

getUser(argv.id, (user) =>{
    const {name, address}= user;
    const {lng, lat} = address.geo;
    console.log(name)
    console.log(lng)
    console.log(lat)
    getWeather(lat, lng, weather =>{
        console.log(weather)
    })
})






