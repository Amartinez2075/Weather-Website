var lon = "10.99";
var lat = "44.34";
var country = "";
var limit = "";
var APIKey = "6d226fd5f41a35166d199f21ed2431ef";
var city;

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
  })
  .catch(function (err) {
    console.error(err);
  });
};

// Function to fetch location data using city name
function fetchLocationData(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`, {
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
call.fetchLocationData


const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent default form submission behavior
  const cityName = document.getElementById("city-input").value;
  fetchLocationData(cityName);
});


//But what you need to do is create a DOM element so that when you click a submit button, it will run the function to get the name of the city that is typed in.
//Once you store that city name , you can then call your fetchLocationData function making 
//sure to pass in that city name and then plug that cityname into your api string to get the data for that city