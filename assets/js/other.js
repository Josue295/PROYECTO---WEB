const Nav = document.getElementById('nav');

window = addEventListener('scroll', () => {

    if(window.scrollY > 10){
        Nav.classList.add('nav-scrolled')
    }

    if(window.scrollY <= 10){
        Nav.classList.remove('nav-scrolled')
    }

} )