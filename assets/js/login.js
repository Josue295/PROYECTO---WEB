const login = document.getElementById("login");
const error = document.getElementById("error")
const form = document.getElementById("form")

let aux = 0;

const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
})

document.addEventListener("click", (e) =>{
    
    error.style.display="none"
    if(e.target === $submit){
        if($password.value !== "admin2023" && $username.value !== "admin_usuario"){
            let content = document.createElement("div")
            content.className = "error_div"
            content.innerHTML = `
                           
                <p>Usuario y/o contraseña incorrectos</p>
                       
            `;
            error.style.display="flex"
            if (aux==0){
            error.append(content)
            aux=1
            }
        }else if($username.value == "admin_usuario" && $password.value == "admin2023"){
            $submit.style.display = "none";
            error.style.display = "none"
            /* Toastify({
                text: "Bienvenido Administrador!",
                duration: 3000,
                // destination: "https://google.com",
                newWindow: true,
                close: true,
                gravity: "top", // "top" o "bottom"
                position: "right", // "left", "center" o "right"
                stopOnFocus: true, // Previene que se vaya si está el mouse encima
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",                  
                },
              }).showToast(); */
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: '¡Acceso exitoso!'
              })
            let agregar = document.createElement("div")
            agregar.className = "btn_form"
            agregar.innerHTML = `

            <a href="editshop.html">Modificar Tienda</a>

            
            `

            form.append(agregar)
        }
    }
})