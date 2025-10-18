# PROYECTO CARPIYOUTUBE - GUÍA DE DESARROLLO CON NODE.JS

## ¿QUÉ ES ESTE PROYECTO?
Este es un proyecto de JavaScript que utiliza Node.js para gestión de dependencias y herramientas de desarrollo.

## CONFIGURACIÓN INICIAL
El proyecto ya está configurado con:
- ✅ package.json inicializado
- ✅ Dependencias de producción: toastify-js
- ✅ Dependencias de desarrollo: live-server, nodemon, concurrently
- ✅ Scripts personalizados configurados

## COMANDOS DISPONIBLES

### 1. INICIAR PROYECTO (RECOMENDADO PARA DESARROLLO)
```
npm run dev
```
- Inicia servidor local en puerto 3000
- Abre automáticamente index.html en el navegador
- Recarga AUTOMÁTICA cuando cambias archivos en css/, js/, img/
- Perfecto para desarrollo activo

### 2. INICIAR PROYECTO (BÁSICO)
```
npm start
```
- Inicia servidor local en puerto 3000
- Abre automáticamente index.html
- Recarga automática cuando cambias cualquier archivo

### 3. SERVIDOR SIMPLE
```
npm run serve
```
- Inicia servidor sin abrir navegador automáticamente
- Útil si ya tienes el navegador abierto en otra pestaña

### 4. INSTALAR DEPENDENCIAS (SI ES NECESARIO)
```
npm install
```
- Instala todas las dependencias del proyecto
- Solo necesario si descargas el proyecto por primera vez

## ESTRUCTURA DEL PROYECTO
```
CarpiYoutube/
├── index.html          # Página principal
├── carrito.html        # Página del carrito
├── package.json        # Configuración Node.js y scripts
├── README.txt          # Este archivo
├── css/
│   └── style.css       # Estilos del proyecto
├── js/
│   ├── main.js         # JavaScript principal
│   └── carrito.js      # JavaScript del carrito
└── img/                # Imágenes del proyecto
```

## FLUJO DE TRABAJO RECOMENDADO

1. ABRIR TERMINAL EN LA CARPETA DEL PROYECTO
2. EJECUTAR: npm run dev
3. AUTOMÁTICAMENTE SE ABRIRÁ http://localhost:3000
4. EDITAR ARCHIVOS (HTML, CSS, JS)
5. VER CAMBIOS AUTOMÁTICAMENTE EN EL NAVEGADOR
6. PARA DETENER: Ctrl + C en la terminal

## BENEFICIOS DE USAR NODE.JS EN ESTE PROYECTO

✅ RECARGA AUTOMÁTICA: No necesitas refrescar manualmente el navegador
✅ SERVIDOR LOCAL: Evitas problemas de CORS y file://
✅ GESTIÓN DE DEPENDENCIAS: Fácil instalación de librerías (como toastify-js)
✅ DESARROLLO PROFESIONAL: Estructura estándar de la industria
✅ SCRIPTS PERSONALIZADOS: Comandos rápidos para tareas comunes

## DEPENDENCIAS INSTALADAS

PRODUCCIÓN:
- toastify-js: Librería para notificaciones toast

DESARROLLO:
- live-server: Servidor local con recarga automática
- nodemon: Reinicia automáticamente aplicaciones Node.js
- concurrently: Ejecuta múltiples comandos simultáneamente

## PUERTOS UTILIZADOS
- Desarrollo: http://localhost:3000
- Si el puerto 3000 está ocupado, live-server buscará el siguiente disponible

## RESOLUCIÓN DE PROBLEMAS

PROBLEMA: "npm no se reconoce como comando"
SOLUCIÓN: Instalar Node.js desde https://nodejs.org

PROBLEMA: Puerto 3000 ocupado
SOLUCIÓN: El servidor automáticamente usará otro puerto disponible

PROBLEMA: Cambios no se reflejan
SOLUCIÓN: 
1. Verificar que npm run dev esté ejecutándose
2. Revisar la consola del navegador por errores
3. Limpiar caché del navegador (Ctrl + F5)

## COMANDOS ÚTILES ADICIONALES

Ver dependencias instaladas:
```
npm list
```

Actualizar dependencias:
```
npm update
```

Verificar vulnerabilidades:
```
npm audit
```

Arreglar vulnerabilidades automáticamente:
```
npm audit fix
```

## NOTAS IMPORTANTES
- Siempre usar npm run dev para desarrollo activo
- Los cambios se guardan automáticamente
- No cerrar la terminal mientras desarrollas
- El proyecto funciona sin internet una vez instalado

¡FELIZ DESARROLLO! 🚀