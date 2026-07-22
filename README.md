# ClimaNow ☀️

**Panel meteorológico en tiempo real** — aplicación web que muestra el clima actual y el pronóstico de 7 días de cualquier ciudad del mundo.

Proyecto académico desarrollado con HTML, CSS y JavaScript puro (sin frameworks), consumiendo una **API pública y gratuita**.

---

## ✨ Características

- Búsqueda de clima por nombre de ciudad.
- Datos actuales: temperatura, sensación térmica, humedad, viento y precipitación.
- Pronóstico extendido a 7 días con iconos por condición.
- Accesos rápidos a ciudades populares.
- Diseño responsive (móvil, tablet y escritorio).
- Interfaz moderna con gradientes y efecto _glassmorphism_.

## 🔌 API utilizada

Este proyecto usa **[Open-Meteo](https://open-meteo.com/)**, una API meteorológica gratuita y de código abierto que **no requiere clave de acceso**:

| Endpoint | Uso |
|----------|-----|
| `geocoding-api.open-meteo.com/v1/search` | Convierte el nombre de la ciudad en coordenadas |
| `api.open-meteo.com/v1/forecast` | Obtiene el clima actual y el pronóstico |

## 📁 Estructura del proyecto

```
miapp/
├─ index.html   # Estructura de la interfaz
├─ style.css    # Estilos y diseño responsive
├─ script.js    # Lógica y consumo de la API
└─ README.md    # Documentación
```

## ▶️ Cómo ejecutar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.

También puedes publicarlo gratis con **GitHub Pages**:
`Settings > Pages > Branch: main`.

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (Grid, Flexbox, variables, media queries)
- JavaScript ES6+ (async/await, Fetch API)

---

_Datos meteorológicos proporcionados por Open-Meteo._
