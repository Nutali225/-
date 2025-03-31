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

        const apiKey = "949bad7479a732764406e8f19e7fa26a";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`;

        try {
            console.log("Запрос:", url);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Ответ API:", data);

            if (!data.weather || data.weather.length === 0) {
                throw new Error("Данные о погоде отсутствуют");
            }

            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            document.body.style.backgroundImage = getWeatherBackground(data.weather[0].main) || 'url("img/default.jpg")';

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
            console.error("Ошибка запроса:", error);
            weatherInfoDiv.innerHTML = `<p>Ошибка загрузки данных: ${error.message}</p>`;
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
