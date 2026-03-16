const header = document.getElementById("header");
const btn = document.getElementById("btnMitarbeiter");
const section = document.getElementById("mitarbeiter");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.height = "80px";
    header.style.position = "fixed";
    header.classList.add("sticky");
  } else {
    header.style.height = "100vh";
    header.style.position = "absolute";
    header.classList.remove("sticky");
  }
});

btn.addEventListener("click", () => {
  section.scrollIntoView({
    behavior: "smooth"
  });
});