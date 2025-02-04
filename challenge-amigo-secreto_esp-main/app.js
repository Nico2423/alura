let amigos = [];

// Agregar amigo a la lista
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Nombre no válido");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    document.getElementById("amigo").value = ""; // Limpiar el campo de texto
    mostrarAmigos(); // Actualizar la lista inmediatamente
}

// Mostrar la lista de amigos en pantalla
function mostrarAmigos() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortear un amigo aleatorio
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

// Event Listeners para los botones
document.getElementById("btn-agregar").addEventListener("click", agregar);
document.getElementById("btn-mostrar").addEventListener("click", mostrarAmigos);
document.getElementById("btn-sortear").addEventListener("click", sortearAmigo);

amigos.push(nombre); // Agregar el nombre al array
document.getElementById("amigo").value = ""; // Limpiar el campo de texto
mostrarAmigos(); // Actualizar la lista inmediatamente