# DESPEJAVI

DESPEJAVI es una web pequeña y divertida para jugar a una ruleta de pruebas durante una despedida de soltero. Funciona sin servidor, sin backend y sin base de datos, y además puede instalarse como PWA en tu móvil.

## Cómo abrirlo desde Visual Studio Code

1. Abre la carpeta `DESPEJAVI` en Visual Studio Code.
2. Haz clic derecho sobre `index.html`.
3. Elige `Open with Live Server` o usa una extensión como Live Server para ver la web en el navegador.

## Cómo probarlo localmente

1. En la carpeta del proyecto, abre una terminal.
2. Ejecuta:

```bash
python -m http.server 8000
```

3. Abre en tu navegador:

```text
http://localhost:8000
```

## Cómo crear un repositorio de GitHub

1. Entra en GitHub.
2. Crea un nuevo repositorio llamado `despejavi`.
3. Sube los archivos de esta carpeta.
4. Haz commit y push.

## Qué archivos subir

Sube estos archivos y carpetas:

- `index.html`
- `styles.css`
- `script.js`
- `manifest.json`
- `service-worker.js`
- `README.md`
- `assets/`

## Cómo activar GitHub Pages

1. En tu repositorio de GitHub, entra en `Settings`.
2. Ve a `Pages`.
3. En `Source`, elige la rama principal `main` o `master`.
4. Guarda.
5. GitHub te dará una URL pública.

## Cómo obtener el enlace público

Cuando GitHub Pages quede activado, verás una dirección parecida a:

```text
https://tu-usuario.github.io/despejavi/
```

Copia esa URL y úsala en el móvil o en el navegador.

## Cómo abrirlo desde iPhone

1. Abre la URL en Safari.
2. Toca el botón de compartir.
3. Elige `Añadir a pantalla de inicio`.
4. La app se instalará como si fuera una app real.

## Cómo añadirlo a pantalla de inicio en iPhone

1. Abre la web en Safari.
2. Pulsa el botón de compartir.
3. Elige `Añadir a pantalla de inicio`.
4. Confirma y ya la tendrás en la pantalla de inicio.

## Cómo abrirlo desde Android

1. Abre la URL en Chrome.
2. Si aparece la opción de instalar, pulsa `Instalar`.
3. También puedes usar el menú de Chrome y elegir `Instalar app` o `Añadir a pantalla de inicio`.

## Cómo instalarlo como PWA en Android

1. Abre la web en Chrome.
2. Pulsa el menú de Chrome.
3. Busca `Instalar app` o `Añadir a pantalla de inicio`.
4. Confirma para dejarlo instalado.

## Dónde sustituir el logo

Coloca tu logo final en esta ruta:

```text
assets/images/logo.png
```

Si quieres usar un PNG con fondo transparente, funciona muy bien. Si aún no lo tienes, la app mostrará un placeholder bonito.

## Dónde poner `JaviMitico.jpg`

Coloca la foto principal aquí:

```text
assets/images/javimitico.png
```

Si no existe todavía, la app mostrará un placeholder atractivo en su lugar.

## Dónde poner las fotos de las pruebas

Las pruebas están definidas en `script.js` dentro del array `pruebas`.

Puedes cambiar las imágenes de cada prueba aquí:

```javascript
imagen: 'assets/images/prueba1.jpg'
```

Si no existen las fotos todavía, la app mostrará automáticamente un placeholder visual.

## Dónde modificar nombres, categorías y explicaciones

Todo está en `script.js` dentro del array `pruebas`.

Puedes cambiar:

- Nombre de la prueba
- Categoría
- Descripción
- Ruta de la imagen
- Si la prueba está completada o no

Ejemplo:

```javascript
{
  id: 1,
  nombre: 'PRUEBA 1',
  categoria: 'terra-mitica',
  descripcion: 'Haz una foto con tres desconocidos haciendo la misma pose.',
  imagen: 'assets/images/prueba1.jpg',
  completada: false,
  activa: true
}
```

## Importante para el uso real

Cuando tengas ya todas las imágenes y textos definitivos, solo tienes que:

- ponerlas en `assets/images/`
- actualizar el array `pruebas` en `script.js`
- guardar los cambios
- publicar de nuevo en GitHub Pages

Si quieres, puedes seguir usando esta misma app y cambiar solo los datos en un único sitio.
