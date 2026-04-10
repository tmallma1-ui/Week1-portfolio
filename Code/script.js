fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m") 
  .then(response => response.json()) 
  .then(data => { 
    console.log(data); 
  }) 
  .catch(error => { 
    console.log("Error:", error); 
  });fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weathercode,windspeed_10m")
  .then(response => response.json())
  .then(data => {
    const temp = data.hourly.temperature_2m[0];
    const code = data.hourly.weathercode[0];
    const wind = data.hourly.windspeed_10m[0];

    document.getElementById("weather").innerHTML =
      "Temperature: " + temp + "°C<br>" +
      "Condition code: " + code + "<br>" +
      "Wind speed: " + wind + " km/h";
  });

