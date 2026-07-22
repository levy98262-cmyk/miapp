# ClimaNow ☀️

**Panel meteorológico en tiempo real** — aplicación web que muestra el clima actual y el pronóstico de 7 días de cualquier ciudad del mundo.

Proyecto final de la asignatura desarrollado con HTML, CSS y JavaScript puro (sin frameworks), consumiendo una **API pública y gratuita** y desplegado en **Vercel**.

> 🔗 **Web App desplegada:** _(agrega aquí tu URL de Vercel una vez publicada, p. ej. https://miapp.vercel.app)_

---

## 📑 Tabla de contenido
1. [Descripción](#descripción)
2. [Características](#-características)
3. [Stack técnico](#-stack-técnico)
4. [Arquitectura y flujo lógico](#-arquitectura-y-flujo-lógico)
5. [API utilizada](#-api-utilizada)
6. [Estructura del proyecto](#-estructura-del-proyecto)
7. [Cómo ejecutar en local](#️-cómo-ejecutar-en-local)
8. [Despliegue en Vercel](#-despliegue-en-vercel)
9. [Prompts principales usados con IA](#-prompts-principales-usados-con-ia)
10. [Autoevaluación](#-autoevaluación)

---

## Descripción

ClimaNow permite buscar cualquier ciudad y obtener al instante sus condiciones meteorológicas. La app resuelve el problema de consultar el clima de forma rápida y visual, sin publicidad ni registro, usando datos abiertos.

## ✨ Características

- Búsqueda de clima por nombre de ciudad.
- Datos actuales: temperatura, sensación térmica, humedad, viento y precipitación.
- Pronóstico extendido a 7 días con iconos según la condición.
- Accesos rápidos a ciudades populares.
- Manejo de errores (ciudad no encontrada, fallo de red).
- Diseño responsive (móvil, tablet y escritorio).
- Interfaz moderna con gradientes y efecto _glassmorphism_.

## 🛠️ Stack técnico

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Estructura | **HTML5 semántico** | Marcado accesible y claro |
| Estilos | **CSS3** (Grid, Flexbox, variables, media queries) | Diseño responsive sin dependencias |
| Lógica | **JavaScript ES6+** (async/await, Fetch API, Intl) | Consumo asíncrono de la API sin frameworks |
| Datos | **Open-Meteo API** (REST/JSON) | Fuente gratuita y sin clave |
| Hosting | **Vercel** | Despliegue continuo desde GitHub |
| Control de versiones | **Git + GitHub** | Historial y colaboración |

## 🧩 Arquitectura y flujo lógico

El problema se descompuso en pasos concretos y ordenados (pensamiento algorítmico):

1. **Entrada:** el usuario escribe una ciudad o pulsa un acceso rápido.
2. **Geocodificación:** se llama al endpoint de búsqueda para convertir el nombre en coordenadas (lat/lon).
3. **Validación:** si no hay resultados, se muestra un mensaje de error controlado.
4. **Consulta de clima:** con las coordenadas se piden el clima actual y el pronóstico de 7 días.
5. **Transformación:** los códigos WMO se traducen a descripción + icono mediante una tabla de mapeo.
6. **Render:** se pintan la tarjeta actual y la cuadrícula del pronóstico en el DOM.
7. **Estado inicial:** al cargar, la app muestra por defecto una ciudad para no dejar la pantalla vacía.

```
[Usuario] -> geocode() -> [lat, lon] -> getWeather() -> [JSON] -> render() -> [UI]
```

## 🔌 API utilizada

Este proyecto usa **[Open-Meteo](https://open-meteo.com/)**, una API meteorológica gratuita y de código abierto que **no requiere clave de acceso**:

| Endpoint | Uso |
|----------|-----|
| `geocoding-api.open-meteo.com/v1/search` | Convierte el nombre de la ciudad en coordenadas |
| `api.open-meteo.com/v1/forecast` | Obtiene el clima actual y el pronóstico |

## 📁 Estructura del proyecto

```
miapp/
├─ index.html    # Estructura de la interfaz
├─ style.css     # Estilos y diseño responsive
├─ script.js     # Lógica y consumo de la API
├─ vercel.json   # Configuración de despliegue estático
└─ README.md     # Documentación / bitácora
```

## ▶️ Cómo ejecutar en local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/levy98262-cmyk/miapp.git
   ```
2. Abre `index.html` en tu navegador (doble clic o Live Server).

## 🚀 Despliegue en Vercel

1. Inicia sesión en [vercel.com](https://vercel.com) con tu cuenta de GitHub.
2. **Add New → Project** e importa el repositorio `miapp`.
3. Framework Preset: **Other** (sitio estático). No requiere build command.
4. Pulsa **Deploy**. Vercel publicará la app y generará la URL pública.

## 🤖 Prompts principales usados con IA

Durante el desarrollo se usó un asistente de IA como copiloto. Prompts principales:

1. _"Créame una app web con aspecto profesional a nivel universitario que incluya una API pública y gratuita."_
2. _"Usa la API de Open-Meteo (sin clave) para mostrar clima actual y pronóstico de 7 días por ciudad."_
3. _"Aplica un diseño responsive moderno con gradientes y efecto glassmorphism."_
4. _"Agrega geocodificación para convertir el nombre de la ciudad en coordenadas y maneja los errores."_
5. _"Documenta el proyecto en el README con stack técnico, prompts y autoevaluación, y prepáralo para desplegar en Vercel."_

> _Nota: cada respuesta de la IA fue revisada, probada y ajustada manualmente antes de integrarla._

## 📝 Autoevaluación

**#AlgorithmicStrategies.** Dividí el problema en pasos claros y secuenciales (entrada → geocodificación → validación → consulta → transformación → render), lo que hizo el código más legible y fácil de depurar. El uso de una tabla de mapeo (códigos WMO) evitó largas cadenas condicionales.

**#ComputationalTools.** Apliqué terminología y herramientas adecuadas: consumo de una API REST con `fetch` y `async/await`, control de versiones con Git/GitHub, despliegue continuo con Vercel y CSS moderno (Grid/Flexbox). 

**Áreas de mejora.** A futuro añadiría geolocalización automática del navegador, cambio de unidades °C/°F y almacenamiento de la última ciudad consultada con `localStorage`.

---

_Datos meteorológicos proporcionados por Open-Meteo. Proyecto académico · 2026._
