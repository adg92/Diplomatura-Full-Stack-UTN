// declaramos una variable global para identificar los productos que se agregarán al carrito
let agregar;
let carro;
// Declaramos otra variable global con valor 0, que irá sumando el total de los productos agregados
let total = 0;
// se declaran los productos, su precio y un booleano que identifica si el producto está o no en el carrito
let productos = [
  {
    nombre: "harina",
    precio: 35,
    inCart: false,
  },
  {
    nombre: "pan",
    precio: 25,
    inCart: false,
  },
  {
    nombre: "papa",
    precio: 52,
    inCart: false,
  },
  {
    nombre: "palta",
    precio: 55,
    inCart: false,
  },
  {
    nombre: "fideos",
    precio: 85,
    inCart: false,
  },
  {
    nombre: "aceite",
    precio: 350,
    inCart: false,
  },
  {
    nombre: "sopa",
    precio: 86,
    inCart: false,
  },
  {
    nombre: "mermelada",
    precio: 108,
    inCart: false,
  },
  {
    nombre: "porotos",
    precio: 69,
    inCart: false,
  },
  {
    nombre: "lentejas",
    precio: 85,
    inCart: false,
  },
  {
    nombre: "mandarina",
    precio: 43,
    inCart: false,
  },
  {
    nombre: "banana",
    precio: 79,
    inCart: false,
  },
  {
    nombre: "leche de almendras",
    precio: 145,
    inCart: false,
  },
  {
    nombre: "papel higiénico",
    precio: 147,
    inCart: false,
  },
  {
    nombre: "lavandina",
    precio: 55,
    inCart: false,
  },
  {
    nombre: "alcohol en gel",
    precio: 123,
    inCart: false,
  },
  {
    nombre: "shampoo",
    precio: 400,
    inCart: false,
  },
  {
    nombre: "arroz",
    precio: 66,
    inCart: false,
  },
  {
    nombre: "Salsa de tomate",
    precio: 35,
    inCart: false,
  },
];
// se muestran los productos en el html
let idselect = document.getElementById("lista");
for (let i = 0; i < productos.length; i++) {
  let option = document.createElement("option");
  option.text = productos[i].nombre + " $" + productos[i].precio;
  option.value = i;
  idselect.add(option);
}
// agrega productos al carrito
const carrito = () => {
  agregar = document.getElementById("lista").options[
    document.getElementById("lista").selectedIndex
  ].value;
  if (productos[agregar].inCart === true) {
    alert("Ese producto ya está en el carrito");
  } else {
    productos[agregar].inCart = true;
    total = total + productos[agregar].precio;
    alert("Producto agregado al carrito.");
  }
};

// creamos la función que muestre los productos comprados y el total en una tabla
const calcular = () => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].inCart === true) {
      carro = true;
    }
  }
  if (carro != true) {
    alert("El carrito está vacío.");
    return;
  }
  let limpiar = document.getElementById("resumen");
  if (limpiar) {
    padre = limpiar.parentNode;
    padre.removeChild(limpiar);
  }
  let plantilla = `
<table id ="resumen" style="width: 30%; margin: 15px auto; text-aling:center; background-color:#f5f5f5;">
<thead>
<tr>
<th>Producto</th>
<th>Precio</th>
</tr>
</thead>
<tbody>
`;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].inCart === true) {
      plantilla += `
<tr>
<td>-${productos[i].nombre}</td>
<td>$${productos[i].precio}</td>
</tr>
`;
    }
  }
  plantilla += `
        </tbody>
        <tfoot>
        <tr>
        <th>Total</th>
        </tr>
        <tr>
        <td>$${total}</td>
        </tr>
        </tfoot>
</table>
`;

  return document.body.insertAdjacentHTML("beforeend", plantilla);
};
