 const crearLogros = () => {

  const array = [];
  const dineroConseguir = [
    [2, "Primer paso", "bronce"],
    [2, "Sigue asi", "plata"],
    [3, "Estas haciendolo bien", "trophy"],
    [2000, "Autonomo", "trophy"],
    [3000, "El rico de la calle", "trophy"],
    [50000, "El jefazo del pueblo", "trophy"],
    [500000, "El rey", "trophy"],
    [5000000, "De oro", "trophy"],
    [5000000, "El Amo", "trophy"],
    [50000000000, "El Amo supremo", "trophy"],
    [99999999999999999, "Fin del juego", "trophy"],
  ];

  for ( let [i,  arrays] of dineroConseguir.entries()) {

    const objeto = {};

    objeto.id = i;
    objeto.logrado = false
    objeto.cantidad = dineroConseguir[i][0];
    objeto.titulo = dineroConseguir[i][1];
    objeto.descripcion = `Tener ${dineroConseguir[i][0]} monedas`;
    // objeto.imagen = "trophy";
    objeto.imagen = dineroConseguir[i][2];
    objeto.fecha = {};

    array.push(objeto);
  }

  console.log("---------------------")
  console.log("logros creados" , array)
  return array;
}

export default crearLogros;
