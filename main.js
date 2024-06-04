var edad=0

function mostrar(){
    if (edad >= 18) {
        alert("Bienvenidos a bodegas alanza...")
    } else {
        alert("No tienes edad suficiente para comprar alcohol...")
    }
}

function capturar(){
    edad=prompt("Captura tu edad...")
}