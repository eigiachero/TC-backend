# Tupaca Challenge Backend

Este desafío consiste en desarrollar una aplicación de tablero de tareas utilizando React.js con TypeScript
para el Frontend, y Node.js con Express.js y TypeScript para el Backend. Se pueden utilizar cualquier biblioteca de
componentes para el diseño de la interfaz de usuario

# Instalación
- Clonar el repositorio de github
- Instalar ts-node globalmente (en caso de no tenerlo), mediante `npm i -g ts-node`
- Instalar las dependencias del repo mediante el comando `npm install`
- Ejecutar el comando `npm run dev` para comenzar a ejecutar la API
- Acceder a la API desde `localhost:4000/tasks`

### Demo online
El backend se encuentra alojado en AWS EC2, en la direccion http://ec2-3-15-168-146.us-east-2.compute.amazonaws.com/. Se puede probar el endpoint para obtener la lista de 
tareas [aqui](http://ec2-3-15-168-146.us-east-2.compute.amazonaws.com/tasks). El servidor no tiene instalado ni configurado los certificados de SSL por lo tanto solo se puede acceder
utilizando HTTP y no HTTPS.

# Tecnologias utilizadas
### Express y Typescript
La API desarrollada utiliza Express.js que es el framework backend más popular para Node.js, Es minimalista y rápido, ademas que proporciona características
y herramientas robustas para desarrollar aplicaciones de backend escalables. Typescript es un superset de JavaScript, cuya  principal característica es el tipado estático.
Esto permite reconocer y corregir gran cantidad de bugs en tiempos de 'compilacion' en vez de 'ejecucion', los cuales podrian generar problemas si no fuesen detectados.
### SQLite
SQLite es una herramienta de software libre, que permite almacenar información en dispositivos de una forma sencilla, eficaz, potente, rápida y en equipos con pocas capacidades de hardware
Se elijó una base de datos SQLite debido a que es ligera y no necesita instalación o configuración adicional para poder ser utilizada en cualquier ordenador.
### Drizzle ORM
Drizzle ORM es un ORM de Typescript para bases de datos SQL diseñado con la seguridad de tipos y la velocidad como principales incentivos. Tiene una sintaxis de uso muy similar a escribir
SQL puro dentro de Javascript. Elejí utilizarlo debido a que es muy eficiente, la configuración es simple y su código es facil de entender para cualquiera que este familiarizado con SQL.
### ZOD
ZOD es una librería para Typescript que permite declarar y validar esquemas de datos. Se utiliza tanto en el frontend como en el backend para verificar que los datos tengan los tipos correspondientes,
y evitar errores al hacer uso inadecuado de tipos.

# Requerimientos
* Los usuarios deben poder crear tareas con un nombre y una descripción.
* Los usuarios deben poder editar el nombre y la descripción de las tareas.
* Los usuarios deben poder ver una lista de todas las tareas existentes.
* Los usuarios deben poder mover las tareas entre tres estados fijos: "Por hacer", "En progreso" y "Hecho".
* Los usuarios deben poder eliminar tareas.
* Los usuarios deben poder filtrar tareas por nombre y/o estado.
* Los usuarios deben poder ordenar las tareas por nombre y/o fecha de creación.
