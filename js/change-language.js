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

  let initialLang =
    savedLang ||
    (["ru", "en", "es"].includes(browserLang) ? browserLang : "en");

  applyTranslation(initialLang, translations);
}

function applyTranslation(lang, translations) {
  // Изменяем заголовок HTML страницы
  // document.title =
  //   translations[lang].title ||
  //   "Yoga lessons in Barcelona with Yana Selitskaya"; // Резервный заголовок на случай отсутствия данных

  // Обновляем текстовые элементы на странице
  Object.keys(elements).forEach((key) => {
    if (elements[key] && translations[lang][key]) {
      elements[key].textContent = translations[lang][key];
    }
  });

  // Обновляем активную кнопку выбора языка
  document
    .querySelectorAll(".language-btn")
    .forEach((btn) => btn.classList.remove("isActiveLangBtn"));
  document
    .querySelector(`.language-btn[data-lang="${lang}"]`)
    .classList.add("isActiveLangBtn");

  // Сохраняем выбранный язык в localStorage
  localStorage.setItem("selectedLanguage", lang);
}
