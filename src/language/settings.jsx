import pl from "./pl.json";
import en from "./en.json";

const defaultLanguage = "pl";
const dictionaries = { pl, en };


export function getLang() {
  if (typeof document === "undefined") return defaultLanguage;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("lang="));

  const lang = match ? decodeURIComponent(match.split("=")[1]) : defaultLanguage;

  return dictionaries[lang] ? lang : defaultLanguage;
}

export function setLang(value) {
  if (typeof document === "undefined") return;

  document.cookie = `lang=${value}; path=/; max-age=31536000`;

  
  window.location.reload();
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function getDict() {
  return dictionaries[getLang()] || dictionaries[defaultLanguage];
}

export function getString(key, fallback) {
  const value = getByPath(getDict(), key);
  return typeof value === "string" ? value : (fallback ?? key);
}

export function getArray(key, fallback = null) {
  const value = getByPath(getDict(), key);
  return value !== undefined ? value : fallback;
}