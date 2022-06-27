 const crearLogros = () => {

  const array = [];
  const dineroConseguir = [
    [50, "Primer paso", "bronce"],
    [100, "Sigue asi", "plata"],
    [500, "Estas haciendolo bien", "trophy"],
    [2500, "Autonomo", "trophy"],
    [8000, "El rico de la calle", "trophy"],
    [50000, "El jefazo del pueblo", "trophy"],
    [500000, "El rey", "trophy"],
    [5000000, "De oro", "trophy"],
    [500000000, "El Amo", "trophy"],
    [500000000000, "El Amo supremo", "trophy"],
    [99999999999999999, "Fin del juego", "trophy"],
  ];

  for ( let [i,  arrays] of dineroConseguir.entries()) {
    const objeto = {};
    
    objeto.id = i;
    objeto.logrado = false
    objeto.cantidad = dineroConseguir[i][0];
    objeto.titulo = dineroConseguir[i][1];
    objeto.descripcion = `Tener ${dineroConseguir[i][0]} monedas`;
    objeto.imagen = dineroConseguir[i][2];
    objeto.fecha = {};

    array.push(objeto);
  }


  // if (import.meta.env.DEV) {
  //   var console = {};
  //   console.log = function () {};
  // }
  
  console.log("logros creados" , array)
  return array;
}

export default crearLogros;
