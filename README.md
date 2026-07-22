# ClimaNow ☀️


**Panel meteorológico en tiempo real** — aplicación web que muestra el clima actual y el pronóstico de 7 días de cualquier ciudad del mundo.


Proyecto final de la asignatura desarrollado con HTML, CSS y JavaScript puro (sin frameworks), consumiendo una **API pública y gratuita** y desplegado en **Vercel**.


> 🔗 **Web App desplegada:** https://miapp-wine.vercel.app


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
