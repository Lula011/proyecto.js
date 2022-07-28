class Persona {
    constructor (nombre, valor) {
        this.nombre = nombre
        this.valor = valor
    }

}

const personas = []


const idformListado = document.getElementById("formListado")

formListado.addEventListener("submit", (e) => {
    e.preventDefault()
    const nombre = document.getElementById("nombre").value 
    const valor = document.getElementById("valor").value
    
    const persona = new Persona (nombre, valor)
    
    listados.push(persona)

    localStorage.setItem("Persona", JSON.stringify(personas))

    idformListado.reset() 
    mostrarInfo(persona)
})

const resultado = document.getElementById("infoListado")

const mostrarInfo = (persona) => {
    let aux =  ``
    aux +=`<p class= "resultado"> ${persona.nombre}productos cargados </p>
    <p class="resultado"> ${persona.valor()}</p>`

    resultado.innerHTML = aux
}