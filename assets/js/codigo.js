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
const cantCarrito = document.getElementById("cantCarrito")



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

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.className = "btn_agregar";
    comprar.innerText = "Comprar";

    content.append(comprar)

    comprar.addEventListener("click", () =>{

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
        console.log(repeat);

        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            })
        }else{

        carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        }
        console.log(carrito);
        carritoCounter();
        saveLocal();
    })
})

//set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item
