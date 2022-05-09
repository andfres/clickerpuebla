
const nombresProductores = [
  "Granero",
  "Aserradero",
  "Templo",
  "Forja",
  "Muelle",
  "Mana",
];

export const creaProductores = () => {

  const productores = [];
  const addToProductores = (array) => {
    for (let i = 0; i < nombresProductores.length; i++) {
      const objeto = {};

      // const nameCapitalized = nombresProductores[i].charAt(0).toUpperCase() + nombresProductores[i].slice(1)
      // const nameCapitalized = nombresProductores[i].charAt(0).toUpperCase() + nombresProductores[i].slice(1)

      const nombreLowercase = nombresProductores[i].toLowerCase();


      objeto["autoRecolectar"] = false;
      // objeto["nombre"] = nameCapitalized;
      objeto["nombre"] = nombresProductores[i];
      //objeto["imagen"] = `${nombresProductores[i]}.png`;
      objeto["imagen"] = `${nombreLowercase}.png`;

      objeto["produccionInicial"] = 2 * i + 2;
      objeto["costeInicial"] = 50 * i + 50;
      objeto["tiempo"] = 1 + 10 * i;
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
    objeto["nombreProductor"] = nombreProductor;
    objeto["nombre"] = nombreManager[i];
    objeto["precio"] = 100000 * i + 100;
    objeto["imagen"] = i + 1 + "";
    objeto["disponible"] = true;


    array.push(objeto);
  }
  return array;
};

