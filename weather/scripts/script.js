
function startWeatherTrack(){
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(ApiCallYr)
    }
}

function ApiCallYr(pos){
    let JsonData;
    let timetable;
    fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`,{method: "GET"})
    .then((response) => response.json())
  .then((json) => {
    JsonData = json;
    timetable = json.properties.timeseries;
    console.log(json.properties)
});
timetable.timeseries.forEach(element => {
    console.log(element.data)
});
}