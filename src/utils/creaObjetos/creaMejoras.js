import nombresProductores from "./nombresProductores";

const creaMejoras = () => {
  const mejoras = [];

  const detalles = [
    [50, "Pequeño impulso"],
    [50, "Pequeño mejor impulso"],
    [75, "Rico impulso"],
    [90, "Super impulso"],
    [100, "impuso Definitivo"],
    [100, "impuso Definitivo2"],
    [125, "impulso Maximo"],
    [125, "impulso Maximo2"],
  ];

  let id = 1;

  for (let detalle of detalles) {
    for (let nombreProductor of nombresProductores) {
      const objeto = {};
      objeto.id = id;
      objeto.titulo = `${detalle[1]} para ${nombreProductor}`;
      objeto.precio = detalle[0] * id + 200 * id,
      objeto.descripcion = `Aumenta un ${detalle[0]}% la velocidad de producción del  ${nombreProductor}`;
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
    [1, "No le busques explicación", 500000, "mejorar_cepillo_clic" ],

    [1, "Afilar espada", 400, "mejorar_espada"],
    [1, "Aceite antifantasmas", 300, "mejorar_espada"],
    [1, "Conjuro antifantasmas", 300, "mejorar_espada"],


  ];

  for (let detalle of otras) {
    const objeto = {};
    objeto.id = id;
    objeto.titulo = detalle[1];
    objeto.precio = detalle[2],
    objeto.adquirida = false;
    objeto.parametros = {
      tipo: detalle[3],
      cantidad: detalle[0],
    };

    if(detalle[3] === "mejorar_cepillo_clic") {
      objeto.descripcion = `Aumenta en ${detalle[0]} el dinero producido al frotar zapatos`;
    }

    if(detalle[3] === "mejorar_espada") {
      objeto.descripcion = `Aumenta en ${detalle[0]} el daño de la espada`;
    }


    if(detalle[3] === "") {
      objeto.descripcion = `Aumenta en ${detalle[0]} el dinero producido al matar fantasmas`;
    } 


    mejoras.push(objeto);
    id += 1;
  }
  return mejoras;
};
















export default creaMejoras;

// const mejoras = [
//   {
//     id: 1,
//     titulo: "+ Velocidad",
//     descripcion: "Aumenta un 50% la velocidad de producción del Granero",
//     adquirida: false,
//     precio: 1000,
//     parametros: {
//       tipo: "velocidad",
//       aplica: "Granero",
//       cantidad: "50",
//     },
//   },

//   {
//     id: 2,
//     titulo: "Mejorar el cepillo",
//     descripcion: "Aumenta en 1 los beneficios al frotar zapatos",
//     adquirida: false,
//     precio: 300,
//     parametros: {
//       tipo: "mejorar_cepillo_clic",
//       cantidad: "1",
//     },
//   },

//   {
//     id: 3,
//     titulo: "+ Velocidad",
//     descripcion: "Aumenta un 100% la velocidad de producción del Aserradero",
//     adquirida: false,
//     precio: 500,
//     parametros: {
//       tipo: "velocidad",
//       aplica: "Aserradero",
//       cantidad: "100",
//     },
//   },

//   {
//     id: 4,
//     titulo: "+ Velocidad",
//     descripcion: "Aumenta un 75% la velocidad de producción del Granero",
//     adquirida: false,
//     precio: 200,
//     parametros: {
//       tipo: "velocidad",
//       aplica: "Granero",
//       cantidad: "100",
//     },
//   },

//   {
//     id: 5,
//     titulo: "Afilar espada",
//     descripcion: "Aumenta un 1 el daño de la espada",
//     adquirida: false,
//     precio: 1,
//     parametros: {
//       tipo: "mejorar_espada",
//       cantidad: "1",
//     },
//   },
// ];

let id = 1;
