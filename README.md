# Prueba técnica frontend
Prueba técnica para candidatos al cargo de Frontend React Developer.

### Objetivo
Realizar la maquetación en ReactJS proporcionando la funcionalidad de filtros del siguiente prototipo

[Ver prototipo](https://www.figma.com/proto/iAtVRRkGIwqbbz2LGApCtY/Frontend-Test?node-id=73%3A303&viewport=-555%2C2051%2C1.1058835983276367&scaling=scale-down "Prototipo")

[Ver archivo de diseño](https://www.figma.com/file/iAtVRRkGIwqbbz2LGApCtY/Frontend-Test?node-id=0%3A1 "Archivo de diseño")

### Funcionamiento de filtros
Tener en cuenta los siguientes requerimientos para realizar la funcionalidad de los filtros:
* Al hacer clic en el botón de filtrar se despliega un modal con las opciones para filtrar.
* Se pueden seleccionar varias opciones.
* Al seleccionar una opción se activa el botón de limpiar (inicialmente inactivo) y se muestra el número de opciones seleccionadas en el botón de filtrado.
* Al hace clic en el botón de filtrar se cierra el modal y se muestran los productos que cumplen con los filtros seleccionados.
* Al hacer clic en el botón de limpiar se remueven las opciones seleccionados del formulario de filtros y se carga el listado con todas las opciones.
* El filtro consiste de tres opciones: ```Rubia (id=1)```, ```Morena (id=2)``` y ```Roja (id=3)```

### Requisitos técnicos
* Usar SCSS para crear los estilos.
* Si se recarga la página y se tenía filtros aplicados, éstos deben conservarse.
* Para la construcción del listado de los productos utilizar el archivo ```products.json``` que se encuentra en este repositorio.

### Responsive
Aunque este prototipo está diseñado para mobile, la versión desktop debe ser responsive. Así, en pantallas desktop el grid de productos puede cambiar a 4 columnas.

### Recursos
* En la carpeta ```img``` dentro del folder ```public``` se encuentran las imágenes de los productos.
* En la carpeta ```svg``` dentro del folder ```public``` se encuentran los íconos.
