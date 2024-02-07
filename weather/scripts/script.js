
function startWeatherTrack(){
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(ApiCallYr)
    }
}

function ApiCallYr(pos){
    let JsonData;
    fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`,{method: "GET"})
    .then((response) => response.json())
  .then((json) => {
    JsonData = json;
    console.log(json.properties)
});
JsonData.properties.timeseries.forEach(element => {
    console.log(element.data)
});
}