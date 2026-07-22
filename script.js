/*
 * ClimaNow - Panel meteorologico
 * API publica y gratuita: Open-Meteo (https://open-meteo.com/)
 *   - Geocoding: https://geocoding-api.open-meteo.com/v1/search
 *   - Forecast:  https://api.open-meteo.com/v1/forecast
 * No requiere clave de API.
 */

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// Mapa de codigos WMO a descripcion + icono
const WMO = {
  0:  ["Despejado", "\u2600\uFE0F"],
  1:  ["Mayormente despejado", "\uD83C\uDF24\uFE0F"],
  2:  ["Parcialmente nublado", "\u26C5"],
  3:  ["Nublado", "\u2601\uFE0F"],
  45: ["Niebla", "\uD83C\uDF2B\uFE0F"],
  48: ["Niebla con escarcha", "\uD83C\uDF2B\uFE0F"],
  51: ["Llovizna ligera", "\uD83C\uDF26\uFE0F"],
  53: ["Llovizna moderada", "\uD83C\uDF26\uFE0F"],
  55: ["Llovizna intensa", "\uD83C\uDF27\uFE0F"],
  61: ["Lluvia ligera", "\uD83C\uDF26\uFE0F"],
  63: ["Lluvia moderada", "\uD83C\uDF27\uFE0F"],
  65: ["Lluvia intensa", "\uD83C\uDF27\uFE0F"],
  71: ["Nieve ligera", "\uD83C\uDF28\uFE0F"],
  73: ["Nieve moderada", "\uD83C\uDF28\uFE0F"],
  75: ["Nieve intensa", "\u2744\uFE0F"],
  80: ["Chubascos ligeros", "\uD83C\uDF26\uFE0F"],
  81: ["Chubascos moderados", "\uD83C\uDF27\uFE0F"],
  82: ["Chubascos violentos", "\u26C8\uFE0F"],
  95: ["Tormenta", "\u26C8\uFE0F"],
  96: ["Tormenta con granizo", "\u26C8\uFE0F"],
  99: ["Tormenta fuerte con granizo", "\u26C8\uFE0F"]
};

function describe(code) {
  return WMO[code] || ["Condicion desconocida", "\uD83C\uDF10"];
}

// Referencias del DOM
const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");
const quick = document.getElementById("quick-cities");

function setStatus(msg, isError) {
  statusEl.textContent = msg || "";
  statusEl.classList.toggle("error", !!isError);
}

// 1) Convierte el nombre de ciudad en coordenadas
async function geocode(city) {
  const url = GEO_URL + "?name=" + encodeURIComponent(city) +
    "&count=1&language=es&format=json";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al buscar la ciudad.");
  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("No se encontro la ciudad. Intenta con otro nombre.");
  }
  return data.results[0];
}

// 2) Obtiene el clima actual y el pronostico
async function getWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    timezone: "auto",
    forecast_days: "7"
  });
  const res = await fetch(FORECAST_URL + "?" + params.toString());
  if (!res.ok) throw new Error("Error al obtener el clima.");
  return res.json();
}

// 3) Pinta los datos en pantalla
function render(place, weather) {
  const c = weather.current;
  const [desc, icon] = describe(c.weather_code);

  const parts = [place.name];
  if (place.admin1) parts.push(place.admin1);
  if (place.country) parts.push(place.country);

  document.getElementById("place-name").textContent = place.name;
  document.getElementById("place-meta").textContent = parts.slice(1).join(", ") || "\u2014";
  document.getElementById("current-icon").textContent = icon;
  document.getElementById("current-temp").textContent = Math.round(c.temperature_2m);
  document.getElementById("current-desc").textContent = desc;
  document.getElementById("feels-like").textContent = Math.round(c.apparent_temperature) + "\u00B0";
  document.getElementById("humidity").textContent = c.relative_humidity_2m + "%";
  document.getElementById("wind").textContent = Math.round(c.wind_speed_10m) + " km/h";
  document.getElementById("precip").textContent = c.precipitation + " mm";

  const grid = document.getElementById("forecast-grid");
  grid.innerHTML = "";
  const days = weather.daily.time;
  const dowFmt = new Intl.DateTimeFormat("es", { weekday: "short" });

  for (let i = 0; i < days.length; i++) {
    const date = new Date(days[i] + "T12:00:00");
    const [, dayIcon] = describe(weather.daily.weather_code[i]);
    const hi = Math.round(weather.daily.temperature_2m_max[i]);
    const lo = Math.round(weather.daily.temperature_2m_min[i]);

    const el = document.createElement("div");
    el.className = "day";
    el.innerHTML =
      '<div class="dow">' + dowFmt.format(date) + '</div>' +
      '<div class="ic">' + dayIcon + '</div>' +
      '<div class="hi">' + hi + '\u00B0</div>' +
      '<div class="lo">' + lo + '\u00B0</div>';
    grid.appendChild(el);
  }

  resultEl.classList.remove("hidden");
}

// Flujo principal
async function search(city) {
  if (!city || !city.trim()) {
    setStatus("Escribe el nombre de una ciudad.", true);
    return;
  }
  setStatus("Buscando \"" + city + "\"...");
  resultEl.classList.add("hidden");
  try {
    const place = await geocode(city.trim());
    const weather = await getWeather(place.latitude, place.longitude);
    render(place, weather);
    setStatus("");
  } catch (err) {
    setStatus(err.message || "Ocurrio un error inesperado.", true);
  }
}

// Eventos
form.addEventListener("submit", function (e) {
  e.preventDefault();
  search(input.value);
});

quick.addEventListener("click", function (e) {
  const btn = e.target.closest("button[data-city]");
  if (!btn) return;
  input.value = btn.dataset.city;
  search(btn.dataset.city);
});

// Carga inicial con una ciudad por defecto
document.addEventListener("DOMContentLoaded", function () {
  input.value = "Bogota";
  search("Bogota");
});
