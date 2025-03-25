document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const convertButton = document.getElementById("convert");
    const resultText = document.getElementById("result");

    convertButton.addEventListener("click", async () => {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            resultText.textContent = "Введите корректную сумму!";
            return;
        }

        const from = fromCurrency.value;
        const to = toCurrency.value;
        const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const rate = data.rates[to];
            const convertedAmount = (amount * rate).toFixed(2);
            resultText.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
        } catch (error) {
            resultText.textContent = "Ошибка загрузки данных.";
        }
    });
});
