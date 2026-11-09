# Oposiciones · Banco de preguntas (versión web)

Esta carpeta contiene la aplicación lista para publicarla gratis en GitHub Pages. Una vez publicada tendrás una dirección propia, por ejemplo `https://tuusuario.github.io/oposiciones/`, que se abre igual en el ordenador y en el móvil, y que puedes instalar como una app.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La aplicación completa (es el mismo `oposiciones.html`). |
| `manifest.webmanifest` | Permite instalarla en el móvil y el ordenador como una app. |
| `sw.js` | Hace que abra sin conexión y que las versiones nuevas lleguen solas. |
| `icon-192.png`, `icon-512.png` | Icono de la app. |

## Publicarla (una sola vez, unos 10 minutos)

1. **Crea una cuenta** en <https://github.com> si no la tienes. Es gratis.
2. **Crea un repositorio:** botón **New** (o <https://github.com/new>).
   - Nombre: `oposiciones` (será parte de la dirección).
   - Marca **Public**. Las páginas gratuitas de GitHub necesitan que el repositorio sea público. Solo se publica el programa: tus preguntas, notas, PDFs y la clave de la IA quedan guardados en tu navegador y nunca se suben a GitHub.
   - Pulsa **Create repository**.
3. **Sube los archivos:** en el repositorio, pulsa **uploading an existing file** (o **Add file → Upload files**). Arrastra todos los archivos de esta carpeta, también este LEEME.md (no la carpeta entera) y pulsa **Commit changes**.
4. **Activa la página:** **Settings → Pages**. En *Build and deployment*, elige *Source*: **Deploy from a branch**, *Branch*: **main** y carpeta **/ (root)**. Pulsa **Save**.
5. Espera uno o dos minutos y recarga esa pantalla. Arriba aparecerá la dirección: `https://tuusuario.github.io/oposiciones/`.

## Instalarla en el móvil

- **Android (Chrome):** abre la dirección, menú ⋮ → **Instalar aplicación** o **Añadir a pantalla de inicio**.
- **iPhone / iPad (Safari):** abre la dirección, botón **Compartir** → **Añadir a pantalla de inicio**. En iPhone conviene instalarla: así Safari no borra sus datos si pasas semanas sin abrirla.
- **Ordenador (Chrome o Edge):** icono de instalar en la barra de direcciones, o el botón **Instalar aplicación** en Ajustes.

## Pasar tus datos actuales a la versión web

Cada dirección tiene su propio almacén, así que la versión web empieza vacía:

1. En tu `oposiciones.html` local: **Ajustes → Exportar todo (JSON)**.
2. En la versión web: **Ajustes → Importar copia… → Reemplazar**.
3. Los PDFs originales no van en la copia. Si quieres poder ver las páginas originales o reprocesarlos, vuelve a importarlos en la versión web: las preguntas que ya estén en el banco no se duplican.

A partir de ahí, usa la versión web en todos tus dispositivos.

## Tener los mismos datos en el ordenador y en el móvil

Cada dispositivo guarda sus propios datos. Para juntarlos:

- **Entre ordenadores:** Ajustes → **Crear archivo de sincronización…** dentro de una carpeta de Google Drive, OneDrive o Dropbox. En el otro ordenador, **Usar uno existente…** con el mismo archivo. Se sincroniza al terminar cada test o con **Sincronizar ahora**.
- **Con el móvil:** en el móvil, Ajustes → **Enviar copia** (por ejemplo a Google Drive). En el otro dispositivo, **Importar copia… → Cancelar (Fusionar)**. Y al revés para devolver los cambios. Al fusionar se conserva la versión más reciente de cada pregunta y se suman los tests sin duplicarlos.

## Publicar una versión nueva

Cuando tengas un `oposiciones.html` nuevo:

1. Renómbralo a `index.html`.
2. En el repositorio: **Add file → Upload files**, súbelo y pulsa **Commit changes** (sustituye al anterior).
3. En uno o dos minutos la dirección muestra la versión nueva. Tus datos se conservan porque la dirección es la misma. Si la app instalada sigue mostrando la versión anterior, ciérrala del todo y ábrela otra vez.

## Sin conexión

- La aplicación y tus datos abren sin internet una vez visitada.
- Para importar PDFs y hacer OCR sin internet, pulsa una vez, con conexión, **Ajustes → Preparar uso sin conexión** en cada dispositivo.
- La revisión de normativa con IA siempre necesita internet.
