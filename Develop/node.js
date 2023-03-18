var lon = "20.00";
var lat = "40.00";
var city = "";
var state = "";
var country = "";
var limit = "";
var APIKey = "6d226fd5f41a35166d199f21ed2431ef";
var Weather = "";

// Function to fetch weather data using latitude and longitude
function fetchWeatherData(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow'
  })
  .then(function (res) {
    return res.json();
  })
  .then(function (data)) {
    console.log(data, "data");
    // Call function to render weather data on screen
  //  renderWeatherData(data);
}}
;


// Function to fetch location data using city and state name
// function fetchLocationData(city, state, country) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${APIKey}`, {
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
  });

// Function to render weather data on screen
function renderWeatherData(data) {
  // Code to render weather data on screen
}

// Call function to fetch location data using city, state, and country name
fetchLocationData(city, state, country);

// Function to fetch weather data for bulk files using a zip file
function fetchBulkFiles(zipFile, APIKey) {
  fetch(`https://bulk.openweathermap.org/archive/${zipFile}?appid=${APIKey}`, {
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
  });
}


// Get input from user (City/State) (COMPLETE)
//A request to the 1st function to lat and lon (COMPLETE)
//Once thats finished, do a request with the lat and long to the weather api aka Open Weather (COMPLETE?)
//Now after that you want to render the data onscreen (Working)