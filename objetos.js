const datosPersonales = {
    nombre: "Sergio",
    apellido: "de Luque",
    edad: "28",
    altura: 1.78,
    eresDesarrollador: false
}

const edad = datosPersonales.edad;
console.log(edad);

const listaDatos = [
    {
        ...datosPersonales
    }, 
    {    
    nombre: "Raul",
    apellido: "Bernal",
    edad: "30",
    altura: 1.76,
    eresDesarrollador: true
    }, 
    {    
    nombre: "Pablo",
    apellido: "de Andres",
    edad: "28",
    altura: 1.84,
    eresDesarrollador: false
    }
];
console.log(listaDatos);

const listaOrdenada = listaDatos.sort((a, b) => a.edad - b.edad);
console.log(listaDatos);