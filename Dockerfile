FROM nginx:alpine

# Copiar los archivos HTML a la raíz de nginx
COPY public/*.html /usr/share/nginx/html/

# Copiar las carpetas manteniendo la estructura
COPY assets/ /usr/share/nginx/html/assets/
COPY js/ /usr/share/nginx/html/js/
COPY data/ /usr/share/nginx/html/data/

EXPOSE 80

#nginx comienza automáticamente, no hace falta un CMD adicional