
// - Una función sin parámetros que devuelva siempre "true"
function noParametros() {
    if(true){
        console.log("Enhorabuena")
    }
}
noParametros()

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const datos = 1
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 5000);
    })
}
getDatos().then(() => console.log("Hola soy una promesa"))

// - Una función generadora de índices pares automáticos

function* generaId() {
    let id = 0;
    while(true) {
        if(id === 10) {
            return id
        }
        yield 2*id + 2
        id++ // Espera a ser llamada de nuevo
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)