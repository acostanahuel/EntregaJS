const entradas = [
    {id:1, sector: " campo", precio: 5500},
    {id:2, sector: " campo vip", precio: 9400},
    {id:3, sector: " platea a", precio: 6000},
    {id:4, sector: " platea b", precio: 4700},
    {id:5, sector: " campo", precio: 2300},
    {id:6, sector: " campo vip", precio: 6000},
    {id:7, sector: " platea a", precio: 3400},
    {id:8, sector: " platea b", precio: 2800},
    {id:9, sector: " campo",     precio: 2500},
    {id:10, sector: " campo vip", precio: 7000},
    {id:11, sector: " platea a", precio: 2600},
    {id:12, sector: " platea b", precio: 1300},
    {id:13, sector: " campo",    precio: 690},
    {id:14, sector: " campo vip", precio: 1000},
    {id:18, sector: " platea a", precio: 3400},
    {id:19, sector: " platea b", precio: 2750},
    {id:20, sector: " platea b", precio: 1300},
    {id:21, sector: " campo",    precio: 5430},
    {id:23, sector: " campo vip", precio: 1000},
    {id:24, sector: " platea a", precio: 1300},
    {id:25, sector: " platea b", precio: 1600},
    {id:26, sector: " platea a", precio: 800},
    {id:27, sector: " platea b", precio: 3090},
    {id:28, sector: " platea b", precio: 14600},
    {id:29, sector: " campo",    precio: 7430},
    {id:30, sector: " campo vip", precio: 2300},
    {id:31, sector: " platea a", precio: 3500},
    {id:32, sector: " platea b", precio: 2600},
    
]

let nombre =  prompt("Ingrese su nombre y a continuación podrá comprar su rentrada");
alert (`Bienvenidx ${nombre} a tu MidnightsTour`);

let eleccion =  prompt ("Ingrese 1 para filtrar por sector, ingrese 2 para filtrar por precio");
while (eleccion !== "1" && eleccion !== "2") {
    alert ("Opcion incorrecta ingrese nuevamente");
eleccion = prompt ("Ingrese 1 para filtrar por sector, ingrese 2 para filtrar por precio");
} 


if (eleccion === 1){
    let mostrarSector= "";
     for (let entrada of entradas) {
        mostrarSector += `${entrada.id} - ${entrada.sector} - ${entrada.precio} \n `}
        
    let sectorElegido = prompt (`${mostrarSector} digita el numero en pantalla para confirmar el sector`);
        alert ("Gracias por su compra"); 
        
    } else {
    let filtrado = parseInt (prompt ("Ingrese el precio maximo que desea pagar"));
    let encontrado= entradas.filter (entradas => entradas.precio <= filtrado);
    
    if (encontrado){
    let mensaje= "" ;           
    encontrado.forEach(entradas =>  {
        mensaje += `${entradas.id} - ${entradas.sector} - ${entradas.precio}`
                                    })
       
    alert (mensaje);


    
    } else {
        alert ("No hay entradas dentro de ese rango de precio");
    }
}
