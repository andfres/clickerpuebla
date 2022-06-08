 const crearLogros = () => {

  const array = [];
  const dineroConseguir = [
    [20, "el puto amo"],
    [30, "el jefe del pueblo"],
    [40, "el puto amo"]
  ];

  for ( let [i,  arrays] of dineroConseguir.entries()) {

    const objeto = {};

    objeto["id"] = i;
    objeto["logrado"] = false
    objeto["cantidad"] = dineroConseguir[i][0];
    objeto["titulo"] = dineroConseguir[i][1];
    objeto["descripcion"] = `Tener ${dineroConseguir[i][0]} monedas`;
    objeto["imagen"] = "trophy";
    objeto["fecha"] = {};

    array.push(objeto);
  }

  console.log("logros creados" , array)
  return array;

}

export default crearLogros;

// logros
// {
//   id: "dinero1",
//   cantidad: 5,
//   logrado: false,
//   titulo: "buen inicio",
//   descripcion: `almacenar 5 monedas`,
//   imagen: "trophy",
//   fecha: {},
// },
// {
//   id: "dinero2",
//   cantidad: 8,
//   logrado: false,
//   titulo: "el amo del pueblo",
//   descripcion: "almacenar 1000 monedas",
//   imagen: "trophy",
//   fecha: {},
// },
// {
//   id: "dinero3",
//   cantidad: 10,
//   logrado: false,
//   titulo: "el amo del pueblo",
//   descripcion: "almacenar 1000 monedas",
//   imagen: "trophy",
//   fecha: {},
// },