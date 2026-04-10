
Model 

fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m") 
  .then(response => response.json()) 
  .then(data => { 
    console.log(data); 
  }) 
  .catch(error => { 
    console.log("Error:", error); 
  });
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weathercode,windspeed_10m")
  .then(response => response.json())
  .then(data => {
    const temp = data.hourly.temperature_2m[0];
    const code = data.hourly.weathercode[0];
    const wind = data.hourly.windspeed_10m[0];

    document.getElementById("output").innerHTML =
      "Temperature: " + temp + "°C<br>" +
      "Condition code: " + code + "<br>" +
      "Wind speed: " + wind + " km/h";
  });


View 
<!DOCTYPE html> 

<html> 
<head> 
    <title>Tyler First Webpage</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head> 

<body>
    <h1>Tyler Allman</h1> 
    <h2>Welcome to my very first webpage!</h2>
    <h3>About myself</h3>
</body>
<style>
.dark-mode {
    background-color: black;
    color: white;
}
</style>
<body id="background"></body>
   <main>
    <p>
        My name is Tyler and I like playing games. 
        When I'm not playing games, I'll be watching TV. 
        My birthday is the 23rd of March.
        Also, when I get my license I plan on working at the movie theaters.
        I am also good at math.
    </p>
    <p2>
        My favorite music genre is probably rock.
        I don't know who I'd say my favorite band/singer is, but I really like Michael Jackson.
        My favorite drink is Mountain dew, and my favorite candy is chocolate.
        I'm not good at Chess, but I play sometimes.
        And that's all about me I can really think of
    </p2>
    <ul>
        List of my interests:
        <li>Pokemon</li>
        <li>The Binding of Isaac</li>
        <li>Mewgenics</li>
    </ul>
    <a href="https://archive.org">
        Favorite Website
    </a>
    <hr>
    <a href="About.html">
        Click here for next page.
    </a>
    <button onclick="darkMode()">Toggle dark mode</button>
    <footer>Tyler Allman Copyright 2026</footer>
    <img src="https://img.sanishtech.com/u/863ee6a69f1fe13f3f167a3811922580.jpeg">
    <script>
        function darkMode(){
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
    </script>
    <div id="output"></div>
</main>

<!DOCTYPE html>
<head>
    <h1>Welcome to my About Page!</h1>
</head>
body {
    background-color:#FFFACD;
}
h1 {
    font-family:sans-serif;
    text-align:center;
}
h2 {
    font-family:sans-serif;
    font-size:18px;
    text-align:center;
}
h3 {
    font-family:sans-serif;
    text-align:center;
}
p {
    margin:25px;
    font-family:sans-serif;
}
p2 {
    margin:30px;
    font-family:sans-serif;
}
ul {
    border:dotted;
    font-family:sans-serif;
}
footer {
    color:gray;
    font-style:italic;
}



Controller 
<button onclick="darkMode()">Toggle dark mode</button>
<a href="About.html">
        Click here for next page.
    </a>
<a href="https://archive.org">
        Favorite Website
    </a>
Design Patterns I Used
Getting the data using fetch, using javascript to turn it into an output, then calling it in html
