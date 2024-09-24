// Lista de productos con nombre y precio:En la lista de los productos de la tienda se hizo un JSON ya que su fin 
//son los datos estructurados, así que de esta manera se colocó el arreglo de objetos, en el que cada objeto es un producto con  2 propiedades (nombre y precio)
const productos = [
    { nombre: "Camisa", precio: 350 },
    { nombre: "Pantalón", precio: 600 },
    { nombre: "Tenis", precio: 1000 },
    { nombre: "Gorra", precio: 300 }
];

// Se crea un arreglo vacio en el cual tiene como objetivo ir guardando los productos que va introduciendo el usuario
let carrito = [];

// Se crea una función para que el usuario inicie la compra, se utiliza prompt para solicitar al usuario un producto y parseInt paraconvertir el dato en entero 
//Despúes el switch son las opciones que puede ir tomando el usuario, del 1-4 productos, 5 el usuario ve todo lo que ha elegido y el 6 sale de la compra
//En caso que no se haya seleccionado un número del 1 al 6 se mostrara un mensaje que lo haga de nuevo
//El do while termina hasta que se haya seleccionado el número 6
function inicioCompra() {
    let seleccion;
    do {
        seleccion = parseInt(prompt(
            "Selecciona un producto por número:\n" +
            "1. Camisa - $350\n" +
            "2. Pantalón - $600\n" +
            "3. Tenis - $1000\n" +
            "4. Gorra - $300\n" +
            "5. Ver carrito y total a pagar\n" +
            "6. Salir"
        ));

        switch(seleccion) {
            case 1:
            case 2:
            case 3:
            case 4:
                agregarAlCarrito(seleccion);
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                salir();
                break;
            default:
                alert("Por favor, selecciona de nuevo un número del 1 al 6.");
        }
    } while (seleccion !== 6);
}

// Se crea una función para ir agregando productos al carrito, el parametro de la función representa el o los numeros que el usuario escogió
//Se accede al producto dentro del arreglo productos y el -1 es porque los arreglos siempre comienzan en 0 
//Despues se utiliza el .push para ir agregando el producto al final del arreglo
//Cada ves que el usuario escoge el producto se manda un mensaje que se ha añadido correctamente
function agregarAlCarrito(seleccion) {
    const producto = productos[seleccion - 1];
    carrito.push(producto);
    alert(`${producto.nombre} ha sido añadido al carrito.`);
}

// Se crea una función para que se vea el carrito, se ocupa un if  y en el .length se verifica cuantos productos se tiene y si no se tiene ninguno mmanda un mensaje que el carrito está vacio
//Se crea una variable de tipo cadena (string) llamada listaCarrito, que contendrá la lista de productos que se han añadido al carrito.
//Se define una variable total que comenzará en 0. Esta variable se usará para sumar los precios de todos los productos en el carrito.
//forEach(): Recorre todos los productos en el carrito y los añade a la lista con su nombre y precio. También calcula el total sumando los precios de cada producto.
//Al final muestra una lista con el total de productos y el total de pagar
function verCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let listaCarrito = "Productos en tu carrito:\n";
    let total = 0;

    carrito.forEach((producto, index) => {
        listaCarrito += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
        total += producto.precio;
    });

    listaCarrito += `\nTotal a pagar: $${total}`;
    alert(listaCarrito);
}

// Se hace una fumción para salir de la compra en la cual manda un mensaje agradeciendo por haber comprado
function salir() {
    alert("Gracias por tu compra. ¡Hasta luego!");
    document.getElementById('resultado').innerText = "Compra finalizada.";
}

// Ejecuta el programa
inicioCompra();
