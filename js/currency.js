document.addEventListener("DOMContentLoaded", () => {
    const currencySelect = document.getElementById("currency");
    const getRatesButton = document.getElementById("getRates");
    const ratesDiv = document.getElementById("rates");

    getRatesButton.addEventListener("click", async () => {
        const currency = currencySelect.value;
        const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            ratesDiv.innerHTML = `
                <h3>Курс валют для ${currency}:</h3>
                <p>RUB: ${data.rates.RUB.toFixed(2)}</p>
                <p>EUR: ${data.rates.EUR.toFixed(2)}</p>
                <p>GBP: ${data.rates.GBP.toFixed(2)}</p>
            `;
        } catch (error) {
            ratesDiv.innerHTML = "<p>Ошибка загрузки данных</p>";
        }
    });
});
