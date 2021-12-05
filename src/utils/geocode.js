const request = require("request")
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYnJhbWlkbyIsImEiOiJja3dmZ2doc2MwZWVnMnZwbTI2YzA5MGRpIn0.BcVkP9b16RCt-kUdMv_fvQ&limit=1'
    request({url, json: true}, (error, {body}) => {

        if(error){
            callback('Unable to connect to geocode API', undefined)
        }else if(body.features.length === 0){
            callback(`Unable to find location ${address}. Try another search!`, undefined)

        }else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })

        }

    })

}
module.exports = geocode