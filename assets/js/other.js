const Nav = document.getElementById('nav');
const actualizar = document.getElementById("actualizar")

window = addEventListener('scroll', () => {

    if(window.scrollY > 10){
        Nav.classList.add('nav-scrolled')
    }

    if(window.scrollY <= 10){
        Nav.classList.remove('nav-scrolled')
    }

} )


let userStatus = localStorage.getItem("statusUser")
