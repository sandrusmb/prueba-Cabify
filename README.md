## Instalar dependencias

Este proyecto está desarrollado con React usando npm para gestionar las dependencias. Para instalarlas, simplemente ejecuta

```
npm install
```

## Arrancar el proyecto

Una vez instaladas las dependencias, puedes arrancar el proyecto ejecutando

```
npm start
```

## Proyecto en producción

Para ejecutar el código en modo producción he creado la carpeta build ejecutando npm build. De esta forma la web estará disponible en `/build/public/` por tamto simplemente debes abrir el archivo index.html en el navegador.

## Estructura

shopping-cart
├── build
│ └── ...
├── public
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
├── src
│ ├── components
│ │ ├── App.js
│ │ │ └── Header.js
│ │ │ └── List.js
│ │ │ │ └── Shirt.js
│ │ │ │ └── Mug.js
│ │ │ │ └── Cap.js
│ │ │ └── Sumary.js
│ │ │ └── Discounts.js
│ │ │ └── Modal.js
│ ├── img
│ │ │ └── ...
│ ├── stylesheets
│ │ │ └── App.css
│ │ │ └── index.css
│ │ │ └── modal.scss
| └── index.js
