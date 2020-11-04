function getWeather() {

    // Ohrid
    let temp5 = document.getElementById("temp5");
    let desc5= document.getElementById("desc5");
    let loc5 = document.getElementById("loc5");

    // USER
    let userTemp = document.getElementById("userTemp");
    let userDesc= document.getElementById("userDesc");
    let userLoc = document.getElementById("userLoc");
    let userIco = document.getElementById("userIco");


    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "9b36077029be5c503dfe15fd47d70cad";

    //loc1.innerHTML = "Locating...";
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        

        // Ohrid
        latitude_oh = 41.1231;
        longitude_oh = 20.8016;    

    
        // User Geo
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url4 = api + "?lat=" + latitude_oh + "&lon=" + longitude_oh + "&appid=" + apiKey + "&units=metric";
        let usr = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=metric";


        fetch(url4)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp5.innerHTML = temp + "° C  ";
            desc5.innerHTML = data.name;
            loc5.innerHTML = data.weather[0].main;

        });      
  


    }
    function error() {
        loc2.innerHTML = "Unable to retrieve your location";

    }

}

getWeather();