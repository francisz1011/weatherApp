
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


const getWeatherData = (city) => {
  
  
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d116eee4dmsh9bfc912645b9696p1f4dadjsnda811014ba5d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

 return fetch(` https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1`, options)
	.then(response => response.json())
	.then(data => data)
	.catch(error => {
		console.error(error);
	});
 
  
}


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)
  

}


const showWeatherData = (weatherData) => {
  

  document.getElementById('city-name').innerText = weatherData.location.name
  document.getElementById('weather-type').innerText = weatherData.current.condition.text
  document.getElementById('temp').innerText = weatherData.current.temp_c
  document.getElementById('feels-like').innerText = weatherData.current.feelslike_c
  document.getElementById('humidity').innerText = weatherData.current.humidity
}


 