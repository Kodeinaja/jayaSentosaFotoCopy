// =========================
// KEEP: /assets/js/script.js
// (No dark dependency, safe for GitHub preview)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(el => observer.observe(el));

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Terima kasih. Tim kami akan menghubungi Anda.");
      form.reset();
    });
  }
});
