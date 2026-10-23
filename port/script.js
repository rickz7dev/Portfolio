const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const copyBtn = document.getElementById("copyBtn");
const copyText = document.getElementById("copyText");

/* ---------- Tema claro / escuro ---------- */
function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeIcon.className = dark ? "ri-sun-line" : "ri-moon-line";
}

themeBtn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  applyTheme(dark);
  try { localStorage.setItem("tema", dark ? "dark" : "light"); } catch (e) {}
});

let saved = null;
try { saved = localStorage.getItem("tema"); } catch (e) {}
applyTheme(saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);

