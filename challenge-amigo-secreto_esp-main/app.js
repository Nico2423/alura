// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregar(nombre){
    document.getElementById("section-title").textContent = nombre;
    if (typeof nombre !== "string" || nombre.trim() === ""){
        alert("Nombre no válido");
        console.clear()
        return 0;}
    else{
        console.log(nombre)
        amigos.push(nombre)
        console.clear()
        return (amigos)
    }
}
    console.log("elige una opción de las presentadas a continuación: ")
while(True){
    console.log("1. Ingresa el nombre")
    console.log("1. Ingresa el nombre")

}
