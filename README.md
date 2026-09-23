<div align="center">

<img src="https://i.postimg.cc/KzXFGHjG/Chat-GPT-Image-13-sept-2026-11-02-16.png" alt="EL ATALAYA TV" width="160">

# 📺 EL ATALAYA TV

### Streaming Online · Series · Películas · Canales · Fútbol · Noticias

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](LICENSE)

**Tu punto de observación del entretenimiento**

[🌐 Ver Demo](https://celda-atalaya.github.io/television-en-streaming-el-atalaya/) · [🐛 Reportar Bug](../../issues) · [✨ Pedir Función](../../issues)

</div>

---

## 📖 Descripción

**EL ATALAYA TV** es una aplicación web de streaming **100% frontend** (sin backend, sin base de datos, sin servidor) que funciona directamente en el navegador. Incluye un catálogo completo de series clásicas, películas, canales de TV internacionales, deportes y noticias, con un **panel de control integrado** para que cada usuario agregue sus propias fuentes de video.

Todo se guarda en el **`localStorage`** del navegador, así que cada persona tiene su propia configuración personal sin depender de ningún servicio externo.

---

## ✨ Características

### 📚 Catálogo completo
- **Series clásicas**: Años 50, 70, 90 y 2000
- **Películas**: Viejas (1927-1975) y Nuevas (2008-2023)
- **Canales de TV**: Argentina + Internacionales
- **Fútbol**: 16 señales deportivas (ESPN, TyC, Fox Sports…)
- **Noticias**: 16 señales 24h (TN, C5N, CNN, BBC…)
- **IPTV automático**: +1000 canales públicos de todo el mundo (Argentina, Noticias, Deportes, Música)

### ▶️ Reproductor integrado
- Soporte para **HLS** (`.m3u8`) vía [hls.js](https://github.com/video-dev/hls.js)
- Soporte para **MP4**, **WebM**, **TS**, **MPD**
- Soporte para **embeds** (iframe)
- Detección automática del tipo de stream
- Manejo de errores con mensajes claros

### ⚙️ Panel de control
- Agregar canales/series/películas propias
- Guardar URLs de stream por contenido
- **Exportar** toda la configuración a JSON
- **Importar** configuración desde archivo
- Restablecer todo con un clic

### 🔍 Búsqueda y navegación
- Buscador en vivo (filtra series, películas y canales)
- Barra lateral con categorías y subcategorías
- Contadores dinámicos por categoría
- Filtros por tipo (VOD / Live)
- Punto verde indicando contenidos con fuente configurada

### 📱 Diseño
- **Responsive** (móvil, tablet, escritorio)
- Modo oscuro nativo con acentos dorados
- Animaciones suaves
- Interfaz en **español**

---

## 🚀 Instalación

### Opción 1 — Usar directamente (más simple)

1. Descargá el archivo `index.html`
2. Abrilo en tu navegador

> ⚠️ **Limitación**: Abrir con `file:///` bloquea algunas peticiones IPTV por CORS. Para uso completo, usá la Opción 2.

### Opción 2 — Publicar en GitHub Pages (recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/celda-atalaya/television-en-streaming-el-atalaya.git
cd television-en-streaming-el-atalaya

# 2. El archivo principal debe llamarse index.html
# 3. Subir cambios
git add .
git commit -m "Initial commit"
git push origin main
