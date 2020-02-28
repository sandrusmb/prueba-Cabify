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

## Decisiones

Realicé el proyecto con React porque es el Framework de JavaScript con el que más he trabajado.

He creado un componente de clase principal que es App.js donde se centralizan los estados de todos los demás componentes que son de tipo funcional.

Mediante props bajo los datos de los estados del componente principal App.js a sus hijos y nietos.

En los componentes nietos como Shirt.js, Mug.js, Cap.js (que son los diferentes productos de la tienda) he escuchado el evento tipo click de los contadores de unidades.

Mediante lifting, he subido la información del evento al componente hijo List.js y después al padre App.js para que sea este componente principal el que de las instrucciones al componente nieto sobre qué debe hacer.

De manera que he creado las funciones increment y decrement para ir sumando o restando una unidad es cada click.

Mediante condicionales de tipo ternarios indico que el número de unidades countShirt, countMug o countCap nunca sean menores que cero.

Para realizar el resumen del número de items y precio total, he usado el componente Sumary.js de tipo funcional. He intentado simplificar lo máximo posible los cálculos de las variables y realizarlos en el propio componente para que sea más sencillo de localizar en caso de necesitar algún cambio en el futuro.

Para calcular los descuentos he seguido esta misma idea creando el componente Discounts.js también de tipo funcional. Para realizar la lógica he usado condicionales de tipo ternario, el módulo para saber cuando un número de unidades es par o impar.

De cara al modal, he realizado la maquetación utilizando como guías el archivo Sketch del proyecto y la herramienta Zeplin que me ha ayudado a tener más información sobre los tamaños, las tipografías y los colores.

Para que el modal aparezca, he creado un evento onClick en la etiqueta figure del componente Shirt.js y mediante lifting, he gestionado la función manejadora llamada detailShirt() en App.js.

Mediante css he indicado al modal que su display por defecto sea none y con Javascript en la función detailShirt() indico que cuando ocurra el evento, que se añada mediante toggle la clase js-modal-bg que tiene display de tipo flex.

Para cerrar el modal, he realizado la misma mecánica añadiendo un evento onClick al símbolo x. Mediante lifting, he añadido una función manejadora llamada closeModal() que gestiona que la clase js-modal-bg desaparezca.

De esta manera se alternan los diferentes displays del modal haciéndose visible o no según sea necesario.

## Conclusiones

Quería agradecer a Sara de Cabify que haya confiado en mí y me haya dado la oportunidad de realizar este ejercicio. He aprendido mucho haciéndolo y estoy contenta con el resultado. Seguro que hay muchas más formas de crear las funcionalidades pedidas pero esta es la que mejor he entendido y puedo defender. Espero cumplir con el nivel requerido en una front-end junior y seguir en el proceso.

¡Mil gracias!
