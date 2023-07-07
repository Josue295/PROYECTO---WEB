let productos = JSON.parse(localStorage.getItem("productos")) || [
    {
        id: 1,
        nombre: "Guitarra Strato Fender",
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
  
