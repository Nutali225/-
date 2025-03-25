document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;


  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-theme");
      themeToggle.textContent = "🌙";
  }


  themeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-theme")) {
          body.classList.remove("dark-theme");
          themeToggle.textContent = "🌞";
          localStorage.setItem("theme", "light");
      } else {
          body.classList.add("dark-theme");
          themeToggle.textContent = "🌙";
          localStorage.setItem("theme", "dark");
      }
  });
});
