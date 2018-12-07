# Hack Cipher

**Hack Cipher** es una aplicación web para cifrado y descifrado de textos. Su funcionamiento está basado en el cifrado César, que consiste en desplazar las letras del alfabeto un determinado número de veces para codificar y/o decodificar un mensaje. A modo de ejemplo, la palabra “HOLA” con una clave de desplazamiento de 3 quedaría cifrada como “KROD”, ya que cada letra que compone la palabra se desplaza tres lugares hacia la derecha.

El cifrado César es uno de los mecanismos de encriptación de mensajes más antiguos de los que se tenga registro, y en sus orígenes fue utilizado con fines militares. Si bien este tipo de cifrado no es muy utilizado en la actualidad por su escasa seguridad, puede convertirse en una herramienta útil para grupos pequeños de gente que desea enviar mensajes privados a través de Internet.


# Perfil de usuario

Hack Cipher fue desarrollada pensando en las necesidades de personas aficionadas al hacking. Esta actividad, que muchas veces es asociada erróneamente con actos ilícitos, suele traer problemas a la hora de mantener un contacto seguro entre sus practicantes. Por esta razón, se hace necesaria la implementación de un sistema de comunicación cifrado, a través del cual los miembros de estas comunidades informáticas puedan traspasarse información sin ser descubiertos por terceras personas.

## Arquetipo

Si bien no es posible acceder a estadísticas confiables sobre el perfil de las personas dedicadas al hacking, se puede determinar que un usuario arquetípico sería un hombre con un rango de edad entre 20 y 35 años.

## Historia de usuario

La necesidad de una aplicación web como Hack Cipher se centra en la problemática de que actualmente no existen aplicaciones web enfocadas en grupos específicos, como lo son las personas dedicadas al hacking. Las alternativas que existen en el mercado (aplicaciones móviles cifradas) no representan una opción recurrente para este grupo en particular debido a las vulnerabilidades de seguridad que han presentado. 

Frente a este escenario, Hack Cipher brinda una opción segura para compartir mensajes privados. La información ingresada a la aplicación no es almacenada en bases de datos y desaparecerá cuando el usuario deje de hacer uso de ella.

# Planificación
El desarrollo de Hack Cipher tuvo una duración total de dos semanas, y las tareas fueron distribuidas de la siguiente manera:

![Calendario planificacion](https://github.com/andidrei/scl-2018-11-bc-core-cipher/src/imagenes/planificacion.jpg)


# Interfaz de usuario

Hack Cipher fue diseñada siguiendo una estructura minimalista y manteniendo una interfaz intuitiva que facilita su uso. Se utilizó una familia tipográfica simple y un alto contraste de colores para facilitar la lectura.

## Elementos de la interfaz

 - Logotipo
 - Enlace de instrucciones
 - Casilla de ingreso de texto (input)
 - Casilla de desplazamiento (offset)
 - Botones para codificar y decodificar
 - Casilla de texto codificado (output)
 - Botón para borrar

## Especificaciones de programación

 - JavaScript (Vanilla JS)
 - HTML5
 - CSS3