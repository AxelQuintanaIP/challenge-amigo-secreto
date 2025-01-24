// Variables globales
let listaDeAmigos = []; // Almacena la lista de amigos
let amigosSorteados = []; // Almacena amigos ya sorteados (no se usa actualmente)

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validar si el campo está vacío
    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        limpiarInput();
        return; // Detener la ejecución si no hay nombre
    }

    // Agregar el nombre a la lista y actualizar la vista
    listaDeAmigos.push(nombre);
    limpiarInput();
    actualizarListaAmigos();
}

// Función para limpiar el campo de entrada
function limpiarInput() {
    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer la lista de amigos y agregar cada uno como un <li>
    listaDeAmigos.forEach((amigo) => {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos para sortear. Agrega algunos primero.');
        return; // Detener si no hay amigos en la lista
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;

    // Limpiar la lista de amigos en el DOM
    document.getElementById('listaAmigos').innerHTML = '';
}