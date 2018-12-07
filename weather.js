const request = require('request')

function getWeather(lat,lng,callback) {
    const url= `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=%7bLAT%7d&lon=%7bLNG%7d`;
    request (url, (error, response, body) => {
        if(error || (response && response.statusCode !== 200)){
            console.log('error')
            // callback(null, 'error')
        }else{
            const user =JSON.parse(body)
            callback(user);
        }
    })
}

module.exports = {
    getWeather
}