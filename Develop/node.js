fetch('https://api.openweathermap.org/data/2.5/weather?lat=33.7488&lon=84.3877&appid=6d226fd5f41a35166d199f21ed2431ef', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
}).then(function (res) {
    return res.json()
  }).then(function (data) {
    console.log(data, "data")
  })
/* API finds, City Name, Lat and Lon, weather, wind

/*1*/
