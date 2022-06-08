import nombresProductores from "./nombresProductores"; 

const crearManagers = () => {

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


export default crearManagers;