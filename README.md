🚀 Portafolio Personal - Single Page Application (SPA)

Este proyecto es una aplicación web interactiva tipo "Portafolio Personal" desarrollada con React y empaquetada con Vite.

El objetivo principal de este desarrollo es demostrar el dominio en la creación de interfaces funcionales, manejo de estado mediante Hooks, y la implementación estricta de metodologías de estructuración de código y buenas prácticas.

📐 Arquitectura y Tecnologías

Para garantizar un código limpio, escalable y libre de componentes monolíticos, este proyecto fue estructurado bajo la metodología Atomic Design:

Átomos: Componentes UI básicos (Botones, Inputs, Textos).

Moléculas: Agrupaciones simples con responsabilidad única (Tarjetas de información, Campos de formulario).

Organismos: Secciones complejas que manejan su propio estado y lógica (Formulario de contacto, Grilla de proyectos).

Stack Tecnológico:

Frontend: React (JS/JSX).

Build Tool: Vite (para un entorno de desarrollo rápido y optimizado).

Estilos y UI: Bootstrap (garantizando un diseño responsivo y consistente en toda la aplicación).

Testing: Jest y React Testing Library.

⚙️ Instrucciones para el Evaluador (Instalación y Ejecución)

Sigue estos pasos para instalar las dependencias y levantar el proyecto en tu entorno local.

1. Prerrequisitos

Asegúrate de tener instalado en tu máquina local:

Node.js (Se recomienda versión 18+ LTS).

Git.

2. Clonar el repositorio

Abre tu terminal de preferencia y ejecuta el siguiente comando para clonar el proyecto:

git clone <AQUI_LA_URL_DE_TU_REPOSITORIO>


3. Navegar al directorio del proyecto

cd <mi-Portfolio>


4. Instalar las dependencias

Una vez dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias definidas en el package.json:

npm install


5. Levantar el proyecto en entorno local

Para iniciar el servidor de desarrollo utilizando Vite, ejecuta:

npm run dev


Nota: Al finalizar la ejecución, la terminal te indicará la ruta local donde se está ejecutando la aplicación (usualmente es http://localhost:5173/). Abre ese enlace en tu navegador.

🧪 Pruebas Automatizadas (Testing)

Este proyecto incluye una suite de pruebas automatizadas enfocadas en el comportamiento de los componentes críticos y el manejo de estado (como el Formulario de Contacto).

Para ejecutar las pruebas y visualizar los resultados, utiliza el siguiente comando en la terminal:

npm test


Desarrollado como proyecto de evaluación de Desarrollo Front-End.