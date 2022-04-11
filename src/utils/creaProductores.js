// const nombresProductores = [
//   "gnomos",
//   "enanitos",
//   "picadora",
//   "mina",
//   "extractor",
// ];

export const creaProductores = () => {
  const nombresProductores = ["Granero", "Aserradero", "Templo", "Forja", "Muelle", "Mana"];
  const productores = [];

  const addToProductores = (array) => {
    for (let i = 0; i < nombresProductores.length; i++) {
      const objeto = {};

      objeto["autoRecolectar"] = false;
      objeto["nombre"] = nombresProductores[i];
      objeto["imagen"] = `${nombresProductores[i]}.png`;
      objeto["produccionInicial"] = 2 * i + 2;
      objeto["costeInicial"] = 50 * i + 50;
      objeto["tiempo"] = 66;
      array.push(objeto);
    }
  };

  addToProductores(productores);
  console.log(productores);

  return productores
};
