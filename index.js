const apiKey = "4e47e62fe6632eb46183dcb66ae1f5f4";  // Replace with your actual API key

const getWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => updateUI(data))
        .catch(error => console.error("Error fetching weather:", error));
};

const updateUI = (data) => {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("min_temp").innerText = data.main.temp_min;
    document.getElementById("max_temp").innerText = data.main.temp_max;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("feels_like").innerText = data.main.feels_like;
    document.getElementById("wind_speed").innerText = data.wind.speed;
    document.getElementById("wind_degrees").innerText = data.wind.deg;
};

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value.trim();
    if (city) getWeather(city);
});

// Default city load
getWeather("Delhi");
