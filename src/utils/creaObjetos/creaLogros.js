 const crearLogros = () => {

  const array = [];
  const dineroConseguir = [
    [2, "Buen inicio"],
    [5, "Estas haciendolo bien"],
    [700, "no entiendo na"],
    [5000, "el rey"],
    [40000000, "Fin del juego"],
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
