const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ed35122904ca773398da42043a0e4973&query='+latitude +','+longitude
    request({url, json: true}, (error, {body}) =>{

        if(error){
            callback('Unable to reach the weather API', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, `The weather in ${body.location.name} is ${body.current.weather_descriptions[0]}. Currently, it is ${body.current.temperature} degrees`)
        }

    })
}
module.exports = forcast