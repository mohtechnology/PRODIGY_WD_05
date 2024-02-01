function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('result');
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `<p>Temperature: ${temperature} °C</p><p>Condition: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('result').innerHTML = 'Error fetching weather data.';
        });
}
