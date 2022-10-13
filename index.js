
const nombre = prompt("Ingrese tu nombre")

const retornarSaludo = (nombre) => {
    document.getElementById('bienvenida').innerText= `Hola ${nombre}!`
}

retornarSaludo(nombre)
