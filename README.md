# **Ecommerce DcShop** 🛒

### Tecnologías utilizadas:
- JavaScript
- HTML5
- CSS3

### Servidor:
- NGINX

### Librerias:
- Toastify


## Cómo ejecutar el proyecto
### 1. Clonar el repositorio
git clone https://github.com/Nicodici/Ecommerce-NicolasDiCiuccio.git
cd Ecommerce-NicolasDiCiuccio

### 2. Construir la imagen Docker
docker build -t ecommerce:nginx .

### 3. Ejecutar el contenedor
docker run -d -p 8080:80 --name ecommerce-app ecommerce:nginx

### 4. Abrir en el navegador
http://localhost:8080
