
localStorage.setItem("productos", JSON.stringify(productos));

const $name = document.getElementById("name_prod"),
      $price = document.getElementById("price_prod"),
      $id = document.getElementById("ID_prod"),
      $cant = document.getElementById("cantidad_prod");


let id_del = parseInt(document.getElementById("prod_del").value);

let btn_add = document.getElementById("subir");
let btn_del = document.getElementById("eliminar_btn");


const shopContent_edit = document.getElementById("shop_content_edit")


productos.forEach((product)=>{

    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
    
        <div class="card-image"></div>
        <div class="card-txt">
            <h4 class="prod_nombre">${product.nombre}</h4>
            <p class="prod_precio">$${product.precio}</p>
            <p class="id_producto">ID: ${product.id}</p>
        </div>
    
    `;

    shopContent_edit.append(content);
})

let aux = JSON.parse(localStorage.getItem("productos"))
console.log(aux);


let id_cont = aux.length;
    
class Producto {
    constructor(id, nombre, precio, cantidad) {
    this.id = id
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    }
      }

const AddProducto = () => {
    id_cont++
    let nombre = document.getElementById("name_prod").value;
    let precio = parseInt(document.getElementById("price_prod").value);
    let cantidad = 1;
    let id = id_cont;
    let productoNuevo = new Producto(id, nombre, precio, cantidad);
    productos.unshift(productoNuevo);
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto agregado correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
  
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
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto eliminado correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
    // guarda el producto en el localStorage
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log(productos)
    return producto_eliminado;
}

btn_del.addEventListener(("click"), del_Prod);

btn_add.addEventListener(("click"), AddProducto);


