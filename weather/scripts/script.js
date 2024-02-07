
function startWeatherTrack(){
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(ApiCallYr)
    }
}

function ApiCallYr(pos){
    fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`,{method: "GET"}).then(Data => {console.log(Data.body)})
}