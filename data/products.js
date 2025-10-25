const productosRopa = [
  {
    id: 1,
    nombre: "Camiseta Básica",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 25000,
    imagen: "../../assets/img/camisa-basica.jpg",
    cantidad: 32,
    descripcion: "Camiseta básica de algodón 100%, perfecta para el uso diario. Suave, cómoda y versátil, ideal para combinar con cualquier outfit casual."
  },
  {
    id: 2,
    nombre: "Pantalón Vaquero",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 49000,
    imagen: "../../assets/img/pantalon-vaquero.jpg",
    cantidad: 15,
    descripcion: "Pantalón vaquero clásico de mezclilla resistente, corte regular. Diseño atemporal que nunca pasa de moda, perfecto para looks casuales y urbanos."
  },
  {
    id: 3,
    nombre: "Remera con Capucha",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 39000,
    imagen: "../../assets/img/remera-capucha.jpg",
    cantidad: 47,
    descripcion: "Remera con capucha en algodón suave, ideal para días frescos. Comodidad y estilo en una prenda versátil para tu guardarropa casual."
  },
  {
    id: 4,
    nombre: "Vestido de Verano",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 59000,
    imagen: "../../assets/img/vestido-verano.jpg",
    cantidad: 28,
    descripcion: "Vestido de verano ligero y fresco, perfecto para días calurosos. Diseño femenino y elegante que te hará lucir radiante en cualquier ocasión."
  },
  {
    id: 5,
    nombre: "Camisa Formal",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 12000,
    imagen: "../../assets/img/camisa-formal.jpg",
    cantidad: 50,
    descripcion: "Camisa formal de corte clásico, ideal para oficina y eventos. Confeccionada en tela de alta calidad que garantiza elegancia y profesionalismo."
  },
  {
    id: 6,
    nombre: "Camisa Formal",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 35000,
    imagen: "../../assets/img/camisa-formal.jpg",
    cantidad: 50,
    descripcion: "Camisa formal premium de algodón egipcio, perfecta para reuniones importantes. Diseño refinado que proyecta confianza y estilo profesional."
  },
  {
    id: 7,
    nombre: "Pantalón Chino",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 45000,
    imagen: "../../assets/img/pantalon-chino.jpg",
    cantidad: 22,
    descripcion: "Pantalón chino de corte moderno, versátil para looks casuales y semi-formales. Confeccionado en algodón twill de excelente calidad y durabilidad."
  },
  {
    id: 8,
    nombre: "Remera Deportiva",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 37000,
    imagen: "../../assets/img/remera-deportiva.jpg",
    cantidad: 39,
    descripcion: "Remera deportiva de tela técnica transpirable, ideal para entrenamientos. Tecnología dry-fit que mantiene la piel seca durante la actividad física."
  },
  {
    id: 9,
    nombre: "Falda Midi",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 42000,
    imagen: "../../assets/img/falda-mini.jpg",
    cantidad: 18,
    descripcion: "Falda midi elegante de largo intermedio, perfecta para looks sofisticados. Diseño versátil que se adapta tanto a ocasiones casuales como formales."
  },
  {
    id: 10,
    nombre: "Abrigo de Invierno",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 129000,
    imagen: "../../assets/img/abrigo-invierno.jpg",
    cantidad: 25,
    descripcion: "Abrigo de invierno con aislamiento térmico superior, protección total contra el frío. Diseño elegante y funcional para los días más helados del año."
  },
  {
    id: 11,
    nombre: "Camiseta de Manga Larga",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 29000,
    imagen: "../../assets/img/camiseta-larga.jpg",
    cantidad: 41,
    descripcion: "Camiseta de manga larga en algodón peinado, ideal para entretiempo. Corte cómodo y ajuste perfecto para looks casuales y deportivos."
  },
  {
    id: 12,
    nombre: "Pantalón de Vestir",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 55000,
    imagen: "../../assets/img/pantalon-vestir.jpg",
    cantidad: 36,
    descripcion: "Pantalón de vestir elegante con corte sastre, perfecto para ocasiones formales. Tela de alta calidad que garantiza comodidad y distinción."
  },
  {
    id: 13,
    nombre: "Remera Oversize",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 41000,
    imagen: "../../assets/img/remera-overzise.jpg",
    cantidad: 19,
    descripcion: "Remera oversize de tendencia urbana, corte holgado y moderno. Perfecta para crear looks streetwear con máximo confort y estilo."
  },
  {
    id: 14,
    nombre: "Vestido de Noche",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 79000,
    imagen: "../../assets/img/vestido-noche.jpg",
    cantidad: 29,
    descripcion: "Vestido de noche elegante para eventos especiales, diseño sofisticado que realza la figura. Perfecto para galas, cenas y celebraciones importantes."
  },
  {
    id: 15,
    nombre: "Chaqueta Bomber",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 89000,
    imagen: "../../assets/img/chaqueta-bomber.jpg",
    cantidad: 44,
    descripcion: "Chaqueta bomber de estilo aviador, tendencia urbana y versátil. Diseño moderno que combina comodidad, estilo y un toque rebelde único."
  },  
  {
    id: 17,
    nombre: "Pantalón Cargo",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 52000,
    imagen: "../../assets/img/pantalon-cargo.jpg",
    cantidad: 38,
    descripcion: "Pantalón cargo funcional con múltiples bolsillos, estilo militar moderno. Resistente y práctico, ideal para aventuras urbanas y looks casuales."
  },
  {
    id: 18,
    nombre: "Remera con Cremallera",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 44000,
    imagen: "../../assets/img/remera-cierre.jpg",
    cantidad: 16,
    descripcion: "Remera con cremallera frontal, diseño contemporáneo y versátil. Detalles modernos que agregan un toque diferencial a tu look deportivo."
  },
  {
    id: 19,
    nombre: "Vestido de Fiesta",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 69000,
    imagen: "../../assets/img/vestido-fiesta.jpg",
    cantidad: 31,
    descripcion: "Vestido de fiesta glamoroso para ocasiones especiales, diseño que destaca tu elegancia. Perfecto para bodas, graduaciones y eventos memorables."
  },
  {
    id: 20,
    nombre: "Abrigo de Lana",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 119000,
    imagen: "../../assets/img/abrigo-lana.jpg",
    cantidad: 49,
    descripcion: "Abrigo de lana merino de lujo, calidez y elegancia suprema. Confección artesanal que garantiza durabilidad y sofisticación en cada detalle."
  },
  {
    id: 21,
    nombre: "Zapatillas Deportivas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 65000,
    imagen: "../../assets/img/zapatillas-deportivas.jpg",
    cantidad: 27,
    descripcion: "Zapatillas deportivas de alto rendimiento con amortiguación avanzada. Diseñadas para brindar máximo confort y soporte durante cualquier actividad física."
  },
  {
    id: 22,
    nombre: "Zapatillas Urbanas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 58000,
    imagen: "../../assets/img/zapatilla-urbana.jpg",
    cantidad: 40,
    descripcion: "Zapatillas urbanas de estilo casual, perfectas para el día a día. Combinan comodidad y diseño moderno para acompañarte en la ciudad."
  },
  {
    id: 23,
    nombre: "Zapatillas de Running",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 72000,
    imagen: "../../assets/img/zapatilla-running.jpg",
    cantidad: 24,
    descripcion: "Zapatillas de running con tecnología de absorción de impacto, ideales para corredores. Suela especializada que optimiza cada zancada y protege tus articulaciones."
  },
  {
    id: 24,
    nombre: "Zapatillas de Baloncesto",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 85000,
    imagen: "../../assets/img/zapatilla-basket.jpg",
    cantidad: 33,
    descripcion: "Zapatillas de baloncesto con soporte de tobillo y tracción superior. Diseño profesional que mejora tu rendimiento en la cancha con estilo urbano."
  },
  {
    id: 25,
    nombre: "Zapatillas de Tenis",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 78000,
    imagen: "../../assets/img/zapatilla-tenis.jpg",
    cantidad: 12,
    descripcion: "Zapatillas de tenis con suela específica para canchas, estabilidad y durabilidad excepcional. Perfectas para jugadores que buscan precisión y confort."
  },
  {
    id: 26,
    nombre: "Zapatillas de Skate",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 62000,
    imagen: "../../assets/img/zapatilla-skate.jpg",
    cantidad: 46,
    descripcion: "Zapatillas de skate resistentes con grip superior, diseñadas para soportar el desgaste extremo. Estilo streetwear auténtico para verdaderos skaters."
  },
  {
    id: 27,
    nombre: "Zapatillas de Senderismo",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 90000,
    imagen: "../../assets/img/zapatilla-senderismo.jpg",
    cantidad: 20,
    descripcion: "Zapatillas de senderismo impermeables con suela antideslizante, perfectas para aventuras al aire libre. Protección y comodidad en terrenos difíciles."
  },
  {
    id: 28,
    nombre: "Zapatillas Clásicas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 55000,
    imagen: "../../assets/img/zapatillas-clasicas.jpg",
    cantidad: 37,
    descripcion: "Zapatillas clásicas de diseño atemporal, elegancia casual que nunca pasa de moda. Versatilidad perfecta para cualquier ocasión y estilo personal."
  },
  {
    id: 29,
    nombre: "Zapatillas de Moda",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 68000,
    imagen: "../../assets/img/zapatilla-moda.jpg",
    cantidad: 14,
    descripcion: "Zapatillas de moda con diseño vanguardista, tendencia actual en calzado urbano. Perfectas para destacar con un look moderno y sofisticado."
  },
  {
    id: 30,
    nombre: "Zapatillas Premium",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 110000,
    imagen: "../../assets/img/zapatilla-premium.jpg",
    cantidad: 43,
    descripcion: "Zapatillas premium de lujo con materiales de la más alta calidad, artesanía excepcional y diseño exclusivo. La elección perfecta para los más exigentes."
  },
];

export { productosRopa };