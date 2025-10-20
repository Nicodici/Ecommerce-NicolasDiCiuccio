FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY carrito.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY img/ /usr/share/nginx/html/img/

EXPOSE 80


#ginx comienza automáticamente, no hace falta un CMD adicional