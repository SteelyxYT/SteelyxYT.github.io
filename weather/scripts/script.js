let currentPosition;

function handlePositionUpdate(position) {
  // Update the variable or call another function with the new position
  currentPosition = position;
  console.log('New position:', currentPosition);
}

function startWeatherTrack() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(handlePositionUpdate);
  }
}

function ApiCallYr() {
  let timetable;

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};

  document.getElementById("jsOutput").innerText = "";
  fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${currentPosition.coords.latitude}&lon=${currentPosition.coords.longitude}&altitude=${Math.round(currentPosition.coords.altitude)}`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((json) => {
      let Units = json.properties.meta.units;
      timetable = json.properties.timeseries;
      console.log(json);
      timetable.forEach((element) => {
        let date = new Date(element.time);
        console.log(
          `\u001b[1mTime: ${date.toLocaleDateString("nb-NO", options)}\u001b[0m\nlufttrykk på sjø nivå: ${element.data.instant.details.air_pressure_at_sea_level}${Units.air_pressure_at_sea_level}\nluft temperatur: ${element.data.instant.details.air_temperature} ${Units.air_temperature}\nskyområdefraksjon: ${element.data.instant.details.cloud_area_fraction}${Units.cloud_area_fraction}\nrelativ fuktighet: ${element.data.instant.details.relative_humidity}${Units.relative_humidity}\nvind fra retning: ${element.data.instant.details.wind_from_direction}${Units.wind_from_direction}\nvindhastighet: ${element.data.instant.details.wind_speed}${Units.wind_speed}\n\n\u001b[1mNeste time\u001b[0m\nnedbør: ${element.data.next_1_hours.details.precipitation_amount}${Units.precipitation_amount}\nsjanse av nedbør: ${element.data.next_1_hours.details.probability_of_precipitation}${Units.probability_of_precipitation}\nsjanse av lyn: ${element.data.next_1_hours.details.probability_of_thunder}${Units.probability_of_thunder}\nvær: ${element.data.next_1_hours.summary.symbol_code.replace(/_/g, ' ')}\n\n\u001b[1mNeste 6 timer\u001b[0m\nnedbør: ${element.data.next_6_hours.details.precipitation_amount}${Units.precipitation_amount}\nsjanse av nedbør: ${element.data.next_6_hours.details.probability_of_precipitation}${Units.probability_of_precipitation}\nsjanse av lyn: ${element.data.next_6_hours.details.probability_of_thunder}${Units.probability_of_thunder}\nvær: ${element.data.next_6_hours.summary.symbol_code.replace(/_/g, ' ')}\n\n\u001b[1mNeste 6 timer\u001b[0m\nnedbør: ${element.data.next_12_hours.details.precipitation_amount}${Units.precipitation_amount}\nsjanse av nedbør: ${element.data.next_12_hours.details.probability_of_precipitation}${Units.probability_of_precipitation}\nsjanse av lyn: ${element.data.next_12_hours.details.probability_of_thunder}${Units.probability_of_thunder}\nvær: ${element.data.next_12_hours.summary.symbol_code.replace(/_/g, ' ')}\n\n`
        );
        document.getElementById("jsOutput").innerHTML += `<strong>Time: ${date.toLocaleDateString("nb-NO", options)}</strong><br>lufttrykk på sjø nivå: ${element.data.instant.details.air_pressure_at_sea_level}${Units.air_pressure_at_sea_level}<br>luft temperatur: ${element.data.instant.details.air_temperature} ${Units.air_temperature}<br>skyområdefraksjon: ${element.data.instant.details.cloud_area_fraction}${Units.cloud_area_fraction}<br>relativ fuktighet: ${element.data.instant.details.relative_humidity}${Units.relative_humidity}<br>vind fra retning: ${element.data.instant.details.wind_from_direction}${Units.wind_from_direction}<br>vindhastighet: ${element.data.instant.details.wind_speed}${Units.wind_speed}<br><br><strong>Neste time</strong><br>nedbør: ${element.data.next_1_hours.details.precipitation_amount}${Units.precipitation_amount}<br>sjanse av nedbør: ${element.data.next_1_hours.details.probability_of_precipitation}${Units.probability_of_precipitation}<br>sjanse av lyn: ${element.data.next_1_hours.details.probability_of_thunder}${Units.probability_of_thunder}<br>vær: ${element.data.next_1_hours.summary.symbol_code.replace(/_/g, ' ')}<br><br><strong>Neste 6 timer</strong><br>nedbør: ${element.data.next_6_hours.details.precipitation_amount}${Units.precipitation_amount}<br>sjanse av nedbør: ${element.data.next_6_hours.details.probability_of_precipitation}${Units.probability_of_precipitation}<br>sjanse av lyn: ${element.data.next_6_hours.details.probability_of_thunder}${Units.probability_of_thunder}<br>vær: ${element.data.next_6_hours.summary.symbol_code.replace(/_/g, ' ')}<br><br><strong>Neste 12 timer</strong><br>nedbør: ${element.data.next_12_hours.details.precipitation_amount}${Units.precipitation_amount}<br>sjanse av nedbør: ${element.data.next_12_hours.details.probability_of_precipitation}${Units.probability_of_precipitation}<br>sjanse av lyn: ${element.data.next_12_hours.details.probability_of_thunder}${Units.probability_of_thunder}<br>vær: ${element.data.next_12_hours.summary.symbol_code.replace(/_/g, ' ')}<br><br>`
      });

    });
}
startWeatherTrack()
