import nombresProductores from "./nombresProductores";

const creaMejoras = () => {
  const mejoras = [];

  const detalles = [
    [25, "Pequeño impulso"],
    [30, "impulso Molon"],
    [35, "Pequeño mejor impulso"],
    [40, "Rico impulso"],
    [50, "Super impulso"],
    [75, "impuso Definitivo"],
    [75, "impuso Definitivo2"],
    [100, "impulso Maximo"],
    
    
  ];

  let id = 1;

  for (let detalle of detalles) {
    for (let nombreProductor of nombresProductores) {
      const objeto = {};
      objeto.id = id;
      objeto.titulo = `${detalle[1]} para ${nombreProductor}`;
      (objeto.precio = detalle[0] * id + 200 * id),
        (objeto.descripcion = `Aumenta un ${detalle[0]}% la velocidad de producción del  ${nombreProductor}`);
      objeto.adquirida = false;
      objeto.parametros = {
        tipo: "velocidad",
        cantidad: detalle[0],
        aplica: nombreProductor,
      };

      mejoras.push(objeto);

      id += 1;
    }
  }

  const otras = [
    [1, "Barrido superior", 500, "mejorar_cepillo_clic"],
    [1, "Productos para zapatos", 200000, "mejorar_cepillo_clic"],
    [1, "No le busques explicación", 500000, "mejorar_cepillo_clic"],

    [1, "Afilar espada", 400, "mejorar_espada"],
    [1, "Aceite antifantasmas", 1000, "mejorar_espada"],
    [1, "Conjuro antifantasmas", 7000, "mejorar_espada"],
  ];

  for (let detalle of otras) {
    const objeto = {};
    objeto.id = id;
    objeto.titulo = detalle[1];
    (objeto.precio = detalle[2]), (objeto.adquirida = false);
    objeto.parametros = {
      tipo: detalle[3],
      cantidad: detalle[0],
    };

    if (detalle[3] === "mejorar_cepillo_clic") {
      objeto.descripcion = `Aumenta en ${detalle[0]} el dinero producido al frotar zapatos`;
    }

    if (detalle[3] === "mejorar_espada") {
      objeto.descripcion = `Aumenta en ${detalle[0]} el daño de la espada`;
    }

    if (detalle[3] === "") {
      objeto.descripcion = `Aumenta en ${detalle[0]} el dinero producido al matar fantasmas`;
    }

    mejoras.push(objeto);
    id += 1;
  }
  return mejoras;
};

export default creaMejoras;

