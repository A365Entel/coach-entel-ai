# Coach Entel AI

Backend en Node.js + Frontend estático para analizar llamadas de ventas de fibra óptica usando Whisper y GPT‑4.

## Deploy rápido en Render.com

1. Haz fork o clona este repo.
2. Entra a https://dashboard.render.com , elige **New · Web Service** y conecta tu repositorio.
3. Render detectará automáticamente:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Agrega la variable de entorno **OPENAI_API_KEY** con tu clave de OpenAI.
5. ¡Deploy y listo!

El frontend vive en `/frontend/index.html`; puedes servirlo desde el propio backend o con GitHub Pages.
