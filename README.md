# AutHub

**AutHub** es una plataforma de autenticación diseñada para centralizar y gestionar el acceso de usuarios a aplicaciones y servicios.

El proyecto actualmente contiene el frontend del sistema de autenticación, desarrollado con React, TypeScript y Vite. Su objetivo es proporcionar una interfaz moderna y consistente para procesos como inicio de sesión, registro de usuarios y recuperación de credenciales.

---

## Características

Actualmente, AutHub incluye las siguientes funcionalidades:

* Inicio de sesión.
* Registro de usuarios.
* Recuperación de contraseña.
* Recuperación mediante token.
* Navegación entre los diferentes flujos de autenticación.
* Diseño responsive.
* Soporte para tema visual.
* Componentes reutilizables.
* Sistema de componentes basado en Radix UI y shadcn.
* Validación y tipado mediante TypeScript.
* Linting y formateo de código.

### Flujos disponibles

| Ruta            | Descripción                             |
| --------------- | --------------------------------------- |
| `/login`        | Inicio de sesión                        |
| `/register`     | Registro de usuario                     |
| `/forget`       | Solicitud de recuperación de contraseña |
| `/forget-token` | Validación del token de recuperación    |
| `/`             | Redirección hacia `/login`              |

---

## Tecnologías

### Frontend

* **React 19**
* **TypeScript**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **shadcn**
* **Radix UI**
* **Lucide React**
* **Inter**

### Herramientas de desarrollo

* **ESLint**
* **Prettier**
* **TypeScript**
* **npm**

---

## Arquitectura

El proyecto utiliza una estructura basada en páginas, componentes reutilizables y componentes de UI.

```text
AutHub/
│
├── public/
│   ├── logo.png
│   └── vite.svg
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── auth_forget_1.webp
│   │       ├── auth_login_1.webp
│   │       ├── auth_register_1.webp
│   │       └── auth_register_2.jpg
│   │
│   ├── components/
│   │   ├── login-form.tsx
│   │   ├── signup-form.tsx
│   │   ├── forget-login-form.tsx
│   │   ├── token-login-form.tsx
│   │   │
│   │   ├── sidebar/
│   │   │   ├── app-sidebar.tsx
│   │   │   ├── nav-main.tsx
│   │   │   ├── nav-projects.tsx
│   │   │   ├── nav-secondary.tsx
│   │   │   └── nav-user.tsx
│   │   │
│   │   └── ui/
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── collapsible.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── field.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       └── tooltip.tsx
│   │
│   ├── hooks/
│   │   └── use-mobile.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── pages/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   ├── forget/
│   │   │   └── page.tsx
│   │   └── forgetoken/
│   │       └── page.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Requisitos

Antes de ejecutar el proyecto necesitas tener instalado:

* Node.js
* npm

Se recomienda utilizar una versión reciente de Node.js compatible con las dependencias del proyecto.

Puedes comprobar las versiones instaladas:

```bash
node --version
npm --version
```

---

## Instalación

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entra al proyecto:

```bash
cd AutHub
```

Instala las dependencias:

```bash
npm install
```

---

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local donde estará disponible la aplicación.

Normalmente:

```text
http://localhost:5173
```

---

## Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia Vite en modo desarrollo.

### Build

```bash
npm run build
```

Ejecuta el type checking y genera la versión de producción.

### Preview

```bash
npm run preview
```

Permite visualizar localmente la versión generada para producción.

### Lint

```bash
npm run lint
```

Analiza el código buscando problemas relacionados con ESLint.

### Typecheck

```bash
npm run typecheck
```

Ejecuta TypeScript para comprobar errores de tipado.

### Format

```bash
npm run format
```

Formatea los archivos TypeScript y TSX utilizando Prettier.

---

## Flujo de autenticación

El frontend está organizado alrededor de los principales flujos de autenticación.

```text
                         ┌───────────────┐
                         │    AutHub     │
                         └───────┬───────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                 Login                    Register
                    │                         │
                    │                         │
              Autenticación              Crear cuenta
                    │
                    │
              ┌─────┴─────┐
              │           │
           Éxito        Olvidó
              │        contraseña
              │           │
              │        /forget
              │           │
              │       Token enviado
              │           │
              │      /forget-token
              │           │
              │      Restablecer
              │       contraseña
              │
          Aplicación
```

---

## Integración con Backend

El frontend está diseñado para comunicarse con un backend de autenticación.

La arquitectura esperada es:

```text
┌──────────────────────┐
│      AutHub UI       │
│                      │
│ React + TypeScript   │
│       + Vite         │
└──────────┬───────────┘
           │
           │ HTTP / HTTPS
           │
           ▼
┌──────────────────────┐
│    AutHub Backend    │
│                      │
│ Authentication API   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Database        │
│                      │
│ Users / Sessions /   │
│ Tokens / Roles       │
└──────────────────────┘
```

El backend será responsable de operaciones como:

* Autenticación.
* Emisión de tokens.
* Refresh tokens.
* Gestión de sesiones.
* Gestión de dispositivos.
* Recuperación de contraseña.
* Validación de tokens.
* Roles y permisos.
* Revocación de sesiones.
* Cierre de sesiones individuales.
* Cierre de todas las sesiones de un usuario.

---

## Sesiones y dispositivos

Uno de los objetivos principales de AutHub es manejar las sesiones de manera independiente por dispositivo.

La arquitectura propuesta permite que un usuario pueda tener múltiples dispositivos conectados:

```text
Usuario
│
├── iPhone 15 Pro Max
│   └── Sesión A
│
├── iPhone 8
│   └── Sesión B
│
├── Windows PC
│   └── Sesión C
│
└── MacBook
    └── Sesión D
```

La rotación de un refresh token **no debería crear una nueva sesión**.

La sesión representa al dispositivo o contexto de autenticación, mientras que los refresh tokens representan las credenciales temporales utilizadas dentro de esa sesión.

Esto permite implementar posteriormente funcionalidades como:

* Ver dispositivos conectados.
* Ver navegador utilizado.
* Ver sistema operativo.
* Mostrar última actividad.
* Mostrar ubicación aproximada/IP.
* Cerrar una sesión específica.
* Cerrar todas las sesiones.
* Detectar sesiones sospechosas.
* Revocar refresh tokens.

---

## Seguridad

AutHub está pensado como una plataforma de autenticación y, por tanto, la seguridad es un componente fundamental.

Entre las medidas que se pueden implementar en el backend:

* Hash seguro de contraseñas.
* Refresh token rotation.
* Revocación de tokens.
* Control de sesiones por dispositivo.
* Expiración de sesiones.
* Protección contra reutilización de refresh tokens.
* Rate limiting.
* Validación de entrada.
* Protección de endpoints.
* Control de roles y permisos.
* Cookies `HttpOnly` y `Secure` cuando corresponda.
* Comunicación exclusivamente mediante HTTPS en producción.

> Las credenciales, tokens y secretos no deben almacenarse directamente en el código fuente ni incluirse en el repositorio.

---

## Variables de entorno

Cuando se integre el backend, las variables de configuración deberían mantenerse fuera del código fuente.

Por ejemplo:

```env
VITE_API_URL=http://localhost:3000
```

Para producción:

```env
VITE_API_URL=https://api.example.com
```

El archivo `.env` no debe contener secretos que necesiten mantenerse privados, ya que las variables `VITE_*` forman parte del bundle del frontend.

---

## Convenciones

### Componentes

Los componentes reutilizables se encuentran en:

```text
src/components/
```

Los componentes específicos de UI se encuentran en:

```text
src/components/ui/
```

### Páginas

Cada flujo principal tiene su propia carpeta:

```text
src/pages/
```

Ejemplo:

```text
src/pages/login/page.tsx
```

### Utilidades

Las funciones auxiliares se encuentran en:

```text
src/lib/
```

---

## Estado del proyecto

**Versión:** `0.8`

**Estado:** En desarrollo.

### Implementado

* [x] Estructura inicial del frontend.
* [x] React + TypeScript.
* [x] Vite.
* [x] React Router.
* [x] Página de login.
* [x] Página de registro.
* [x] Recuperación de contraseña.
* [x] Recuperación mediante token.
* [x] Componentes reutilizables.
* [x] UI responsive.
* [x] Tailwind CSS.
* [x] Componentes UI basados en shadcn/Radix.
* [x] ESLint.
* [x] Prettier.

### Próximos pasos

* [ ] Conectar el frontend con AutHub Backend.
* [ ] Implementar autenticación real.
* [ ] Implementar access tokens.
* [ ] Implementar refresh tokens.
* [ ] Implementar sesiones por dispositivo.
* [ ] Implementar gestión de dispositivos.
* [ ] Implementar cierre de sesiones.
* [ ] Implementar recuperación real de contraseña.
* [ ] Implementar verificación de correo.
* [ ] Implementar protección de rutas.
* [ ] Implementar roles y permisos.
* [ ] Implementar manejo global de errores.
* [ ] Implementar notificaciones/toasts.
* [ ] Implementar configuración de usuario.
* [ ] Implementar auditoría de autenticación.

---

## Objetivo de AutHub

AutHub busca convertirse en un servicio de autenticación reutilizable que pueda ser utilizado por diferentes aplicaciones sin que cada proyecto tenga que implementar su propio sistema de usuarios, sesiones y seguridad.

La idea es separar claramente:

```text
Aplicaciones
     │
     ▼
┌────────────────────┐
│       AutHub       │
│                    │
│ Authentication     │
│ Authorization      │
│ Sessions           │
│ Devices            │
│ Tokens             │
│ Security           │
└────────────────────┘
     │
     ▼
   Usuarios
```

De esta manera, una aplicación puede delegar la autenticación a AutHub y concentrarse en su propia lógica de negocio.
---
## Licencia

Este proyecto se encuentra actualmente en desarrollo.

La licencia definitiva será definida posteriormente.
