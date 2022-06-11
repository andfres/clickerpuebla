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
    objeto["precio"] = 300 * i + 200 + Math.pow(i, 4);
    objeto["imagen"] = i + 1 + "";
    objeto["contratado"] = false
    array.push(objeto);
  }
  return array;
};


export default crearManagers;