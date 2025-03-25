document.addEventListener("DOMContentLoaded", () => {
    const tips = [
        "Перед поездкой сделайте копии важных документов.",
        "Всегда имейте при себе запас наличных в местной валюте.",
        "Заранее изучите основные фразы на языке страны.",
        "Проверяйте прогноз погоды перед поездкой.",
        "Всегда носите с собой бутылку воды и перекус.",
        "Установите офлайн-карты на телефон перед путешествием.",
        "Не забывайте о страховке перед поездкой.",
        "Используйте защиту данных при подключении к общественному Wi-Fi.",
        "Заряжайте все гаджеты перед вылетом или поездкой.",
        "Исследуйте местную кухню, но будьте осторожны с уличной едой."
    ];

    const tipButton = document.getElementById("getTip");
    const tipText = document.getElementById("tipText");

    tipButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipText.textContent = tips[randomIndex];
    });
});
