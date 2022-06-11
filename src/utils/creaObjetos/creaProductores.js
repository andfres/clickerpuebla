import nombresProductores from "./nombresProductores"; 


const creaProductores = () => {
  
  const productores = [];
  const addToProductores = (array) => {
    for (let i = 0; i < nombresProductores.length; i++) {
      const objeto = {};
      // const nameCapitalized = nombresProductores[i].charAt(0).toUpperCase() + nombresProductores[i].slice(1)
      objeto["nombre"] = nombresProductores[i];
      objeto["produccionInicial"] = 2 * i + 2;
      objeto["costeInicial"] = 50 * i + 50;
      objeto["tiempo"] = 2 + 2 * i;
      objeto["nivel"] = 1;
      array.push(objeto);
    }
  };

  addToProductores(productores);
  return productores;
};

export default creaProductores;