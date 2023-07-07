let productos = JSON.parse(localStorage.getItem("productos")) || [
    {
        id: 1,
        nombre: "Guitarra Telecaster",
        precio: 350000,
        cantidad: 1,
        img: "./assets/img/guitar_fender_telecaster.jpeg",
    },

    {
        id: 2,
        nombre: "Microfono Shure",
        precio: 150000,
        cantidad: 1,
        img: "./assets/img/mic_shure_sm7b.jpeg",
    },
    
    {
        id: 3,
        nombre: "Teclado Yamaha",
        precio: 380000,
        cantidad: 1,
        img: "./assets/img/teclado_yamaha_pfr_s52.png",
    },
    
    {
        id: 4,
        nombre: "Bateria Mapex",
        precio: 250000,
        cantidad: 1,
        img: "./assets/img/bateria_tama_4cuerpos.png",
    },
    {
        id: 5,
        nombre: "Piano Kurzweil",
        precio: 400000,
        cantidad: 1,
        img: "./assets/img/piano_kurzweil_mueble.png",
    },
    {
        id: 6,
        nombre: "Guitarra Takamine",
        precio: 150000,
        cantidad: 1,
        img: "./assets/img/guitarra_takamine_acus.png",
    },
    {
        id: 7,
        nombre: "Bajo Fender Jazz",
        precio: 150000,
        cantidad: 1,
        img: "./assets/img/bass_fender_jazz.png",
    },
    {
        id: 8,
        nombre: "Saxophone Yamaha",
        precio: 150000,
        cantidad: 1,
        img: "./assets/img/saxophone_yamaha.jpeg",
    },
    
    


]

if (localStorage.getItem("productos") == "[]") {
    productos = [{
        id: 1,
        nombre: "Guitarra Fender",
        precio: 350000,
        cantidad: 1,
    },

    {
        id: 2,
        nombre: "Microfono Shure",
        precio: 150000,
        cantidad: 1,
    },
    
    {
        id: 3,
        nombre: "Teclado Yamaha",
        precio: 380000,
        cantidad: 1,
    },
    
    {
        id: 4,
        nombre: "Bateria Mapex",
        precio: 250000,
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Piano Casio",
        precio: 400000,
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Microfono Samsom",
        precio: 150000,
        cantidad: 1,
    },
    ];
  }
  
