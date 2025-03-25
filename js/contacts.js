document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Отключаем стандартную отправку формы

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Пожалуйста, заполните все поля!";
            formStatus.style.color = "red";
            return;
        }

        // Имитация успешной отправки
        formStatus.textContent = "Сообщение отправлено!";
        formStatus.style.color = "green";

        // Очистка формы
        form.reset();
    });
});
