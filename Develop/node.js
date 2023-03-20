var country = "";
var limit = "";
var APIKey = "6d226fd5f41a35166d199f21ed2431ef";
var city;

// Function to fetch weather data using latitude and longitude
function fetchWeatherData(lat, lon) {
  console.log (lat,lon,) 
  
  //console.log (`https://api.openweathermap.org/data/2.5/weather?lat=`+lat+`lon=`+lon+`&appid=6d226fd5f41a35166d199f21ed2431ef`)
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon=`+lon+`&appid=`+APIKey, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow'
  })
  .then(function (res) {
    //console.log (res.json())
      return res.json(); 
  })
  .then(function (data) {
    console.log(data, "data");
    // Call function to render weather data on screen
  })
  .catch(function (err) {
    console.error(err);
  });
};

// Function to fetch location data using city name
function fetchLocationData(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=6d226fd5f41a35166d199f21ed2431ef`, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow'
  })
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data, "data");
    // Get latitude and longitude from response data
    const lon = data.coord.lon;

    const lat = data.coord.lat;
    console.log (lat, lon)
    // Call function to fetch weather data using latitude and longitude
    fetchWeatherData(lat, lon);
  })
  .catch(function (err) {
    console.error(err);
  });
};



const submitBtn = document.getElementById("Submit");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent default form submission behavior
  const cityName = document.getElementById("city-input").value;
  fetchLocationData(cityName);
});


//But what you need to do is create a DOM element so that when you click a submit button, it will run the function to get the name of the city that is typed in. (done)
//Once you store that city name , you can then call your fetchLocationData function making (done)
//sure to pass in that city name and then plug that cityname into your api string to get the data for that city (done)