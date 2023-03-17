var lon = ""
var lat = ""
var city = ""
var state code = ""
var county code = ""
var limit = ""
var APIKey = ""
var Weather = ""

// Get input from user (City/State)
//A request to the 1st function to lat and lon
//Once thats finished, do a request with the lat and long to the weather api aka Open Weather 
//Now after that you want to render the data onscreen

fetch('https://bulk.openweathermap.org/snapshot/hourly_zip_us.json.gz?appid={6d226fd5f41a35166d199f21ed2431ef',)
[
.function request(lat, lon)
fetch('https://api.openweathermap.org/data/2.5/weather?lat=&lon=&appid=6d226fd5f41a35166d199f21ed2431ef', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
}).then(function (res) {
    return res.json()
  }).then(function (data) {
    console.log(data, "data")
  })
]
[  Fetch('http://api.openweathermap.org/geo/1.0/direct?q=city name,state code,&limit=limit&appid={6d226fd5f41a35166d199f21ed2431ef}',{
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
  }).then(function (res) {
    return res.json()
  }).then(function (data) {
    console.log(data, "data")
  })]


// API finds, City Name, Lat and Lon, Weather, Wind

// This fetch finds city name, State and state

// Get input from user (City/State)
//A request to the 1st function to lat and lon
//Once thats finished, do a request with the lat and long to the weather api aka Open Weather 
//Now after that you want to render the data onscreen