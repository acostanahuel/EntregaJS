const entradas = [
    { id: 1, sector: " campo", precio: 5500 },
    { id: 2, sector: " campo vip", precio: 9400 },
    { id: 3, sector: " platea a", precio: 6000 },
    { id: 4, sector: " platea b", precio: 4700 },
    { id: 5, sector: " campo", precio: 2300 },
    { id: 6, sector: " campo vip", precio: 6000 },
    { id: 7, sector: " platea a", precio: 3400 },
    { id: 8, sector: " platea b", precio: 2800 },
    { id: 9, sector: " campo", precio: 2500 },
    { id: 10, sector: " campo vip", precio: 7000 },
    { id: 11, sector: " platea a", precio: 2600 },
    { id: 12, sector: " platea b", precio: 1300 },
    { id: 13, sector: " campo", precio: 690 },
    { id: 14, sector: " campo vip", precio: 1000 },
];


let nombre = prompt("Ingrese su nombre y a continuación podrá comprar su entrada");
alert(`Bienvenidx ${nombre} a tu MidnightsTour`);

let eleccion = prompt("Ingrese 1 para filtrar por sector, ingrese 2 para filtrar por precio");
while (eleccion !== "1" && eleccion !== "2") {
    alert("Opcion incorrecta ingrese nuevamente");
    eleccion = prompt("Ingrese 1 para filtrar por sector, ingrese 2 para filtrar por precio");
}


if (eleccion == 1) {

    let sectorElegido;
    let eleccionId = 0;
    let mostrarSector = "Digite el numero en pantalla para confirmar el sector:";
    for (let entrada of entradas) {
        mostrarSector += `\n${entrada.id} - ${entrada.sector} - ${entrada.precio}`
    }

    sectorElegido = parseInt(prompt(`${mostrarSector} \n`));
    eleccionId = entradas.filter(eleccion => eleccion.id === sectorElegido);
    while (!eleccionId.length) {
        alert("Opcion incorrecta ingrese nuevamente");
        sectorElegido = parseInt(prompt(`${mostrarSector}`));
        eleccionId = entradas.filter(eleccion => eleccion.id === sectorElegido);
    }
    alert("Sector elegido: " + sectorElegido);
    alert("Gracias por su compra");
    

} else { //2

    let filtrado = parseInt(prompt("Ingrese el precio maximo que desea pagar"));
    let encontrado = entradas.filter(entrada => entrada.precio <= filtrado);
    while (!encontrado.length) {
        alert("No hay entradas dentro de ese rango de precio, ingrese nuevamente.");
        filtrado = parseInt(prompt("Ingrese el precio maximo que desea pagar"));
        encontrado = entradas.filter(entrada => entrada.precio <= filtrado);
    }

    let mensaje = "";
    encontrado.forEach(entrada => {
        mensaje += `\n${entrada.id} - ${entrada.sector} - ${entrada.precio}`
    })

    let sectorElegido = parseInt(prompt(`Digite el numero en pantalla para confirmar el sector: \n${mensaje}`));
    let eleccionId = encontrado.filter(eleccion => eleccion.id === sectorElegido);
    while (!eleccionId.length) {
        alert("Opcion incorrecta ingrese nuevamente");
        sectorElegido = parseInt(prompt(`Digite el numero en pantalla para confirmar el sector: \n${mensaje}`));
        eleccionId = encontrado.filter(eleccion => eleccion.id === sectorElegido);
    }
    alert("Sector elegido: " + sectorElegido);
    alert("Gracias por su compra");
    
}
