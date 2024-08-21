### Proyecto final front-end TripinLack ###
El proyecto que elegí fue hacer la copia del slack, basándome en el diseño que nos dio el profesor y en colores elegidos a base de una paleta de colores de la web Colorhunt, donde las tecnologías utilizadas fueron JavaScript con el framework de ReactJS y utilizando media queries de CSS para hacer un diseño adaptativo.

Durante el desarrollo del mismo me encontré con diferentes dificultades como la utilización de diferentes botones en el navegador de la web o en el manejo del objeto DATA que contiene toda la información inicial de la web. Pero de todos esos problemas que no me tomaron demasiado tiempo en resolverlos, ya que con un repaso de las clases los pude resolver, el más complicado fue la validación de errores en el formulario de ingreso y de registro, de cómo mostrarlos hasta cómo hacer algo escalable. Empecé haciendo la validación mediante un método el cual no entendí bien cómo funcionaba, explicado en una de las clases, el cual lo hice funcionar pero a la hora de agregar diferentes errores utilizando un mismo esquema se me empezó a complicar hasta que decidí eliminarlo y hacerlo nuevamente mediante el método de capturar el formulario con DataForm() y realizar las validaciones. Al hacerlo con este método entendí que con el método anterior estaba utilizando mal la llamada de errores para validar y por eso estaba teniendo tantos problemas, por lo que entendí por qué no me funcionaba. Luego de este problema que me llevó varios días hasta que desistí y decidí empezar de nuevo el formulario, empecé a realizar todas las demás funciones de la app.

Desde crear nuevos entornos de trabajo (workspaces) hasta crear nuevos canales y la mensajería de la misma, en ninguno me encontré con demasiada dificultad, pero cada uno llevó su tiempo, dejando así la app con posibilidad de:

# Logearse o registrarse 
Con validaciones:
- No dejar espacios vacíos
- Validación de usuario: si existe, mayor de 3 caracteres y sin espacios o caracteres especiales
- Validación de contraseña
- Al registrarse, se modifica y se carga la nueva información en el localStorage
- Al loguearse, se carga en el localStorage un JSON con key user que contiene la información del usuario que está 'logueado' en ese momento

# Home
NavBar:
- Valida si se está logueado para renderizar el botón de logout
- Al presionar el botón de logout se borra el JSON de key user del localStorage y el usuario navega a la página de login

WorkSpaces:
- Se renderizan los workspaces que tiene el usuario guardado con su respectiva imagen y su nombre
- También se pueden crear nuevos workspaces:
    - En el formulario de nuevos workspaces se valida que no haya ningún campo vacío y también si el usuario ingresa un nombre al canal para añadirlo en el nuevo workspace

# WorkSpace
NavBar:
- Diseño totalmente responsive con dos botones, donde uno es para volver atrás y el otro para los canales que, al tratarse de un celular, se encuentran escondidos en la navbar con un botón

Canales:
- En los canales se puede elegir cada canal al cual tenemos asignado en el workspace
- También se pueden agregar canales, donde el formulario tiene su respectiva validación
- Al tratarse de celular, se encuentra escondido en la navbar

Chat:
- Cada canal tiene su chat en el que se pueden enviar y ver los mensajes de la conversación, con un estilo en donde se marca la fecha de cada conversación solo una vez, interrumpiendo la línea de los mensajes
- Se pueden enviar y visualizar los mensajes mediante las modificaciones que realiza el formulario en el localStorage

Finalizando, yo creo que el proyecto terminó bien logrado pero podría tener un montón de funcionalidades más que me hubiera gustado agregar, como la eliminación de canales, workspaces o incluso mensajes, incluyendo un buscador entre los mensajes, pero lamentablemente no me dio el tiempo para realizar esas funcionalidades. Pero procuré que todo lo creado sea de la manera más ordenada y respetando las reglas de la programación lo más posible, incluyendo la escalabilidad del código. Espero que el proyecto le guste, profe, intenté aplicar todo lo que aprendí y hasta un poco más, pero es el primero que hago, así que seguro que algún error tendrá. Saludos.

Emiliano Abdala