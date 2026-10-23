# 🌿 Montaña Serena

**Desafío Práctico 2 ADS — Desarrollo web y control de versiones**

## 1. Descripción del proyecto

Montaña Serena es un sitio web de demostración diseñado para promocionar alojamientos de montaña en Los Naranjos, El Salvador. Su objetivo es presentar opciones de hospedaje, experiencias relacionadas con la naturaleza y un formulario para consultar reservas.

El proyecto utiliza tecnologías web y sirve como ejemplo práctico para aplicar Git y GitHub en el control de versiones y la colaboración entre desarrolladores.

### Objetivos

- Presentar los alojamientos y sus características.
- Mostrar experiencias y actividades relacionadas con la naturaleza.
- Facilitar la navegación y las consultas de los visitantes.
- Aplicar Git y GitHub para registrar, compartir y administrar cambios en el código.

## 2. Tecnologías utilizadas

- **HTML5:** estructura y contenido de la página.
- **CSS3:** estilos, distribución visual y diseño adaptable.
- **JavaScript:** interactividad y comportamiento de los componentes.
- **Git:** control de versiones del código.
- **GitHub:** alojamiento remoto y colaboración en el proyecto.

## 3. Estructura del proyecto

| Archivo | Descripción |
|---|---|
| `index.html` | Contiene la estructura y las secciones principales del sitio. |
| `style.css` | Define los estilos visuales y la adaptación a diferentes dispositivos. |
| `script.js` | Contiene las funciones e interacciones implementadas con JavaScript. |
| `README.md` | Documenta el proyecto y los procedimientos de Git y GitHub. |

## 4. Instalación y ejecución del proyecto

Para visualizar el sitio web:

1. Descargar o clonar el repositorio.
2. Mantener `index.html`, `style.css` y `script.js` en la misma carpeta.
3. Abrir `index.html` en un navegador web.

La versión demostrativa puede visualizarse sin configurar un servidor web. El formulario de reservas todavía no está conectado a un sistema real de recepción de solicitudes.

---

## 5. Git y GitHub: configuración inicial (Setup)

Git es un sistema de control de versiones que permite registrar los cambios realizados en un proyecto. GitHub permite alojar repositorios Git en línea y facilita el trabajo colaborativo.

### Instalación y verificación

1. Descargar Git desde https://git-scm.com/downloads.
2. Instalarlo siguiendo las instrucciones del sistema operativo.
3. Crear una cuenta en https://github.com/.
4. Abrir Git Bash o una terminal compatible.
5. Comprobar que Git se instaló correctamente:

```bash
git --version
```

Este comando muestra la versión de Git instalada.

## 6. Configuración de clave SSH

SSH permite autenticar una conexión con GitHub utilizando un par de claves criptográficas. Una clave privada permanece en el equipo y la clave pública se registra en GitHub.

### Paso 1. Generar una clave SSH

En Git Bash, ejecutar:

```bash
ssh-keygen -t ed25519 -C "tu-correo@ejemplo.com"
```

Seguir las instrucciones de la terminal. Se recomienda proteger la clave privada mediante una frase de seguridad.

### Paso 2. Iniciar el agente SSH

En Git Bash:

```bash
eval "$(ssh-agent -s)"
```

Agregar la clave privada al agente:

```bash
ssh-add ~/.ssh/id_ed25519
```

### Paso 3. Obtener la clave pública

```bash
cat ~/.ssh/id_ed25519.pub
```

Copiar el contenido de la clave pública y registrarlo en GitHub desde:

**Settings → SSH and GPG keys → New SSH key**

### Paso 4. Probar la conexión

```bash
ssh -T git@github.com
```

Si la configuración es correcta, GitHub mostrará un mensaje de autenticación satisfactoria.

**Importante:** nunca compartir ni subir la clave privada `id_ed25519`. Únicamente debe registrarse la clave pública, identificada por la extensión `.pub`.

## 7. Configuración de Git (Config)

Git necesita una identidad para asociar los commits con el desarrollador que los registra.

### Configurar el nombre

```bash
git config --global user.name "Tu Nombre"
```

### Configurar el correo electrónico

```bash
git config --global user.email "tu-correo@ejemplo.com"
```

### Consultar la configuración

```bash
git config --list
```

Para consultar individualmente los valores:

```bash
git config --global --get user.name
git config --global --get user.email
```

La opción `--global` aplica la configuración al usuario del equipo. Sin esta opción, la configuración puede establecerse únicamente para el repositorio actual.

## 8. Crear y clonar un repositorio

Un repositorio permite almacenar los archivos de un proyecto junto con su historial de cambios.

### Crear un repositorio en GitHub

1. Iniciar sesión en GitHub.
2. Seleccionar **New repository**.
3. Introducir el nombre del repositorio.
4. Seleccionar la visibilidad pública o privada.
5. Crear el repositorio.

### Clonar un repositorio existente

Para obtener una copia local del proyecto Montaña Serena:

```bash
git clone https://github.com/Alexis625/Desafio_Practico2ADS.git
```

Entrar en la carpeta descargada:

```bash
cd Desafio_Practico2ADS
```

Si se configuró SSH, también puede utilizarse la dirección SSH del repositorio:

```bash
git clone git@github.com:Alexis625/Desafio_Practico2ADS.git
```

### Inicializar un repositorio local

Si se está trabajando en una carpeta nueva que todavía no tiene Git:

```bash
git init
```

Este comando inicializa un repositorio Git en la carpeta actual.

### Consultar el repositorio remoto

```bash
git remote -v
```

Muestra las direcciones de los repositorios remotos configurados.

---

## 9. Realizar cambios, revertirlos y subirlos al repositorio remoto

Git permite registrar las modificaciones del código, conservar un historial y compartir los cambios mediante GitHub.

### Paso 1. Consultar el estado del proyecto

```bash
git status
```

Muestra los archivos nuevos, modificados y preparados para registrarse.

### Paso 2. Revisar las modificaciones

```bash
git diff
```

Permite observar las diferencias entre los archivos modificados y los cambios registrados en el índice de Git.

### Paso 3. Preparar los archivos

Para preparar un archivo específico:

```bash
git add index.html
```

Para preparar los cambios del directorio actual y sus subdirectorios:

```bash
git add .
```

### Paso 4. Registrar los cambios

```bash
git commit -m "Actualiza contenido de la página principal"
```

Este comando registra los cambios preparados en el historial local del repositorio.

### Paso 5. Consultar el historial

```bash
git log --oneline
```

Muestra los commits registrados en formato resumido.

### Paso 6. Subir los cambios a GitHub

```bash
git push
```

Publica los commits locales en la rama remota configurada, siempre que la rama esté vinculada y existan los permisos necesarios.

Si se está publicando una rama por primera vez:

```bash
git push -u origin main
```

Este comando publica la rama `main` en el remoto `origin` y configura su seguimiento remoto. Se utiliza cuando corresponde y la rama remota puede recibir esos cambios.

### Paso 7. Obtener los cambios del repositorio remoto

```bash
git pull
```

Obtiene los cambios remotos e intenta integrarlos en la rama actual.

### Paso 8. Revertir cambios locales no preparados

```bash
git restore index.html
```

Descarta las modificaciones locales no preparadas de `index.html` y recupera su contenido desde el índice.

Para retirar un archivo del área de preparación sin descartar sus modificaciones:

```bash
git restore --staged index.html
```

### Paso 9. Revertir un commit

```bash
git revert ID_DEL_COMMIT
```

Crea un nuevo commit que revierte los cambios del commit indicado. Debe sustituirse `ID_DEL_COMMIT` por el identificador correcto.

Después, publicar la reversión:

```bash
git push
```

**Precaución:** `git restore index.html` puede descartar modificaciones que no se hayan guardado en un commit. Antes de utilizar comandos de recuperación, revisar el estado del repositorio y conservar cualquier trabajo importante.

---

## 10. Trabajo con ramas

Las ramas permiten desarrollar mejoras de forma independiente y revisar los cambios antes de integrarlos en la rama principal.

### Consultar las ramas

```bash
git branch
```

### Crear una rama y cambiarse a ella

```bash
git switch -c mejora-pagina
```

### Cambiar a la rama principal

```bash
git switch main
```

### Integrar una rama en la rama actual

```bash
git merge mejora-pagina
```

Para colaborar mediante GitHub, también se puede publicar la rama y abrir un *pull request* para revisar e integrar los cambios.

## 11. Flujo de trabajo recomendado

Para realizar una mejora en Montaña Serena, se propone el siguiente procedimiento:

1. Actualizar la rama de trabajo cuando corresponda.
2. Crear una rama para la mejora.
3. Modificar y probar los archivos del sitio.
4. Revisar los cambios mediante `git diff`.
5. Preparar los archivos con `git add`.
6. Registrar la modificación con `git commit`.
7. Publicar la rama mediante `git push`.
8. Revisar e integrar los cambios mediante un *pull request*, si el equipo utiliza este procedimiento.

Este flujo ayuda a mantener un historial organizado y facilita la colaboración entre los integrantes.


## 12. Conclusión

Montaña Serena permite aplicar conceptos de desarrollo web y control de versiones en un proyecto práctico. HTML, CSS y JavaScript permiten construir la interfaz, mientras que Git y GitHub ayudan a registrar, organizar y compartir las modificaciones realizadas al código.

El uso de commits, ramas y repositorios remotos facilita el seguimiento del trabajo y fomenta una colaboración más organizada.



