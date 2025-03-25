document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city");
    const getWeatherButton = document.getElementById("getWeather");
    const weatherInfoDiv = document.getElementById("weatherInfo");

    getWeatherButton.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) {
            weatherInfoDiv.innerHTML = "<p>Введите название города</p>";
            return;
        }

        const apiKey = "ВАШ_API_КЛЮЧ"; // Замените на свой API-ключ OpenWeather
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
            
            document.body.style.backgroundImage = getWeatherBackground(data.weather[0].main);

            weatherInfoDiv.innerHTML = `
                <h3>Погода в ${data.name}:</h3>
                <img src="${icon}" alt="Погода">
                <p>${data.weather[0].description}</p>
                <p>Температура: ${data.main.temp}°C</p>
                <p>Влажность: ${data.main.humidity}%</p>
                <p>Ветер: ${data.wind.speed} м/с</p>
                <p>Восход: ${sunrise}</p>
                <p>Закат: ${sunset}</p>
            `;
        } catch (error) {
            weatherInfoDiv.innerHTML = "<p>Ошибка загрузки данных</p>";
        }
    });

    function getWeatherBackground(weather) {
        switch (weather) {
            case "Clear": return 'url("img/sunny.jpg")';
            case "Clouds": return 'url("img/cloudy.jpg")';
            case "Rain": return 'url("img/rainy.jpg")';
            case "Snow": return 'url("img/snowy.jpg")';
            default: return 'url("img/default.jpg")';
        }
    }
});
