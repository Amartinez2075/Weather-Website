var lon = "";
var lat = "";
var city = "";
var state = "";
var county = "";
var limit = "";
var APIKey = "6d226fd5f41a35166d199f21ed2431ef";
var Weather = "";

// Get input from user (City/State)
//A request to the 1st function to lat and lon
//Once thats finished, do a request with the lat and long to the weather api aka Open Weather 
//Now after that you want to render the data onscreen

// Function to fetch weather data using latitude and longitude


// Function to fetch weather data using latitude and longitude
function fetchWeatherData(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`, {
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
    renderWeatherData(data);
  });
}

// Function to fetch location data using city and state name
function fetchLocationData(city, state, limit) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=${limit}&appid=${APIKey}`, {
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
    const { lat, lon } = data[0];
    // Call function to fetch weather data using latitude and longitude
    fetchWeatherData(lat, lon);
  });
}

// Function to render weather data on screen
function renderWeatherData(data) {
  // Code to render weather data on screen
}

// Get input from user (City/State)
// Call function to fetch location data using city and state name
fetchLocationData(city, state, limit);

// Get input from user (City/State)
//A request to the 1st function to lat and lon
//Once thats finished, do a request with the lat and long to the weather api aka Open Weather 
//Now after that you want to render the data onscreen
function fetchBulkFiles (zipFile, APIKey) {
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