FROM nginx:alpine

# Copy HTML files to nginx default directory
COPY public/ /usr/share/nginx/html/

# Copy static assets (CSS, images, etc.)
COPY assets/ /usr/share/nginx/html/assets/

# Copy JavaScript modules
COPY js/ /usr/share/nginx/html/js/

# Copy data files
COPY data/ /usr/share/nginx/html/data/

# Expose port 80
EXPOSE 80


#nginx comienza automáticamente, no hace falta un CMD adicional