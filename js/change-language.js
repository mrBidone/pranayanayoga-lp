const translations = {
  ru: {
    title: "Занятия йогой в Барселоне с Яной Селицкой",
    name: "Яна Селицкая",
    description:
      "Превратите практику йоги в ваш личный ритуал покоя, где каждое движение открывает двери к новым ощущениям и возможностям.",
    telegramButton: "Перейти в телеграм канал",
  },
  en: {
    title: "Yoga lessons in Barcelona with Yana Selitskaya",
    name: "Yana Selickaya",
    description:
      "Turn your yoga practice into your personal ritual of peace, where every movement opens doors to new sensations and possibilities.",
    telegramButton: "My Telegram channel",
  },
  es: {
    title: "Clases de yoga en Barcelona con Yana Selitskaya",
    name: "Yana Selitskaya",
    description:
      "Convierte la práctica del yoga en tu ritual personal de paz, donde cada movimiento abre las puertas a nuevas sensaciones y posibilidades.",
    telegramButton: "Ir al canal de Telegram",
  },
};

const elements = {
  name: document.getElementById("name"),
  description: document.getElementById("description"),
  telegramButton: document.getElementById("telegramButton"),
};

function setupLanguageButtons(translations) {
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      applyTranslation(selectedLang, translations);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setInitialLanguage(translations);
  setupLanguageButtons(translations);
});

function setInitialLanguage(translations) {
  const savedLang = localStorage.getItem("selectedLanguage");
  const browserLang = navigator.language.slice(0, 2);

  let initialLang;

  if (savedLang && translations.hasOwnProperty(savedLang)) {
    initialLang = savedLang;
  } else if (translations.hasOwnProperty(browserLang)) {
    initialLang = browserLang;
  } else {
    initialLang = "en";
  }

  applyTranslation(initialLang, translations);
}

function applyTranslation(lang, translations) {
  if (translations.hasOwnProperty(lang)) {
    document.title =
      translations[lang].title ||
      "Yoga lessons in Barcelona with Yana Selitskaya";

    Object.keys(elements).forEach((key) => {
      if (elements[key] && translations[lang].hasOwnProperty(key)) {
        elements[key].textContent = translations[lang][key];
      }
    });
  } else {
    console.error(`Ошибка: Перевод для языка "${lang}" не найден.`);
  }

  document
    .querySelectorAll(".language-btn")
    .forEach((btn) => btn.classList.remove("isActiveLangBtn"));
  document
    .querySelector(`.language-btn[data-lang="${lang}"]`)
    .classList.add("isActiveLangBtn");

  localStorage.setItem("selectedLanguage", lang);
}
