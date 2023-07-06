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
            let agregar = document.createElement("div")
            agregar.className = "btn_form"
            agregar.innerHTML = `

            <a href="editshop.html">Modificar Tienda</a>

            
            `

            form.append(agregar)
        }
    }
})