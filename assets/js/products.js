let productos = JSON.parse(localStorage.getItem("productos")) || [
    {
        id: 1,
        nombre: "Guitarra Telecaster",
        marca: "Fender",
        precio: 790000,
        cantidad: 1,
        img: "./assets/img/guitar_fender_telecaster.jpeg",
    },

    {
        id: 2,
        nombre: "Microfono Sm7b",
        marca: "Shure",
        precio: 250000,
        cantidad: 1,
        img: "./assets/img/mic_shure_sm7b.jpeg",
    },
    
    {
        id: 3,
        nombre: "Teclado Psrf52",
        marca: "Yamaha",
        precio: 154000,
        cantidad: 1,
        img: "./assets/img/teclado_yamaha_pfr_s52.png",
    },
    
    {
        id: 4,
        nombre: "Bateria SuperStar",
        marca: "Tama",
        precio: "373000",
        cantidad: 1,
        img: "./assets/img/bateria_tama_4cuerpos.png",
    },
    {
        id: 5,
        nombre: "Piano Electrico Ka130",
        marca: "Kurzweil",
        precio: 790000,
        cantidad: 1,
        img: "./assets/img/piano_kurzweil_mueble.png",
    },
    {
        id: 6,
        nombre: "Guitarra GX18CE",
        marca: "Takamine",
        precio: 415000,
        cantidad: 1,
        img: "./assets/img/guitarra_takamine_acus.png",
    },
    {
        id: 7,
        nombre: "Bajo Rosewood",
        marca: "Fender",
        precio: 629000,
        cantidad: 1,
        img: "./assets/img/bass_fender.jpg.webp",
    },
    {
        id: 8,
        nombre: "Saxophone YAS-26",
        marca: "Yamaha",
        precio: 1450000,
        cantidad: 1,
        img: "./assets/img/saxophone_yamaha.jpeg",
    },
    {
        id: 9,
        nombre: "Violin Prelude",
        marca: "Bellafina",
        precio: 116965,
        cantidad: 1,
        img: "./assets/img/violin_bellafina.jpeg",
    },
    
    


]

if (localStorage.getItem("productos") == "[]") {
    productos = [{
        id: 1,
        nombre: "Guitarra Fender",
        precio: 790000,
        cantidad: 1,
    },

    {
        id: 2,
        nombre: "Microfono Shure",
        precio: 250000,
        cantidad: 1,
    },
    
    {
        id: 3,
        nombre: "Teclado Yamaha",
        precio: 200000,
        cantidad: 1,
    },
    
    {
        id: 4,
        nombre: "Bateria Tama",
        precio: 373000,
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Piano Kurzweil",
        precio: 790000,
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
  
