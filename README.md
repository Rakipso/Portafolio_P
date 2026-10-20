# 🚀 Portafolio Personal — Single Page Application (SPA)

Este proyecto consiste en una aplicación web interactiva de tipo **portafolio personal**, desarrollada con React y Vite.

Su objetivo es presentar información personal, experiencia, formación académica y proyectos destacados, aplicando buenas prácticas de desarrollo Front-End, reutilización de componentes y manejo del estado mediante React Hooks.

## 📐 Arquitectura y tecnologías

El proyecto utiliza la metodología **Atomic Design** para organizar los componentes en una estructura modular y facilitar su reutilización y mantenimiento.

### Estructura de componentes

- **Átomos:** componentes básicos de la interfaz, como botones y títulos de sección.
- **Moléculas:** agrupaciones de componentes que cumplen una función específica, como tarjetas de información y tarjetas de proyectos.
- **Organismos:** secciones funcionales más complejas, como la sección de experiencia, la grilla de proyectos y el formulario de contacto.
- **Plantillas:** estructuras que definen la disposición general del contenido de la aplicación.

### Stack tecnológico

- **Frontend:** React y JavaScript (JSX).
- **Herramienta de desarrollo y construcción:** Vite.
- **Estilos e interfaz:** Bootstrap 5 y CSS.
- **Manejo del estado:** React Hooks, como `useState` y `useEffect`.
- **Pruebas automatizadas:** Vitest y React Testing Library.

## ⚙️ Instalación y ejecución

Sigue estos pasos para instalar las dependencias y ejecutar el proyecto en tu entorno local.

### 1. Prerrequisitos

Asegúrate de tener instalado:

- Node.js 20.19 o superior, o Node.js 22.12 o superior.
- Git.
- npm, incluido con Node.js.

### 2. Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/Rakipso/Portafolio_P.git
```

### 3. Ingresar al directorio del proyecto

```bash
cd Portafolio_P
```

### 4. Instalar las dependencias

Ejecuta el siguiente comando para instalar las dependencias definidas en `package.json`:

```bash
npm install
```

### 5. Ejecutar la aplicación

Inicia el servidor de desarrollo con:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación. Habitualmente es `http://localhost:5173/`. Abre esa dirección en tu navegador.

## 🧪 Pruebas automatizadas

El proyecto incluye pruebas para el formulario de contacto mediante Vitest y React Testing Library. Estas verifican el renderizado de los campos, la validación de los datos ingresados, los mensajes de error y el comportamiento posterior al envío de información válida.

Para ejecutar las pruebas una sola vez, utiliza:

```bash
npm test -- --run
```

También puedes ejecutar `npm test` para iniciar Vitest en modo interactivo.

## 🏗️ Construcción para producción

Para generar la versión optimizada de la aplicación, ejecuta:

```bash
npm run build
```

El resultado se generará en la carpeta `dist/`.

Para previsualizar la versión construida localmente, utiliza:

```bash
npm run preview
```

## 🌐 Demo

Puedes revisar la versión desplegada del portafolio aquí:

https://portafolio-omega-eight-27.vercel.app/

---

Desarrollado como proyecto de evaluación de Desarrollo Front-End.