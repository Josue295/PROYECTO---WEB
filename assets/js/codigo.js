const NavEl = document.querySelector('.nav');

window = addEventListener('scroll', () => {

    if(window.scrollY > 600){
        NavEl.classList.add('nav-scrolled')
    }

    if(window.scrollY <= 600){
        NavEl.classList.remove('nav-scrolled')
    }

} )


// -----------Array de objetos-----------

const shopContent = document.getElementById("shop_content")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")


let carrito = [];

productos.forEach((product)=>{

    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
    
        <div class="card-image"></div>
        <div class="card-txt">
            <h4 class="prod_nombre">${product.nombre}</h4>
            <p class="prod_precio">$${product.precio}</p>
        </div>
    
    `;

    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.className = "btn_agregar";
    comprar.innerText = "Comprar";

    content.append(comprar)

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    })
})


verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1> 
    `;
    modalContainer.append(modalHeader);

    const modalBtn = document.createElement("h1");
    modalBtn.innerText = "x";
    modalBtn.className = "modal-header-btn"

    modalBtn.addEventListener("click", () =>{
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalBtn)

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
        `;

        modalContainer.append(carritoContent)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuyin = document.createElement("div");
    totalBuyin.className = "total-content";
    totalBuyin.innerHTML = `Total a pagar: $${total}`;

    modalContainer.append(totalBuyin)
})