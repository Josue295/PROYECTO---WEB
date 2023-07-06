const footer = document.getElementById("footer");
const contenido = document.getElementById("shop_content")


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const ponerCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    footer.style.opacity = "0.2"
    contenido.style.opacity = "0.2"

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1> 
    `;
    modalContainer.append(modalHeader);

    const modalBtn = document.createElement("h1");
    modalBtn.innerText = "Cerrar";
    modalBtn.className = "modal-header-btn"

    modalBtn.addEventListener("click", () =>{
        modalContainer.style.display = "none"
        footer.style.opacity = "1"
        contenido.style.opacity = "100"
    })

    modalHeader.append(modalBtn)

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <span class="delete-product"> ❌ </span>
        `;

        modalContainer.append(carritoContent);
        
        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () =>{
            if(product.cantidad !== 1){
            product.cantidad--;
            ponerCarrito()
            }
            saveLocal();
        })

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener("click", () =>{
            product.cantidad++;
            saveLocal();
            ponerCarrito()           
        })

        let eliminar = carritoContent.querySelector(".delete-product");

        eliminar.addEventListener("click", () =>{
            eliminarProducto(product.id);
        })

        /* let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto) */
    })



    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuyin = document.createElement("div");
    totalBuyin.className = "total-content";
    totalBuyin.innerHTML = `Total a pagar: $${total}`;

    modalContainer.append(totalBuyin);
}

verCarrito.addEventListener("click", ponerCarrito)


const eliminarProducto = (id) => {

    const foundId = carrito.find((product) => product.id === id);
    
    carrito = carrito.filter((carritoID) =>{
        return carritoID !== foundId;
    })

    carritoCounter();
    saveLocal()
    ponerCarrito();
    
}

const carritoCounter = () => {
    cantCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
    
}

carritoCounter();