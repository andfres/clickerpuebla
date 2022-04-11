// const nombresProductores = [
//   "gnomos",
//   "enanitos",
//   "picadora",
//   "mina",
//   "extractor",
// ];

export const creaProductores = () => {
  const nombresProductores = ["Enanitos", "Extractor"];
  const imagenesProductores = ["logo2.svg", "logo.svg"];
  const productores = [];

  const addToProductores = (array) => {
    for (let i = 0; i < nombresProductores.length; i++) {
      const objeto = {};

      objeto["autoRecolectar"] = false;
      objeto["nombre"] = nombresProductores[i];
      objeto["imagen"] = imagenesProductores[i];
      objeto["produccionInicial"] = 2 * i + 1;
      objeto["costeInicial"] = 50 * i + 1;
      objeto["tiempo"] = 4;
      array.push(objeto);
    }
  };

  addToProductores(productores);
  console.log(productores);

  return productores
};
