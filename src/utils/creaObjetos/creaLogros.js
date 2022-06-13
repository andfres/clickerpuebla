 const crearLogros = () => {

  const array = [];
  const dineroConseguir = [
    [2, "Primer paso"],
    [200, "Sigue asi"],
    [500, "Estas haciendolo bien"],
    [2000, "Autonomo"],
    [3000, "El rico de la calle"],
    [50000, "El jefazo del pueblo"],
    [500000, "El rey"],
    [5000000, "De oro"],
    [5000000, "El Amo"],
    [50000000000, "El Amo supremo"],
    [99999999999999999, "Fin del juego"],
  ];

  for ( let [i,  arrays] of dineroConseguir.entries()) {

    const objeto = {};

    objeto.id = i;
    objeto.logrado = false
    objeto.cantidad = dineroConseguir[i][0];
    objeto.titulo = dineroConseguir[i][1];
    objeto.descripcion = `Tener ${dineroConseguir[i][0]} monedas`;
    objeto.imagen = "trophy";
    objeto.fecha = {};

    array.push(objeto);
  }

  console.log("---------------------")
  console.log("logros creados" , array)
  return array;
}

export default crearLogros;
