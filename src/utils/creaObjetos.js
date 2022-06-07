
const nombresProductores = [
  "Granero",
  "Aserradero",
  "Templo",
  "Forja",
  "Muelle",
  "Templo Oscuro",
];

export const creaProductores = () => {
  
  const productores = [];
  const addToProductores = (array) => {
    for (let i = 0; i < nombresProductores.length; i++) {
      const objeto = {};
      // const nameCapitalized = nombresProductores[i].charAt(0).toUpperCase() + nombresProductores[i].slice(1)
      objeto["nombre"] = nombresProductores[i];
      objeto["produccionInicial"] = 2 * i + 2;
      objeto["costeInicial"] = 50 * i + 50;
      objeto["tiempo"] = 10 + 3 * i;
      objeto["nivel"] = 1;
      array.push(objeto);
    }
  };

  addToProductores(productores);
  return productores;
};

export const crearManagers = () => {


  const array = [];
  const nombreManager = [
    "Maria",
    "Alfredo",
    "Juanete",
    "Sebas",
    "Eldelbar",
    "Ana",
  ];

  for ( let [i,  nombreProductor] of nombresProductores.entries()) {

    const objeto = {};
    objeto["id"] = i;
    objeto["nombreProductor"] = nombreProductor;
    objeto["nombre"] = nombreManager[i];
    objeto["precio"] = 100000 * i + 100;
    objeto["imagen"] = i + 1 + "";
    objeto["contratado"] = false


    array.push(objeto);
  }
  return array;
};

