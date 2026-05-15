# APIrest-node.js-express
# API REST con Node.js y Express para gestionar cursos

## Sobre mí 😊👇
- Estudiante de Desarrollo de Aplicaciones Multiplataforma 
- Junior Developer en formación
- Manejo de Java, Php y HTML
- Experiencia con Apache NetBeans, PhpStorm, Eclipse, phpMyAdmin, mySQL, Oracle VirtualBox y Docker.

## Objetivos 🎯
- Desarrollar una API REST básica utilizando Node.js y Express para 
gestionar cursos de una empresa ficticia llamada TecnoAula Formación. 
- Practicar el desarrollo backend, la creación de rutas, el uso 
de métodos HTTP y el trabajo con datos en formato JSON.

## Requisitos mínimos 📑

La API deberá gestionar cursos con la siguiente información mínima: 

● id <br>
● nombre <br>
● descripcion <br>
● duracion <br>
● nivel <br>
● precio 

Ejemplo de curso: <br>
{ <br>
"id": 1, <br>
"nombre": "Informática básica", <br>
"descripcion": "Curso de iniciación al uso del ordenador e Internet", <br>
"duracion": "30 horas", <br>
"nivel": "Inicial", <br>
"precio": 120 <br>
} 

Funcionalidades obligatorias 

1. Crear servidor Express
   
El alumnado deberá crear un servidor con Express que funcione correctamente en el puerto 3000. <br>
La ruta principal deberá responder con un mensaje similar a: API de TecnoAula Formación funcionando correctamente. 
<br>
2. Obtener todos los cursos

Crear un endpoint que permita obtener el listado completo de cursos. <br>
GET /api/cursos <br>
Debe devolver un array JSON con todos los cursos disponibles. 

3. Obtener un curso por ID 

Crear un endpoint que permita consultar un curso concreto por su identificador. <br>
GET /api/cursos/:id <br>
Si el curso existe, se devolverán sus datos. <br>
Si no existe, se deberá devolver un mensaje de error. 

4. Crear un nuevo curso

Crear un endpoint que permita añadir un nuevo curso. <br>
POST /api/cursos <br>
El cuerpo de la petición deberá enviarse en formato JSON. <br>
Ejemplo: <br>
{ <br>
"nombre": "Curso de redes básicas", <br>
"descripcion": "Introducción a redes, IP, routers y configuración básica", <br>
"duracion": "40 horas", <br>
"nivel": "Intermedio", <br>
"precio": 180 <br>
} <br>
No se deberán permitir cursos sin nombre, descripción o duración. 

5. Modificar un curso existente

Crear un endpoint que permita actualizar los datos de un curso. <br>
PUT /api/cursos/:id <br>
Si el curso existe, se actualizarán sus datos. <br>
Si no existe, se mostrará un mensaje de error. 

6. Eliminar un curso

Crear un endpoint que permita eliminar un curso por su ID. <br>
DELETE /api/cursos/:id <br>
Si el curso existe, se eliminará del listado. <br>
Si no existe, se deberá devolver un mensaje de error. 

## Estructura recomendada del proyecto 🏢

tecnopula-api/ <br>
├── package.json <br>
├── server.js <br>
├── routes/ <br>
│   └── cursos.routes.js <br>
├── controllers/ <br>
│   └── cursos.controller.js <br>
└── data/ <br>
└── cursos.js

## Requisitos técnicos 🔧

La aplicación deberá cumplir los siguientes requisitos: 

● Estar desarrollada con Node.js. <br>
● Utilizar Express. <br>
● Usar express.json() para leer datos en formato JSON. <br>
● Tener las rutas separadas en un archivo independiente. <br>
● Tener los datos iniciales separados en un archivo propio. <br>
● Devolver respuestas en formato JSON. <br>
● Controlar errores básicos. <br>
● Probar todos los endpoints antes de entregar la práctica.

## Endpoints mínimos 🔚

Método           Ruta             Descripción <br>



## Requisitos opcionales ⭐

Se valorará positivamente añadir alguna de estas mejoras: 

● Buscador de cursos por nombre. <br>
● Filtro por nivel: inicial, intermedio o avanzado. <br>
● Validación más completa de los datos recibidos. <br>
● Persistencia de datos en un archivo JSON. <br>
● Conexión con una base de datos MySQL o MongoDB. <br>
● Documentación básica de la API. <br>
● Uso de variables de entorno con .env. <br>
● Añadir CORS para permitir conexión desde una aplicación React. <br>
● Crear una pequeña interfaz React que consuma esta API.

## Tecnologías previstas 📚
