const NavEl = document.querySelector('.nav');

window = addEventListener('scroll', () => {

    if(window.scrollY > 600){
        NavEl.classList.add('nav-scrolled')
    }

    if(window.scrollY <= 600){
        NavEl.classList.remove('nav-scrolled')
    }

} )

window.addEventListener("load", () =>{

    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () =>{

        document.body.removeChild("loader")

    })
})