// theme switcher
const bodyElement = document.body;
const btnTheme = document.querySelector("#btn-theme");

btnTheme.addEventListener("click", () => {
  const mode =
    bodyElement.getAttribute("data-theme") === "dark" ? "light" : "dark";

  bodyElement.setAttribute("data-theme", mode);
});

// scroll reveal
ScrollReveal().reveal(".project", {
  origin: "bottom",
  duration: 800,
  delay: 200,
  easing: "ease-out",
  scale: 0.85,
  interval: 100,
});

ScrollReveal().reveal(".ol-cont", {
  origin: "bottom",
  duration: 1000,
  delay: 200,
  easing: "ease-out",
  scale: 0.8,
});

// idiom switcher
const btnIdiom = document.querySelector("#btn-idiom");
const elements = document.querySelectorAll("[data-translate]");

const savedLang = localStorage.getItem("language") || "es";
bodyElement.setAttribute("data-idiom", savedLang);

function loadTranslations(lang) {
  fetch("./translate.json")
    .then((res) => res.json())
    .then((translations) => {
      elements.forEach((elem) => {
        const valueTranslate = elem.getAttribute("data-translate");
        elem.innerHTML = translations[lang][valueTranslate];
      });
    });
}

loadTranslations(savedLang);

btnIdiom.addEventListener("click", () => {
  // recuperando lang a cambiar
  const lang = bodyElement.getAttribute("data-idiom") === "es" ? "en" : "es";
  localStorage.setItem("language", lang);

  fetch("./translate.json")
    .then((res) => res.json())
    .then((translations) => {
      // cambiadndo data-idiom a lang a cambiar
      bodyElement.setAttribute("data-idiom", lang);

      elements.forEach((elem) => {
        const valueTranslate = elem.getAttribute("data-translate");
        elem.innerHTML = translations[lang][valueTranslate];
      });
    });

  // type-effect
  const subtitle = document.querySelector(".efecto-escribir");

  if (lang === "es") {
    subtitle.style.width = "47ch";
    subtitle.style.animation = "typing-es 5s 1s steps(47) infinite backwards";
  } else {
    subtitle.style.width = "42ch";
    subtitle.style.animation = "typing-en 5s 1s steps(42) infinite backwards";
  }
});

// burga menu
const burgerButton = document.querySelector(".burga-button");
const lines = burgerButton.querySelectorAll(".line");
const menu = document.querySelector("#menu");

burgerButton.addEventListener("click", () => {
  
  lines[0].classList.toggle("line-transform-1"); 
  lines[1].classList.toggle("line-transform-2"); 
  lines[2].classList.toggle("line-transform-3"); 

  menu.classList.toggle("flex");
});
