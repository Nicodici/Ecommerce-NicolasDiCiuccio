const productosRopa = [
  {
    id: 1,
    nombre: "Camiseta Básica",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 25000,
    imagen: "..//assets/img/camisa-basica.jpg",
    cantidad: 32,
    descripcion: "Camiseta básica de algodón 100%, perfecta para el uso diario. Suave, cómoda y versátil, ideal para combinar con cualquier outfit casual."
  },
  {
    id: 2,
    nombre: "Pantalón Vaquero",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 49000,
    imagen: "..//assets/img/pantalon-vaquero.jpg",
    cantidad: 15,
    descripcion: "Pantalón vaquero clásico de mezclilla resistente, corte regular. Diseño atemporal que nunca pasa de moda, perfecto para looks casuales y urbanos."
  },
  {
    id: 3,
    nombre: "Remera con Capucha",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 39000,
    imagen: "..//assets/img/remera-capucha.jpg",
    cantidad: 47,
    descripcion: "Remera con capucha en algodón suave, ideal para días frescos. Comodidad y estilo en una prenda versátil para tu guardarropa casual."
  },
  {
    id: 4,
    nombre: "Vestido de Verano",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 59000,
    imagen: "..//assets/img/vestido-verano.jpg",
    cantidad: 28,
    descripcion: "Vestido de verano ligero y fresco, perfecto para días calurosos. Diseño femenino y elegante que te hará lucir radiante en cualquier ocasión."
  },
  {
    id: 5,
    nombre: "Camisa Formal",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 12000,
    imagen: "..//assets/img/camisa-formal.jpg",
    cantidad: 50,
    descripcion: "Camisa formal de corte clásico, ideal para oficina y eventos. Confeccionada en tela de alta calidad que garantiza elegancia y profesionalismo."
  },
  {
    id: 6,
    nombre: "Camisa Formal",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 35000,
    imagen: "..//assets/img/camisa-formal.jpg",
    cantidad: 50,
    descripcion: "Camisa formal premium de algodón egipcio, perfecta para reuniones importantes. Diseño refinado que proyecta confianza y estilo profesional."
  },
  {
    id: 7,
    nombre: "Pantalón Chino",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 45000,
    imagen: "..//assets/img/pantalon-chino.jpg",
    cantidad: 22,
    descripcion: "Pantalón chino de corte moderno, versátil para looks casuales y semi-formales. Confeccionado en algodón twill de excelente calidad y durabilidad."
  },
  {
    id: 8,
    nombre: "Remera Deportiva",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 37000,
    imagen: "..//assets/img/remera-deportiva.jpg",
    cantidad: 39,
    descripcion: "Remera deportiva de tela técnica transpirable, ideal para entrenamientos. Tecnología dry-fit que mantiene la piel seca durante la actividad física."
  },
  {
    id: 9,
    nombre: "Falda Midi",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 42000,
    imagen: "..//assets/img/falda-mini.jpg",
    cantidad: 18,
    descripcion: "Falda midi elegante de largo intermedio, perfecta para looks sofisticados. Diseño versátil que se adapta tanto a ocasiones casuales como formales."
  },
  {
    id: 10,
    nombre: "Abrigo de Invierno",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 129000,
    imagen: "..//assets/img/abrigo-invierno.jpg",
    cantidad: 25,
    descripcion: "Abrigo de invierno con aislamiento térmico superior, protección total contra el frío. Diseño elegante y funcional para los días más helados del año."
  },
  {
    id: 11,
    nombre: "Camiseta de Manga Larga",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 29000,
    imagen: "..//assets/img/camiseta-larga.jpg",
    cantidad: 41,
    descripcion: "Camiseta de manga larga en algodón peinado, ideal para entretiempo. Corte cómodo y ajuste perfecto para looks casuales y deportivos."
  },
  {
    id: 12,
    nombre: "Pantalón de Vestir",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 55000,
    imagen: "..//assets/img/pantalon-vestir.jpg",
    cantidad: 36,
    descripcion: "Pantalón de vestir elegante con corte sastre, perfecto para ocasiones formales. Tela de alta calidad que garantiza comodidad y distinción."
  },
  {
    id: 13,
    nombre: "Remera Oversize",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 41000,
    imagen: "..//assets/img/remera-overzise.jpg",
    cantidad: 19,
    descripcion: "Remera oversize de tendencia urbana, corte holgado y moderno. Perfecta para crear looks streetwear con máximo confort y estilo."
  },
  {
    id: 14,
    nombre: "Vestido de Noche",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 79000,
    imagen: "..//assets/img/vestido-noche.jpg",
    cantidad: 29,
    descripcion: "Vestido de noche elegante para eventos especiales, diseño sofisticado que realza la figura. Perfecto para galas, cenas y celebraciones importantes."
  },
  {
    id: 15,
    nombre: "Chaqueta Bomber",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 89000,
    imagen: "..//assets/img/chaqueta-bomber.jpg",
    cantidad: 44,
    descripcion: "Chaqueta bomber de estilo aviador, tendencia urbana y versátil. Diseño moderno que combina comodidad, estilo y un toque rebelde único."
  },  
  {
    id: 17,
    nombre: "Pantalón Cargo",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 52000,
    imagen: "..//assets/img/pantalon-cargo.jpg",
    cantidad: 38,
    descripcion: "Pantalón cargo funcional con múltiples bolsillos, estilo militar moderno. Resistente y práctico, ideal para aventuras urbanas y looks casuales."
  },
  {
    id: 18,
    nombre: "Remera con Cremallera",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 44000,
    imagen: "..//assets/img/remera-cierre.jpg",
    cantidad: 16,
    descripcion: "Remera con cremallera frontal, diseño contemporáneo y versátil. Detalles modernos que agregan un toque diferencial a tu look deportivo."
  },
  {
    id: 19,
    nombre: "Vestido de Fiesta",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 69000,
    imagen: "..//assets/img/vestido-fiesta.jpg",
    cantidad: 31,
    descripcion: "Vestido de fiesta glamoroso para ocasiones especiales, diseño que destaca tu elegancia. Perfecto para bodas, graduaciones y eventos memorables."
  },
  {
    id: 20,
    nombre: "Abrigo de Lana",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 119000,
    imagen: "..//assets/img/abrigo-lana.jpg",
    cantidad: 49,
    descripcion: "Abrigo de lana merino de lujo, calidez y elegancia suprema. Confección artesanal que garantiza durabilidad y sofisticación en cada detalle."
  },
  {
    id: 21,
    nombre: "Zapatillas Deportivas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 65000,
    imagen: "..//assets/img/zapatillas-deportivas.jpg",
    cantidad: 27,
    descripcion: "Zapatillas deportivas de alto rendimiento con amortiguación avanzada. Diseñadas para brindar máximo confort y soporte durante cualquier actividad física."
  },
  {
    id: 22,
    nombre: "Zapatillas Urbanas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 58000,
    imagen: "..//assets/img/zapatilla-urbana.jpg",
    cantidad: 40,
    descripcion: "Zapatillas urbanas de estilo casual, perfectas para el día a día. Combinan comodidad y diseño moderno para acompañarte en la ciudad."
  },
  {
    id: 23,
    nombre: "Zapatillas de Running",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 72000,
    imagen: "..//assets/img/zapatilla-running.jpg",
    cantidad: 24,
    descripcion: "Zapatillas de running con tecnología de absorción de impacto, ideales para corredores. Suela especializada que optimiza cada zancada y protege tus articulaciones."
  },
  {
    id: 24,
    nombre: "Zapatillas de Baloncesto",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 85000,
    imagen: "..//assets/img/zapatilla-basket.jpg",
    cantidad: 33,
    descripcion: "Zapatillas de baloncesto con soporte de tobillo y tracción superior. Diseño profesional que mejora tu rendimiento en la cancha con estilo urbano."
  },
  {
    id: 25,
    nombre: "Zapatillas de Tenis",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 78000,
    imagen: "..//assets/img/zapatilla-tenis.jpg",
    cantidad: 12,
    descripcion: "Zapatillas de tenis con suela específica para canchas, estabilidad y durabilidad excepcional. Perfectas para jugadores que buscan precisión y confort."
  },
  {
    id: 26,
    nombre: "Zapatillas de Skate",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 62000,
    imagen: "..//assets/img/zapatilla-skate.jpg",
    cantidad: 46,
    descripcion: "Zapatillas de skate resistentes con grip superior, diseñadas para soportar el desgaste extremo. Estilo streetwear auténtico para verdaderos skaters."
  },
  {
    id: 27,
    nombre: "Zapatillas de Senderismo",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 90000,
    imagen: "..//assets/img/zapatilla-senderismo.jpg",
    cantidad: 20,
    descripcion: "Zapatillas de senderismo impermeables con suela antideslizante, perfectas para aventuras al aire libre. Protección y comodidad en terrenos difíciles."
  },
  {
    id: 28,
    nombre: "Zapatillas Clásicas",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 55000,
    imagen: "..//assets/img/zapatillas-clasicas.jpg",
    cantidad: 37,
    descripcion: "Zapatillas clásicas de diseño atemporal, elegancia casual que nunca pasa de moda. Versatilidad perfecta para cualquier ocasión y estilo personal."
  },
  {
    id: 29,
    nombre: "Zapatillas de Moda",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 68000,
    imagen: "..//assets/img/zapatilla-moda.jpg",
    cantidad: 14,
    descripcion: "Zapatillas de moda con diseño vanguardista, tendencia actual en calzado urbano. Perfectas para destacar con un look moderno y sofisticado."
  },
  {
    id: 30,
    nombre: "Zapatillas Premium",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 110000,
    imagen: "..//assets/img/zapatilla-premium.jpg",
    cantidad: 43,
    descripcion: "Zapatillas premium de lujo con materiales de la más alta calidad, artesanía excepcional y diseño exclusivo. La elección perfecta para los más exigentes."
  },
  // PRODUCTOS ADICIONALES PARA COMPLETAR 10 EN CADA CATEGORÍA
  // Camisetas adicionales (ya tiene 4, agregar 6 más)
  {
    id: 31,
    nombre: "Camiseta Deportiva",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 28000,
    imagen: "..//assets/img/camiseta-deportiva.jpg",
    cantidad: 45,
    descripcion: "Camiseta deportiva de material transpirable, ideal para entrenamientos y actividad física. Tecnología de secado rápido para máximo confort."
  },
  {
    id: 32,
    nombre: "Camiseta Vintage",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 35000,
    imagen: "..//assets/img/camiseta-vintage.jpg",
    cantidad: 22,
    descripcion: "Camiseta con diseño vintage retro, estilo clásico que nunca pasa de moda. Perfecta para looks casuales con toque nostálgico."
  },
  {
    id: 33,
    nombre: "Camiseta Estampada",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 32000,
    imagen: "..//assets/img/camiseta-estampada.jpg",
    cantidad: 38,
    descripcion: "Camiseta con estampado original y colorido, diseño único que refleja tu personalidad. Ideal para destacar en cualquier ocasión."
  },
  {
    id: 34,
    nombre: "Camiseta Polo",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 42000,
    imagen: "..//assets/img/camiseta-polo.jpg",
    cantidad: 31,
    descripcion: "Camiseta polo clásica de corte elegante, versatilidad entre casual y formal. Perfecta para reuniones y eventos semiformales."
  },
  {
    id: 35,
    nombre: "Camiseta Oversize",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 38000,
    imagen: "..//assets/img/camiseta-oversize.jpg",
    cantidad: 27,
    descripcion: "Camiseta oversize de corte amplio y moderno, tendencia urbana actual. Comodidad y estilo en una prenda versátil."
  },
  {
    id: 36,
    nombre: "Camiseta Premium",
    categoria: { id: "Camisetas", nombre: "Camisetas" },
    precio: 55000,
    imagen: "..//assets/img/camiseta-premium.jpg",
    cantidad: 19,
    descripcion: "Camiseta premium de algodón pima, calidad excepcional y acabados perfectos. Suavidad y durabilidad en una prenda de lujo."
  },
  
  // Pantalones adicionales (ya tiene 3, agregar 7 más)
  {
    id: 37,
    nombre: "Pantalón Chino",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 52000,
    imagen: "..//assets/img/pantalon-chino.jpg",
    cantidad: 41,
    descripcion: "Pantalón chino de corte moderno y tela suave, versatilidad entre casual y elegante. Perfecto para múltiples ocasiones."
  },
  {
    id: 38,
    nombre: "Pantalón Jogger",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 45000,
    imagen: "..//assets/img/pantalon-jogger.jpg",
    cantidad: 36,
    descripcion: "Pantalón jogger cómodo y moderno, ideal para tiempo libre y actividades relajadas. Estilo urbano con máximo confort."
  },
  {
    id: 39,
    nombre: "Pantalón Cargo",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 58000,
    imagen: "..//assets/img/pantalon-cargo.jpg",
    cantidad: 29,
    descripcion: "Pantalón cargo con múltiples bolsillos, funcionalidad y estilo militar. Resistente y práctico para uso diario."
  },
  {
    id: 40,
    nombre: "Pantalón Formal",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 65000,
    imagen: "..//assets/img/pantalon-formal.jpg",
    cantidad: 24,
    descripcion: "Pantalón formal de vestir, elegancia y sofisticación para eventos especiales. Corte impecable y tela de primera calidad."
  },
  {
    id: 41,
    nombre: "Pantalón Deportivo",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 38000,
    imagen: "..//assets/img/pantalon-deportivo.jpg",
    cantidad: 52,
    descripcion: "Pantalón deportivo de material transpirable, perfecto para entrenamientos y actividades físicas. Libertad de movimiento garantizada."
  },
  {
    id: 42,
    nombre: "Pantalón Slim",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 48000,
    imagen: "..//assets/img/pantalon-slim.jpg",
    cantidad: 33,
    descripcion: "Pantalón slim fit de corte entallado, silueta moderna y estilizada. Perfecto para looks contemporáneos y elegantes."
  },
  {
    id: 43,
    nombre: "Pantalón Palazzo",
    categoria: { id: "Pantalones", nombre: "Pantalones" },
    precio: 55000,
    imagen: "..//assets/img/pantalon-palazzo.jpg",
    cantidad: 26,
    descripcion: "Pantalón palazzo de corte amplio y fluido, comodidad y elegancia femenina. Ideal para ocasiones especiales y verano."
  },
  
  // Remeras adicionales (ya tiene 3, agregar 7 más)
  {
    id: 44,
    nombre: "Remera Básica Blanca",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 22000,
    imagen: "..//assets/img/remera-basica-blanca.jpg",
    cantidad: 60,
    descripcion: "Remera básica blanca de algodón, esencial en todo guardarropa. Versatilidad absoluta para combinar con cualquier prenda."
  },
  {
    id: 45,
    nombre: "Remera Estampada Rock",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 35000,
    imagen: "..//assets/img/remera-rock.jpg",
    cantidad: 28,
    descripcion: "Remera con estampado de banda de rock, estilo rebelde y auténtico. Perfecta para expresar tu pasión por la música."
  },
  {
    id: 46,
    nombre: "Remera Manga Larga",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 32000,
    imagen: "..//assets/img/remera-manga-larga.jpg",
    cantidad: 42,
    descripcion: "Remera de manga larga en algodón suave, perfecta para entretiempo. Comodidad y protección en una prenda versátil."
  },
  {
    id: 47,
    nombre: "Remera Deportiva Mujer",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 29000,
    imagen: "..//assets/img/remera-deportiva-mujer.jpg",
    cantidad: 37,
    descripcion: "Remera deportiva femenina de material técnico, ideal para yoga y fitness. Transpirable y con ajuste perfecto."
  },
  {
    id: 48,
    nombre: "Remera Crop Top",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 26000,
    imagen: "..//assets/img/remera-crop.jpg",
    cantidad: 34,
    descripcion: "Remera crop top moderna y juvenil, tendencia actual en moda femenina. Perfecta para looks frescos y modernos."
  },
  {
    id: 49,
    nombre: "Remera Tie Dye",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 38000,
    imagen: "..//assets/img/remera-tie-dye.jpg",
    cantidad: 25,
    descripcion: "Remera con diseño tie dye colorido, estilo bohemio y artístico. Única y especial, cada prenda es diferente."
  },
  {
    id: 50,
    nombre: "Remera Técnica",
    categoria: { id: "Remeras", nombre: "Remeras" },
    precio: 45000,
    imagen: "..//assets/img/remera-tecnica.jpg",
    cantidad: 31,
    descripcion: "Remera técnica de alto rendimiento, tecnología avanzada para deportistas. Secado rápido y control de temperatura."
  },
  
  // Vestidos adicionales (ya tiene 3, agregar 7 más)
  {
    id: 51,
    nombre: "Vestido Casual",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 48000,
    imagen: "..//assets/img/vestido-casual.jpg",
    cantidad: 35,
    descripcion: "Vestido casual cómodo y versátil, perfecto para el día a día. Estilo relajado con toque femenino y elegante."
  },
  {
    id: 52,
    nombre: "Vestido de Noche",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 85000,
    imagen: "..//assets/img/vestido-noche.jpg",
    cantidad: 18,
    descripcion: "Vestido de noche elegante y sofisticado, perfecto para eventos especiales. Diseño glamoroso que te hará brillar."
  },
  {
    id: 53,
    nombre: "Vestido Maxi",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 62000,
    imagen: "..//assets/img/vestido-maxi.jpg",
    cantidad: 27,
    descripcion: "Vestido maxi largo y fluido, elegancia bohemia para cualquier ocasión. Comodidad y estilo en una prenda única."
  },
  {
    id: 54,
    nombre: "Vestido Midi",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 55000,
    imagen: "..//assets/img/vestido-midi.jpg",
    cantidad: 32,
    descripcion: "Vestido midi de largo medio, versatilidad perfecta entre casual y formal. Ideal para oficina y eventos sociales."
  },
  {
    id: 55,
    nombre: "Vestido Floral",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 52000,
    imagen: "..//assets/img/vestido-floral.jpg",
    cantidad: 29,
    descripcion: "Vestido con estampado floral romántico, feminidad y delicadeza en cada detalle. Perfecto para primavera y verano."
  },
  {
    id: 56,
    nombre: "Vestido Cóctel",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 72000,
    imagen: "..//assets/img/vestido-coctel.jpg",
    cantidad: 21,
    descripcion: "Vestido cóctel elegante para eventos especiales, sofisticación y glamour. Diseño que te hará destacar en cualquier fiesta."
  },
  {
    id: 57,
    nombre: "Vestido Bohemio",
    categoria: { id: "Vestidos", nombre: "Vestidos" },
    precio: 58000,
    imagen: "..//assets/img/vestido-bohemio.jpg",
    cantidad: 24,
    descripcion: "Vestido bohemio con detalles únicos, estilo libre y artístico. Perfecto para expresar tu personalidad creativa."
  },
  
  // Chaquetas adicionales (ya tiene 3, agregar 7 más)
  {
    id: 58,
    nombre: "Chaqueta Bomber",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 68000,
    imagen: "..//assets/img/chaqueta-bomber.jpg",
    cantidad: 28,
    descripcion: "Chaqueta bomber urbana y moderna, estilo street wear contemporáneo. Perfecta para looks casuales con actitud."
  },
  {
    id: 59,
    nombre: "Chaqueta Blazer",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 85000,
    imagen: "..//assets/img/chaqueta-blazer.jpg",
    cantidad: 22,
    descripcion: "Chaqueta blazer elegante y versátil, profesionalismo y sofisticación. Ideal para oficina y eventos formales."
  },
  {
    id: 60,
    nombre: "Chaqueta Deportiva",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 58000,
    imagen: "..//assets/img/chaqueta-deportiva.jpg",
    cantidad: 35,
    descripcion: "Chaqueta deportiva funcional y cómoda, perfecta para entrenamientos y actividades al aire libre. Resistente y práctica."
  },
  {
    id: 61,
    nombre: "Chaqueta de Cuero",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 120000,
    imagen: "..//assets/img/chaqueta-cuero.jpg",
    cantidad: 15,
    descripcion: "Chaqueta de cuero genuino, estilo clásico y rebelde. Durabilidad y carácter en una prenda icónica e imperecedera."
  },
  {
    id: 62,
    nombre: "Chaqueta Parka",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 95000,
    imagen: "..//assets/img/chaqueta-parka.jpg",
    cantidad: 19,
    descripcion: "Chaqueta parka con capucha, protección total contra el frío y la lluvia. Funcionalidad y estilo para días adversos."
  },
  {
    id: 63,
    nombre: "Chaqueta Denim",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 62000,
    imagen: "..//assets/img/chaqueta-denim.jpg",
    cantidad: 33,
    descripcion: "Chaqueta de mezclilla clásica, versatilidad atemporal que nunca pasa de moda. Perfecta para looks casuales y urbanos."
  },
  {
    id: 64,
    nombre: "Chaqueta Impermeable",
    categoria: { id: "Chaquetas", nombre: "Chaquetas" },
    precio: 72000,
    imagen: "..//assets/img/chaqueta-impermeable.jpg",
    cantidad: 26,
    descripcion: "Chaqueta impermeable técnica, protección avanzada contra lluvia y viento. Ideal para actividades outdoor y clima adverso."
  },
  
  // Zapatillas adicionales (ya tiene 8, agregar 2 más)
  {
    id: 65,
    nombre: "Zapatillas Running",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 75000,
    imagen: "..//assets/img/zapatillas-running.jpg",
    cantidad: 41,
    descripcion: "Zapatillas especializadas para running, tecnología avanzada de amortiguación. Perfectas para corredores exigentes y entrenamientos intensos."
  },
  {
    id: 66,
    nombre: "Zapatillas Casual",
    categoria: { id: "Zapatillas", nombre: "Zapatillas" },
    precio: 52000,
    imagen: "..//assets/img/zapatillas-casual.jpg",
    cantidad: 38,
    descripcion: "Zapatillas casuales versátiles y cómodas, perfectas para uso diario. Estilo relajado que combina con cualquier outfit informal."
  }
];

export { productosRopa };