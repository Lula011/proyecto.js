
class Listado {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

}

const listados = []


const formListado = document.getElementById("formListado")

formListado.addEventListener("submit", (e) => {
    e.preventDefault()
    const nombre = document.getElementById("nombre").value 
    const precio = document.getElementById("precio").value
    
    const listados = new Listado (nombre, precio)
    
   

    localStorage.setItem("Listado", JSON.stringify(listados))

    formListado.reset() 
    mostrarInfo(listados)
})

const resultado = document.getElementById("infoListado")

const mostrarInfo = (listados) => {
    let aux =  ``
    aux +=`<p class= "resultado"> ${listados.nombre}productos cargados </p>
    <p class="resultado"> ${listados.precio()}</p>`

    resultado.innerHTML = aux
}