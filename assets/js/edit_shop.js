const $name = document.getElementById("name_prod"),
      $price = document.getElementById("price_prod"),
      $id = document.getElementById("ID_prod"),
      $cant = document.getElementById("cantidad_prod");


let id_del = parseInt(document.getElementById("prod_del").value);

let btn_add = document.getElementById("subir");
let btn_del = document.getElementById("eliminar_btn");

    
class Producto {
    constructor(id, nombre, precio, cantidad) {
    this.id = id
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    }
      }

const AddProducto = () => {

    /* let nombre = document.querySelector("#name_prod").value;
    let cantidad = parseInt(document.querySelector("#cantidad_prod").value);
    let precio = parseFloat(document.querySelector("#price_prod").value);
    let id = parseInt(document.querySelector("#ID_prod").value) */
    

    let nombre = document.getElementById("name_prod").value;
    nombre = nombre.toUpperCase();
    let precio = parseInt(document.getElementById("price_prod").value);
    let cantidad = parseInt(document.getElementById("cantidad_prod").value);
    let id = parseInt(document.getElementById("ID_prod").value);
    let productoNuevo = new Producto(id, nombre, precio, cantidad);
    productos.unshift(productoNuevo);
  
    // guarda el producto en el localStorage
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log(productos)
    return productoNuevo;
}


const del_Prod = () => {
    let id_to_del = parseInt(document.getElementById("prod_del").value);
    const found_Del = productos.find((product) => product.id === id_to_del);
    productos = productos.filter((producto_eliminado) =>{
        return producto_eliminado !== found_Del;
    })
    // guarda el producto en el localStorage
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log(productos)
    return producto_eliminado;
}

btn_del.addEventListener(("click"), del_Prod);

btn_add.addEventListener(("click"), AddProducto);


localStorage.setItem("productos", JSON.stringify(productos));