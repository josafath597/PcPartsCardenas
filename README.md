# PC Parts

## Descripcion

#### Es un proyecto de Website Ecommerce utilizando React JS 

## Estatus de Proyecto 

#### En desarrollo

## Guia de instalacion

#### Descargar este repositorio y abrir un ventana de comandos y ejecutar npm installa una vez hecho la instalacion ejecutar npm Start (yo utilizo yarn siento que es mas rapido)

## Tecnologias Utlizadas

### En este Proyecto se utilizaron las siguientes Tecnologias:

- [React](https://es.reactjs.org/).
- [React Router](https://reactrouter.com/).
- [Material UI](https://mui.com/).
- [Firebase](https://firebase.google.com/).
    
## Cambios
### cambios del 16 de julio del 2022: 

> Se elimina el catalogo inicial de la aplicacion para poner en su lugar la pestaña de productos en el NavBar

Se elimina componente de la carpeta ./src/PcParts/components

> ItemDetail.jsx
> ProductItems.jsx

Se agrega el componente en la carpeta ./src/PcParts/pages

> CategoryPage.jsx

Se agrega en la carpeta ./src/selectors un archivo 

> GetComponentsByCategory.js

Se vuelve a hacer el componente en la carpeta ./src/ui/components/NavBar

### cambios del 24 de julio del 2022: 

> Se Agrega un Context 

> Se sincroniza un contador del carrito con el de ItemPage

> Se agrega un dialog al presionar "Agregar Carrito" en ItemPage

### cambios del 27 de julio del 2022: 

> Se Actualiza la pagina de shop

### cambios del 30 de julio del 2022: 

> Se añade firebase al proyecto

> Se elimina el hook useFetch y se modifican los archivos GetComponentsByCategory y GetComponentsById para obtener los datos desde firestore
