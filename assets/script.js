
function getForecast (){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid==5c7e7da63239bdeab621911b842b41f7`)
    .then (response => {
        return response.json()
    })
    .then (response => {
        lat =(response[0].lat);
        lon = (response[0].lon);
        console.log(response)
    })

}



















// for (var i = 0; i < weatherForecast.list.length; i+=8) {
//     console.log(weatherForecast.list[i].dt_txt);
//   }