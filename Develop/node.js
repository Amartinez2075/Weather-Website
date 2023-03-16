fetch(https://api.openweathermap.org/data/2.5/weather?lat=&lon=&appid=6d226fd5f41a35166d199f21ed2431ef)
    {method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error}
})

fetch(http://api.openweathermap.org/geo/1.0/direct?q=city name,state code,country code&limit=limit&appid=6d226fd5f41a35166d199f21ed2431ef)
    {method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error}
})

/* Well I need an api link to get me the city name Temp, wind, humidity, and forecast */

var cites = [
{
      City: "Atlanta",
      City: "Denver",
      City: "Seattle",
      City: "San Francisco",
      City: "Orland",
      City: "New York",
      City: "Chicago",
      City: "Austin", 
    },
],
/*1*/
