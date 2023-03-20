var APIKey = "6d226fd5f41a35166d199f21ed2431ef";
// Function to fetch weather data using latitude and longitude
function fetchWeatherData(lat, lon) {
  console.log (lat,lon,) 
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

// GRABS CITY
function fetchLocationData(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=`+APIKey, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow'
  })
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data, "data");
    var cityName = document.getElementById("cityName");
    cityName.innerText = data.main.temp
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


//Need to, add a local storage to the data from lat,lon and city.
//Need to display, City Name, Date, Temp, Wind and Humidity. Temperature should be in Farienheight.
