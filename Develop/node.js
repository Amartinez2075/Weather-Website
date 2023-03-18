var lon = "33.7488° N";
var lat = "84.3877° W";
var city = "";
var state = "";
var country = "";
var limit = "";
var APIKey = "6d226fd5f41a35166d199f21ed2431ef";

// Function to fetch weather data using latitude and longitude
function fetchWeatherData(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6d226fd5f41a35166d199f21ed2431ef`, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow'
  })
  .then(function (res) {
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

// Function to fetch location data using city and state name
function fetchLocationData(city, state, country) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=6d226fd5f41a35166d199f21ed2431ef`, {
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
    const { lat, lon } = data.coord;
    // Call function to fetch weather data using latitude and longitude
    fetchWeatherData(lat, lon);
  })
  .catch(function (err) {
    console.error(err);
  });
};

// Function to fetch weather data for bulk files using a zip file
function fetchBulkFiles(zipFile) {
  fetch(`https://bulk.openweathermap.org/archive/weather_14.json.gz?appid=6d226fd5f41a35166d199f21ed2431ef`, {
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
    const { lat, lon } = data.city.coord;
    // Call function to fetch weather data using latitude and longitude
    fetchWeatherData(lat, lon);
  })
  .catch(function (err) {
    console.error(err);
  });
};



// Get input from user (City/State) (COMPLETE)
//A request to the 1st function to lat and lon (COMPLETE)
//Once thats finished, do a request with the lat and long to the weather api aka Open Weather (COMPLETE?)
//Now after that you want to render the data onscreen (Working)