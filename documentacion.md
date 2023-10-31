# Documentación Vanilla Games

# Requesitos y diagrama de casos de uso 
En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

Por lo tanto, vamos a comenzar por la versión 1.0.

Lo primero es definir los casos de uso para esta versión. Una primera aproximación podría ser la siguiente:

## Casos de uso para la V1.0 - Definición básica
Registrar usuario: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
Recuperar contraseña: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
Iniciar sesión: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
Cerrar sesión: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
Editar perfil: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
Ver proyectos: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
Publicar proyecto: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
Editar proyecto: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
Eliminar proyecto: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
Ver/Editar usuarios: Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.
Eliminar usuario: Un administrador puede eliminar cualquier usuario registrado en la plataforma.

## Diagrama de casos de uso
Para tener la información de manera gráfica vamos a utilizar uno de los diagramas UML que aprendimos a hacer el curso pasado:
Qué es un diagrama UML?
UML, que significa Lenguaje de Modelado Unificado (Unified Modeling Language, en inglés), es un lenguaje estándar utilizado en el desarrollo de software para visualizar, especificar, construir y documentar los artefactos de un sistema. Los diagramas UML son representaciones gráficas utilizadas en UML para modelar diferentes aspectos del sistema.

Existen varios tipos de diagramas UML, cada uno de los cuales se enfoca en un aspecto específico del sistema y proporciona diferentes niveles de detalle. Algunos de los diagramas UML más comunes son:

Diagrama de casos de uso: describe las interacciones entre los actores y el sistema, mostrando qué funcionalidades proporciona el sistema a los usuarios.

Diagrama de clases: representa la estructura estática del sistema, mostrando las clases, sus atributos, métodos y las relaciones entre ellas.

Diagrama de secuencia: muestra la interacción entre los objetos en una secuencia temporal, describiendo cómo los objetos se comunican y colaboran entre sí.

Diagrama de actividades: describe el flujo de trabajo o los procesos empresariales en un sistema, mostrando las actividades y las decisiones que se toman en cada etapa.

Diagrama de componentes: muestra la estructura de componentes de un sistema, identificando los componentes y las dependencias entre ellos.

Diagrama de despliegue: representa la arquitectura física del sistema, mostrando cómo los componentes se distribuyen en el hardware y la red.

Estos son solo algunos ejemplos de los diagramas UML más utilizados, pero hay otros diagramas, como el diagrama de estados, el diagrama de objetos y el diagrama de comunicación, que también se utilizan para modelar diferentes aspectos de un sistema. En general, los diagramas UML proporcionan una representación visual clara y sistemática del sistema, lo que facilita la comprensión, la comunicación y el diseño del software.

¿Qué es un diagrama de casos de uso?
Un diagrama de casos de uso es una herramienta utilizada en el análisis y diseño de sistemas de software para representar las interacciones entre los actores (usuarios o sistemas externos) y el sistema en sí. Es una representación visual que describe cómo se utilizará el sistema desde la perspectiva del usuario.

En un diagrama de casos de uso, los actores se representan mediante figuras externas al sistema, como personas, otros sistemas o incluso dispositivos. Los casos de uso, por otro lado, se representan como elipses y describen las diferentes acciones o funciones que el sistema proporciona a los actores.

El diagrama muestra las relaciones entre los actores y los casos de uso a través de líneas que conectan las figuras correspondientes. Estas líneas representan las interacciones entre los actores y el sistema, indicando qué casos de uso son accesibles para cada actor.

Los casos de uso se utilizan para capturar los requisitos funcionales del sistema y proporcionar una visión general de cómo interactúan los diferentes actores con el sistema. También ayudan a identificar los distintos escenarios de uso y las relaciones entre ellos.

El diagrama de casos de uso es una herramienta valiosa para comunicar y comprender las funcionalidades clave del sistema entre los desarrolladores, los usuarios y otros interesados en el proyecto de software.

El diagrama de casos de uso para la versión 1.0 sería el siguiente:

## Diagrma de casos de uso para la versión 1.0
![casosdeuso](https://carrebola.github.io/vanillaPill/assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestro aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo lo que debe hacer la versión 1.0, nuestra misión ahora es planificar el trabajo que se nos viene encima...




# PLANIFICACIÓN DEL PROYECTO
## Planificación del proyecto

¡Estamos listos y hemos comenzado a desarrollar la versión 1.0 de nuestro proyecto!

En el apartado anterior hemos definido qué funcionalidades debe tener. Además, hemos analizado las diferentes arquitecturas y tecnologías y hemos optado por utilizar una CSR (Client Side Rendering basada en una SPA programada en Javascript y conectada a Supabase como servicio backend).

Por lo tanto estamos en condiciones de definir cada una de las tareas que necesitaremos realizar para llevar a cabo esta primera versión del proyecto.

Para poder planificar el trabajo, vamos a crear el 'backlog de proyecto', es decir, vamos a desglosar el trabajo en historias para, a continuación, crear el backlog de sprint (donde agruparemos las historias por entregas). Finalmente vamos a planificar su temporización, es decir, vamos a asignar un tiempo determinado a cada historia.
¿Qué es el backlog de producto?
El Backlog de producto (Product Backlog en inglés) es una herramienta clave en la metodología Scrum, utilizada para gestionar el trabajo a realizar en un proyecto de software o desarrollo de producto.

El backlog de producto es una lista ordenada de todas las funcionalidades, características, requisitos y mejoras que deben ser desarrollados en el producto para cumplir con los objetivos del proyecto.

El backlog de producto es creado por el Product Owner (dueño del producto) en colaboración con el equipo de desarrollo. El Product Owner es responsable de priorizar el backlog de producto y asegurar que las funcionalidades más importantes y valiosas sean entregadas primero. El equipo de desarrollo utiliza el backlog de producto para planificar y estimar el trabajo a realizar en cada iteración (sprint) del proyecto.

El backlog de producto es una herramienta valiosa para el desarrollo ágil de software, ya que ayuda a mantener el enfoque en el valor que se está entregando al usuario final, asegura que el equipo de desarrollo esté trabajando en las funcionalidades más importantes y permite una planificación más precisa de las iteraciones del proyecto.

## Backlog de producto y de sprint.
Estas serían las historias a planificar en la entrega de la versión 1 de nuestro proyecto agrupadas por sprints:

### SPRINT 0: Definición del proyecto
Historia: Requisitos, casos de uso y diagrama de casos de uso Como desarrollador, quiero definir de manera genérica las especificaciones de la aplicación.

Historia: Versiones y planificación Como desarrollador, quiero agrupar las especificaciones en versiones, definir las tareas necesarias y realizar la planificación de todo el proceso de desarrollo del proyecto.

Historia: Casos de uso especificos y diagramas de flujo Como desarrollador quiero definir las especificaciones y casos de uso para la versión 1.0.

(Esta historia ya hemos comenzado a trabajarla en apartados anteriores. No obstante, es importante que quede constancia de ello para poder hacer una valoración del tiempo total invertido.)

### SPRINT 1: Diseño de la interficie
Historia: Bocetos: Como diseñador quiero dibujar los bocetos de todas las posibles pantallas del proyecto y testear su funcionamiento.
Historia: Wireframes, Mockup y guía de estilos: Como diseñador quiero dibujar los mockups y crear la guía de estilos a partir de los colores, tipografías, etc seleccionadas.
### SPRINT 2: Prototipos
Historia: Entorno de desarrollo: Como diseñador/programador quiero instalar y configurar las herramientas necesarias para programar la aplicación, trabajar con repositorios y crear un entorno integración continua y despliegue continuo.
Historia: Prototipos html: Como maquetador web quiero crear las páginas html del proyecto a partir de los wireframes aplicando la guía de estilos y utilizando Bootstrap 5.
Historia: Validaciones de formularios: Como programador quiero definir e implementar las validaciones de los formularios del proyecto
### Sprint 3: Implementación de la SPA
Historia: Entorno de desarrollo basado en NodeJS: Como programador quiero instalar y configurar todas las herramientas necesarias (NodeJS, Vite, etc.) para el desarrollo de una app tipo SPA basada en Javascript
Historia: Creación de proyecto basado en SPA y organización de archivos para las vistas basadas en módulos js: Como programador quiero configurar el sistema de carpetas para las vistas y crear los archivos a partir de componentes html basados en los prototipos.
Historia: Creación de componentes: Como programador quiero crear los componentes para el encabezado, el enrutado de las páginas y los menús.
Historia: Diseño del aspecto de las vistas: Como usuario quiero poder navegar por todas las vistas de la aplicación (independientemente del del rol).
Historia: Implementación de la lógica para la validación de los formularios: Como usuario quiero recibir feedback de validación en las vistas con formularios.
Historia: Lógica para la autenticación de usuarios: Como usuario registrado quiero poder recordar los datos de sesión al loguearme (Uso de localStorage)
Historia: Actualización de componentes header y menús en función del rol de usuario logueado: Como usuario logueado quiero poder navegar por las vistas de la aplicación. (Podrán verse solo las opciones que corresponden a mi rol).
Historia: Diseño de las vistas a partir de los datos de un archivo JSON: Como programador quiero simular el registro, login y visualización de las tablas de usuarios y proyectos a partir de datos ficticios obtenidos de una archivo json de prueba.
Historia: Lógica para la administración de usuarios y proyectos (ver, editar, borrar, etc.): Como administrador quiero poder gestionar los usuarios y proyectos (CRUD)
### Sprint 4: Backend
Historia: Diseño de la base de datos: Como programador quiero diseñar la base de datos en base a diagrama UML (diagrama entidad-relación)

Historia: Implementación de las tablas y funciones en supabase: Como programador quiero implementar las bases de datos en Supabase, diseñar las consultas e implementar las funciones postgree multitabla

Historia: API javascript de Supabase: Como programador quiero probar las apis de javascript para el acceso a la base de datos

Historia: Implementación de un ORM para mapping de la base de datos: Como programador quiero diseñar el diagrama de clases e implementarlo en javascript para tener un mapping de la bd.

### Sprint 5: Integración del frontend y el backend
Historia: Login y registro: Como usuario quiero poder registrarme e iniciar sesión.

Historia: Gestión de sesiones: Como usuario registrado quiero ver la web en base al rol que tengo asignado.

Historia: Editar perfil Como usuario registrado quiero poder ver y modificar mi perfil.

Historia: Gestión de Proyectos (Vista proyectos, detalle proyecto, etc): Como usuario registrado 'desarrollador' quiero poder ver los proyectos, ver mis proyectos, crear proyectos, ver detalle de los proyectos y editar y borrar mis proyectos.

Historia: Gestión de usuarios: Como usuario registrado 'administrador' quiero poder ver, editar y borrar los usuarios del sistema.

### Sprint 6: Revisión y despliegue en producción de la versión 1.0
Historia: Test de usuarios Como diseñador quiero realizar tests de usuarios a un grupo de usuarios focales.

Historia: Revisión de la aplicación Como programador quiero revisar y corregir los posibles problemas detectados en el test de usuarios.

Historia: Despliegue en producción Como programador quiero despleguar la aplicación en producción.

Ahora que tenemos las historias definidas es el momento de planificar el trabajo. Para ello necesitamos una herramienta que nos permita gestionar y temporizar cada una de las tareas. Nosotros utilizaremos GitHub Projects


# Casos de uso específicos y diagramas de flujo.
 En el primer apartado 'Requisitos y diagrama de casos de uso' para esta versión 1.0, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un diagrama de casos de uso.

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

## Casos de uso específicos
### 1. Registrar usuario
ctores: Usuario no registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

El usuario navega a la página de registro.
El usuario introduce su nombre, apellidos, email y contraseña.
El sistema valida que los campos estén completos y que el email no esté registrado previamente.
El sistema crea un nuevo usuario con los datos proporcionados.
El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.
Flujos alternativos:

3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.
### 2. Recuperar contraseña
Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

El usuario navega a la página de registro.
El usuario selecciona la opción 'Recuperar contraseña'
El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.
Flujos alternativos:

3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.
### 3. Iniciar sesión
Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

El usuario navega a la página de inicio de sesión.
El usuario introduce su email y contraseña.
El sistema valida las credenciales y crea una sesión para el usuario.
El sistema redirige al usuario a la página principal de la aplicación.
Flujos alternativos:

3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.
### 4. Cerrar sesión
Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

El usuario hace clic en el botón de "cerrar sesión".
El sistema cierra la sesión del usuario.
El sistema redirige al usuario a la página de inicio.
### 4. Ver/Editar perfil
Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

El usuario navega a la página de edición de perfil.
El usuario edita su nombre, apellidos y contraseña.
El sistema valida los campos y actualiza el perfil del usuario.
El sistema muestra un mensaje de confirmación.
Flujos alternativos:

3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.
### 5. Ver proyectos
Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

El usuario navega a la página de proyectos.
El sistema muestra una lista de proyectos publicados por desarrolladores.
El usuario puede hacer clic en un proyecto para ver más detalles.
El usuario puede mostrar/filtrar los proyectos a partir de un buscador
### 6. Publicar proyecto
Actores: Usuario registrado con perfil de desarrollador.

Precondiciones: El usuario ha iniciado sesión y su perfil es de desarrollador.

Flujo básico:

El usuario navega a la página de publicación de proyecto.
El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
El sistema valida los campos y crea un nuevo proyecto.
El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.
Flujos alternativos:

2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
El sistema descarta la información ingresada en el formulario.
El sistema muestra un mensaje de confirmación al desarrollador.
### 7. Editar proyecto:
Actor principal: Desarrollador

Objetivo: Editar la información de un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

El usuario selecciona la opción de "Editar proyecto".
El sistema muestra la lista de proyectos previamente creados por el usuario.
El usuario selecciona el proyecto que desea editar.
El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.
### 8. Eliminar proyecto:
Actor principal: Desarrollador

Objetivo: Eliminar un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto seleccionado.
El usuario confirma que desea eliminar el proyecto.
El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
El sistema actualiza la información de proyectos.
### 9. Ver/Editar usuario:
Actor principal: Usuario administrador

Objetivo: Editar la información de los usuarios registrados.

Precondiciones: El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

Flujo principal:

El usuario selecciona la opción de "Ver usuarios".
El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.
### 9. Eliminar usuario:
Actor principal: Usuario administrador

Objetivo: Eliminar usuario del sistema.

Precondiciones: El usuario debe haber iniciado sesión en la aplicación y debe tener rol administrador.

Flujo principal:

El usuario selecciona la opción de "Ver usuarios".
El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
El sistema informa de que se eliminarán todos sus registros.
El sistema muestra una confirmación de que la información de que el usuario ha sido borrado correctamente.

## Errores
Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

Error de conexión: El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

Error de validación: Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, el sistema debería mostrar un mensaje de error indicando el problema específico, como "El campo de correo electrónico debe ser una dirección de correo válida".

Error de autenticación: Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

Error de autorización: Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de volver a la página anterior.

Error de servidor: En caso de que se produzca un error interno en el servidor, como una excepción no controlada, el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

# Hist3a - Diseño de la interfaz. Bocetos
Una vez tenemos claro las funcionalidades que debe realizar nuestra aplicación, comenzamos con el diseño de la interfaz.

Este proceso incluye diseñar los bocetos, los wireframes y los mockups ,para acabar creando los prototipos con html.

Sin duda, el primer paso, debe ser dibujar los bocetos, así que, busca un lápiz, una goma de borrar y un puñado de papel, ¡y manos a la obra!
## Deseño de Bocetos
INFO
Recuerda que los bocetos son dibujos a mano alzada que representan ideas de diseño de manera rápida y no detallada. Los bocetos suelen ser utilizados al inicio del proceso de diseño para explorar diferentes ideas y soluciones de diseño de manera rápida y económica. Los bocetos son ideales para hacer borradores rápidos y para discutir ideas con colegas y clientes.
## Home y menús usuarios
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508218-79dad6473fd7d571d5f73e96f893af7f.jpg)
Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).

En el header vamos a alojar una barra superior fija con: el logo y nombre de la web (que hará las veces de link a la página principal), un menú central genérico (para acceder a páginas públicas), un menú central específico (que será diferente en función del rol de usuario logueado), y un icono (avatar) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el menú de usuario (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).
El cuerpo (main) albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.
El header será meramente informativo.
## Regitro de un usuario
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508212-88f1ed0a8c53df9f791872b3b03519d8.jpg)

## Iniciar sesión
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508205-edba4a097ae58ec58f1bb07dc4b7e5e1.jpg)

## Editar mi perfil
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508198-5b5eff368d5421682a834f3ed67af5bd.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, añadir una imagen de avatar. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan subirse archivos (imágenes) al servidor.

## Listado de todos los proyectos
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508192-6b771260fe99faccc760b23f71f02406.jpg)

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

## Listado de Mis proyectos
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508186-f38d99164909a0783d2040ce646e928a.jpg)

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

Habría que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto o dos barras de busqueda, una para cada sección, tal y como se muestra en el boceto anterior.

## Detalle de un proyecto
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508178-ed1f5e41681a1dcee1edac19f807c239.jpg)

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

## Nuevo proyecto / Editar un proyecto
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508170-9db2cd42ef7a339d517e3d0b38d4ae45.jpg)

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto ENVIAR, pero si estamos editándolo aparecerá el texto ACTUALIZAR. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

## Panel administración de proyectos
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508161-c9cfd413730d67ea74b43e48fedea5ec.jpg)

Si tienes el rol 'administrador' aparecerá el item 'Panel administración' en el menú superior específico. Este item nos permite cargar la vista 'Panel administración de proyectos'. Desde esta vista también podemos acceder al 'Panel administración de usuarios'.

Esta vista permite editar o borrar cualquier proyecto haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista 'Editar proyecto'

## Panel administración de usuarios
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508152-04e98cfb1faeecf2a53ea921bdd63ebe.jpg)
Esta vista permite editar los datos de los usuarios. Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos aparecen sobre 'inputs', de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el 'estado' y el 'rol' del usuario) excepto el email.

# Hist4 - Wireframe, mockup y guía de estilos
En el apartado anterior hemos diseñado y testeado los bocetos para la versión 1.0 de nuestro proyecto.

El siguiente paso, si nos basamos en el DCU (Diseño centrado en el usuario), sería diseñar los wireframes y, una vez tenemos los wireframes, los mockups junto a la guía de estilos.

RECUERDA QUE...
Un boceto es un dibujo rápido que representa ideas,
un wireframe es una representación estructural y esquemática,
un mockup es una versión visualmente detallada del diseño y
una guía de estilos establece las pautas visuales y de diseño para un proyecto.


Un proyecto de mayor envergadura requeriría de un equipo de trabajo con más de un perfil. La tarea de diseñar la interficie corresponde, por un lado, al arquitecto de la información y por otro, a un diseñador gráfico.

¿QUÉ ES UN ARQUITECTO DE LA INFORMACIÓN?
En diseño web, un arquitecto de la información (IA, por sus siglas en inglés) es un profesional encargado de organizar y estructurar la información de un sitio web de manera clara y coherente para mejorar la experiencia del usuario. Su objetivo principal es facilitar la navegación y la búsqueda de información, asegurándose de que los usuarios encuentren lo que están buscando de manera eficiente.
¿Qué hace un arquitecto de la información?
El arquitecto de la información se enfoca en varios aspectos del diseño web, como la disposición y organización de los contenidos, la estructura de menús y enlaces, la taxonomía y la categorización de la información, y la creación de esquemas de navegación. Trabaja en estrecha colaboración con diseñadores, desarrolladores y especialistas en experiencia de usuario para crear una estructura coherente y lógica.

Las responsabilidades del arquitecto de la información pueden incluir:

Análisis de requisitos: Comprender las necesidades y objetivos del sitio web, identificar los requerimientos de información y determinar la mejor manera de organizarla.

Diseño de la estructura de información: Crear una estructura jerárquica y lógica para los contenidos del sitio web, estableciendo relaciones y categorías claras.

Creación de esquemas de navegación: Definir la disposición de los menús, la ubicación de los enlaces y la forma en que los usuarios se desplazarán por el sitio web.

Desarrollo de taxonomías: Clasificar y categorizar la información en términos de etiquetas, categorías y metadatos para facilitar la búsqueda y la recuperación de información.

Diseño de wireframes y prototipos: Crear representaciones visuales de la estructura y organización de la información mediante wireframes y prototipos interactivos.

Pruebas y evaluación: Realizar pruebas de usabilidad para verificar la efectividad de la arquitectura de la información y realizar ajustes según sea necesario.

En resumen, el arquitecto de la información en diseño web se encarga de organizar y estructurar la información de manera lógica y coherente, asegurando una experiencia de usuario mejorada y facilitando la navegación y búsqueda de información en un sitio web.
¿Y QUÉ PAPEL JUEGA UN DISEÑADOR GRÁFICO EN LA CREACIÓN DE LOS MOCKUPS Y LA GUÍA DE ESTILOS?
La misión de un diseñador gráfico en la elaboración de mockups es crear representaciones visuales detalladas del diseño final de una interfaz o página web. Su objetivo es plasmar de manera precisa y visualmente atractiva los elementos visuales, como colores, tipografía, imágenes y estilos gráficos, que se utilizarán en el desarrollo del sitio web.

El diseñador gráfico crea los mockups y la guía de estilos...
El diseñador gráfico trabaja estrechamente con el equipo de diseño y desarrollo para convertir los conceptos y requisitos del proyecto en diseños visuales tangibles.

Utiliza herramientas de diseño gráfico y software de prototipado para crear mockups que reflejen el diseño final del sitio web, incluyendo la disposición de los elementos, la jerarquía visual y la experiencia de usuario.

Por otro lado, la misión del diseñador gráfico en la guía de estilos de un proyecto web es establecer y definir los estándares de diseño y las pautas visuales que se utilizarán en todo el sitio web.

El diseñador gráfico se encarga de crear una guía de estilos que incluya información sobre colores, tipografía, iconos, logotipos, espaciado, estilos de botones y otros elementos visuales.

La guía de estilos proporciona coherencia y uniformidad en el diseño del proyecto web, permitiendo que todos los elementos visuales se mantengan consistentes en todas las páginas y secciones. El diseñador gráfico asegura que los diseños de los mockups se alineen con las pautas establecidas en la guía de estilos, garantizando una apariencia visual coherente y una experiencia de usuario fluida en todo el sitio web.

En resumen, la misión de un diseñador gráfico en la elaboración de mockups es crear representaciones visuales detalladas del diseño final de una interfaz o página web, mientras que en la guía de estilos su misión es establecer y definir los estándares de diseño y las pautas visuales que se aplicarán en todo el proyecto web. Ambos roles son esenciales para garantizar un diseño visualmente atractivo, coherente y efectivo en el desarrollo de un sitio web.

## Y nosotros, ¿necesitamos wireframe? ¿y mockup? ¿y guía de estilos?
En nuestro caso, como el proyecto es muy básico, no nos vamos a centrar en aquellas tareas que corresponderían a un arquitecto de la información ni a un diseñador gráfico.

El mapa web de nuestra aplicación se limita a dar acceso a los proyectos y la administración de los usuarios. Sería tan sencillo com este:

En cuanto al diseño gráfico, aunque es una misión emocionante, nos vamos a limitar a trabajar con un tema de bootstrap utilizando Bootswatch, respetando, a priori, su paleta de colores y modificando, solo en algunos casos, algunos detalles como la fuente para los títulos.

![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/bootswatch-5cfb41f7af4e39535489cba274c60968.png)
¿QUÉ ES BOOTSWATCH?
Bootswatch es una biblioteca de temas (themes) para Bootstrap, un popular framework de desarrollo web.

Al utilizar Bootswatch, puedes cambiar fácilmente la apariencia de tu proyecto de Bootstrap simplemente importando los archivos CSS correspondientes al tema deseado. Esto te permite ahorrar tiempo y esfuerzo al no tener que crear los estilos desde cero.

# Hist5 - Entorno de desarrollo
“Dame seis horas para cortar un árbol y pasaré las primeras cuatro afilando el hacha.” – Abraham Lincoln

Si queremos ser eficientes en la creación de aplicaciones web, lo mejor es empezar por configurar bien nuestro entorno de desarrollo. Para ello vamos a instalar/configurar las siguientes herramientas:

Un buen software para escribir nuestro código. En nuestro caso usaremmos el programa VSCode de Microsoft.
Instalación del software para el control de versiónes. Nosotros instalaremos GIT.
Una aplicación web para sincronizar nuestro repositorio en la nube. En nuestro caso será GitHub.
## 1. VSCode
Sin duda, en le momento de escribir esta documentación, el rey de los IDs es, sin duda, Visual Studio Code (VSCode).

![Ejemplo de imagen](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png)

VSCode es un programa muy útil para escribir código. Es como una navaja suiza para los desarrolladores. Te permite editar y organizar tus archivos de código de manera fácil y rápida. Además, tiene un montón de extensiones y herramientas fantásticas que te facilitan la vida, como autocompletado, depuración y control de versiones. En resumen, es como el mejor amigo de un programador, siempre dispuesto a ayudarte a escribir código de manera eficiente.

Os hago un resumen de algunas aspectos que debes tener en cuenta a la hora de instalar y configurar VSCode, y te pondré información ampliada ya que es un tema muy trillado en internet:

### 1.1. Descarga e instala VSCode
Puedes encontrar la versión oficial de vscode aquí

### 1.2. Elige el tema que más te guste.
Puedes tunear tu VSCode instalando diferentes temas. Para ello:

Desde el buscador de extensiones (ctrl + mayus + X) escribe el nombre del tema que quieres instalar.
Haz clic en instalar extensión.
Desde el icono de configuración de vscode (la tuerquecita de abajo a la izquierda) selecciona 'Temas > Tema de color'
Selecciona el tema que has instalado y... ¡ya lo tienes!

### 1.3. Instala un tema de iconos, por ejemplo VSCode Icons o Material Icon
Para instalar los iconos el proceso es el mismo:

Desde el buscador de extensiones escribe el nombre del tema de iconos
En configuración, selecciona 'Tema > Tema de icono de archivo' y busca el tema instalado.
Ahora verás que en la columna de la izquierda, cada archivo tiene un icono diferente en función de su extensión: html, css, etc.
### 1.4. Extensiones
Con las extensiones puedes aumentar la potencia y mejorar tu flujo de trabajo.

#### Prettier
Una de las extensiones que te recomiendo sí o sí es 'Prettier'. Esta extensión se va a encargar de formatear tu código HTML y CSS port tí, respetando las identaciones. El proceso para instalar esta extensión es muy simple, solo tienes que buscar la extensión en el buscador y darle a instalar.

#### Live Server
Otra extensión imprescindible para nosotros es Live Server. Mediante esta extensión podremos tener un servidor virtual que mostrará el resultado de nuestro trabajo en un navegador, con la ventaja de que la vista se irá actualizando conforme vamos modificando el código.

Existen infinidad de extensiones para VSCode Aquí puedes ver un ejemplo de mi entorno. Utilizo el tema Night Owl y los iconos de VSCode Icons. Fijate que el código html está formateado con Prettier
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/entornovscode-80ba59cf4e146584bd91bdc2ddc30ba1.png)
De momento, con esto es suficiente para comenzar a trabajar en el desarrollo de los prototipos html y css. Más adelante acabaremos de configurar nuestro entorno para trabajar con NodeJS y otras herramientas que nos ayudarán a programar de forma más eficiente.

## 2. Control de versiones - Git
Para el control de versiones vamos a instalar y configurar Git. Aunque seguro que a estas alturas ya sabes qué es Git, pero deja que te refresque algunas ideas importantes:

INFO
✔ Git es como un superpoderoso control de versiones para tu código. Imagina que estás escribiendo un ensayo importante y cada vez que haces cambios guardas una nueva versión en diferentes archivos, como "ensayo_v1", "ensayo_v2" y así sucesivamente. Git hace algo similar pero para tu código.

✔ Con Git, puedes guardar diferentes versiones de tu proyecto a medida que avanzas. Esto significa que si cometes un error o quieres volver a una versión anterior, ¡es pan comido! Git te permite viajar en el tiempo y regresar a cualquier punto en la historia de tu proyecto.

✔ Pero eso no es todo. Git también es excelente para trabajar en equipo. Puedes colaborar con otros programadores sin pisar los pies de nadie. Cada persona puede trabajar en su propia versión del proyecto y luego combinar los cambios de todos de manera ordenada.

✔ Además, Git hace que compartir tu código sea súper fácil. Puedes subir tu proyecto a un repositorio en línea (como GitHub o GitLab) y otras personas pueden descargarlo y contribuir. Incluso puedes colaborar con desarrolladores de todo el mundo en proyectos de código abierto.

Aprender git es muy importante para un desarrollador web. Por suerte lo vas a estudiar (si no lo has hecho ya) en el ciclo de DAW. De todas formas te dejo un enlace con más información que te será muy util para entender conceptos como que es una rama, como subir ramas al repositorio, clonarlas, sincronizarlas etc:


Vamos a instalar (si aun no está instalado) Git. Para ello:

Descarga su última versión de la web oficial: Download Git.

Instala en tu ordenador el software.

Configura git para tu usuario:

Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envías:

  $ git config --global user.name "John Doe"
  $ git config --global user.email johndoe@example.com  

Sólo necesitas hacer esto una vez si especificas la opción --global, ya que Git siempre usará esta información para todo lo que hagas en ese sistema

## 3. Repositorio en linea - Github
Ahora que tenemos Git instalado en nuestro ordenador, vamos crearnos una cuenta en Github para poder sincronizar todo nuestro trabajo en la nube.
En primer lugar vamos a acceder github.com
Crea una cuenta e inicia sesión.
Ahora vamos a crear un proyecto de prueba con vscode, craremos un repositorio y lo sincronizaremos con github.

## Configurando entorno y subiendo página de pruebas
Vamos a ver un ejemplo de todo el proceso. La idea es instalar y configurar nuestro entorno de desarrollo para después crear una página web, guardar una versión en git, subirla a github y publicarla en github pages. Vamos a por ello:

Instala VSCode si no la has hecho aún.

Configúralo con el tema que más te guste, los iconos que decidas e instala las extensiones live server y prettier.

Crea una carpeta en tu ordenador con nombre pruebas

Abre VSCode y arrastra la carpeta dentro de la ventana central.

Crea un archivo con nombre index.html (algo básico, con un h1 y poco más).

Muestra el resultado en el navegador utilizando live server.

Configura prettier para que al guardar con ctrl + S se aplique formateado de tu código. Pruebalo.

Instala Git si no lo has hecho aún.

Configura tu usuario o confirma que ya está configurado.

Haz clic en el icono de 'Control de fuente' de tu vscode o pulsa ctrl + Mayus + G

Aparecerá un mensaje que te indica que no tienes repositorio creado, y te dará la opción de crearlo desde aquí. Hazlo

![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/pruebas-699477c2eaed5615c35abc13ab591adb.png)

![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/confirmgit-05eb2b43bcbe481fd8cec6be0976d4a5.png)
Escribe un mensaje de inicio de repositorio (por ejemplo 'primer commit de git') y dale a confirmar.

Ahora te pedirá si quieres publicar la rama ('Branch'). Dile que sí. Al hacer clic te preguntará qué nombre quieres para el repositorio y si quieres que sea privado o público. Por defecto, el nombre del repositorio coincide con el nombre de la carpeta de tu proyecto, pero puedes cambiarlo si lo deseas. Para esta prueba haremos que nuestro repositorio sea público.

Si es la primera vez que conectas tu VSCode con github te pedirá que lo sincronices. Utiliza la opción de confirmar a través de VSCode.

Una vez publicado tu archivo en github podrás ver, en tu página de github (por ejemplo carrebola.github.com), algo así:

![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/github-331ad9adada0e68ee217ed2a11147d31.png)
Vamos a documentar de forma básica nuestro proyecto prueba. Para ello vamos ahora a crear un archivo readme.md para que github muestre información del proyecto publicado en su pantalla inicial:
Crea un archivo con nombre readme.md en la raiz de la carpeta del proyecto.
Escribe dentro un texto descriptivo del proyecto, como por ejemplo:

##### Configurando nuestro entorno de desarrollo

1. Instalación de VSCode
2. Configurarción de git y github
3. Pruebas con proyecto

Si abrimos ahora github podemos ver como se muestra esta información en la portada del repositorio de github.

![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/pruebamarkdown-e0afca8f47d07e677b84a971c713f4c3.png)
Para terminar vamos a subir nuestro proyecto a github pages. Para ello:
Haz clic en Settings (el icono con forma de engranaje de la parte superior)
Entra en Pages (opción que encontrarás en el menú lateral izquierdo)
Donde pone Branch selecciona la rama main y haz clic en Save.
Si todo ha ido bien, la página se está publicando... Espera un minuto y refresca la página con F5
Ahora puedes ver la url donde se ha publicado tu página. Haz clic en el enlace o en el botón Visit site y podrás ver la web publicada.
![Ejemplo de imagen](https://carrebola.github.io/vanillaPill/assets/images/githubpages-29b29a98b367965695b01b043cb7c0d2.png)

Y hasta aquí la configuración de nuestro entorno de desarrollo, al menos la versión básica. Más adelante aprenderemos a trabajar con otras herramientas como nodejs, eslint, etc, pero de momento, con este entorno, ya estamos preparados para crear los prototipos en html y css de la primera versión de nuestro proyecto.