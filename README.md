## Inicializacion del proyecto

`yarn create react-app netflix-ya --template redux`

### Proceso de limpieza

### Importar las librerias

material-ui/core, axios, firebase, react-router-dom, react-uuid, styled components

### App.js - layout inicial

- Creamos las rutas
- Renderizamos Login o App condicionado a la existencia de un usuario

## Estilos

- Utilizamos useStyles para crear una infraestructura que permita asignar estilos

### Crear las carpetas de componentes: Pages

- Crear la infraestructura basica de los componentes que representan una pagina: Home, Login, Pypal, Profile, SignUp

### Estilos en los componentes de Pages

- Patron para añadir la infraestructura de estilos a todos
los componentes pagina: Banner, Header, Plans, Rows

### Estilos en los componentes de la carpeta components

- Crear la infraestructura basica del resto de los componentes

### Comenzara a trabajar en el Header

- Importar el logo
- Añadir al AppBar una clase transparent condicional. Esta clase se activa si la variable show = true.
- La variable show se convierte en true, cuando hacemos un scroll vertical de mas de 100 px.
- Para escuchar cuando el usuario hace un scroll vertica, añadimos un eventListener al objeto window.
- El eventListener esta activo una sola vez cada vez que refrescamos la pagina (useEffect con []).
- Una vez montado el componente, hay que limpiarlo para que no nos quede colgado el eventListener
- Añadimos las rutas tanto al logo como al avatar

### Comenzamos a trabajar el Banner

- Hemos importado un pedazo de imagen como backgroundImage
- En React, tenemos que acompañar las backgroundImages con estilos como object-fit, background-size y background-position
- Hemos posicionado el titulo de la peli, unos botones y la descripcion
- Como la descripcion viene de la API, tenemos que truncarla para asegurarnos de que nos cabe. Para ello, hemos declarado la funcion truncate.
- Hemos añadido un div vacio, que oscurece la imagen hasta fusionarla con el resto del UI, que es oscuro.

### Comenzamos a trabajar en el Login

- Hemos creado un boton con styled component y le hemos llamado NetflixButton. Este boton esta totalmente customizado y podremos variar su longitud, color y otros estilos, pasandole props
- Styled components para variar los estilos del input o del boton, pero para su posicionamiento , le damos una clase normal
-Hemos creado un input personalizado en Styled components. Le hemos llamado NetflixInput. como InputBase era ya un componente de material-ui, pues lo hemos llamado Styled(InputBase). Si hubiera sido un input de base styled.input

### Componente Profile

- Hemos trabajado en la distribucion
- <Plans>Texto</Plans>
- `const Plans = ({children}) => { return () }`
- Pasar props a los styled components.
- en el caso de que el componente no sea binario, p.ejemplo que el tamañano sea pequeño, grande o meiano, entonces lo solucionamos con una funcion llamada switch

### Signup

- Renderizado condicional. Hemos creado una variable signIn.
- Si la variable es false, desplegamamos el formulario.

MIN 3.00:40

### Proceso de Registro / SignIn
- Habilitado una cuenta en Firebase
- Inicializado el objeto auth
- capturado los datos tecleados por el usuario dentro del formulario
- registrado email y password con auth.create...
- SingIn con auth.signInWithEmail ...

### Redux
- Habilitamos el slice userSlice para manejar el usuario en el componente que queramos

### Persistencia
- Hemos añadido un "event listener" en App.js
- este event listener lo trae el objeto auth, escuchar cada vez que cambia el usuario en firebase.
- Cada vez que cambia, vuelve a inyectar el usuario en la capa de datos de userSlice (Redux)
- De esta manera recordamos que ya estamos dentro aunque refresquemos la pagina.

### Requests
- Vamos a construir el componente Row
- Hemos habilitado todos los endpoints para acceder a themovieDb y extraer los distintos objetos con toda la informacion clasificada por genero

### Requests al API
- Con useEffect, hacemos llamadas asyncronas mediante una funcion, a la que hemos llamado fetchData
- Esta funcion devuelve request.results.data, que es un array con todas las peliculas
- Las desplegamos en el UI

### Creacion del componente Paypal
- Al componente Paypal lo llamamos cuando clickeamos uno de los botones de los planes de suscripcion a Netflix
- Estos botones nos redirigen a la route /checkout
- En checkout vemos el componente Paypal, que contiene el codigo de React necesario para impementar la integracion del app de React con Paypal
- El codigo se encuentra en la documentacion.
- Paralelamente nos tenemos una cuenta en Paypal, y obtener las credenciales.



