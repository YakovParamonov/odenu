// Бургер-меню и плавный скролл
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      document.body.classList.toggle("no-scroll");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        document.body.classList.remove("no-scroll");
      });
    });
  }

  // Плавный скролл по якорям на главной
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 72;
        const rect = target.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });
});
