//No tiene que ser muy complejo, hay que integrar lo que se vio hasta ahora.
//Hay que crear un programa que se pueda ingresar valores.
//Parecido al preoyecto anterior.


//Creo la clase Club
class Club {
    constructor( nombre, creacion, liga, titulos, goleador) {
        this.nombre = nombre
        this.creacion = creacion
        this.liga = liga
        this.titulos = titulos
        this.goleador = goleador
    }
}

alert("Bienvenido, hagamos una base de datos de clubes.")
//Creo las funciones que usare:
//Busco un club con esta funcion, mediante el nombre del mismo
function buscarClub(clubes) {
    let nombreClub = prompt("Ingresa el Club que queres buscar")
    let clubBuscado = clubes.find(clubes => clubes.nombre == nombreClub)

    if(clubBuscado == undefined) {
        console.log("Club inexistente en la base de datos")
    } else {
        console.log(clubBuscado)
    }
}

//Busco los clubes cuyo año de creacion sean mayores al año ingreado por el usuario
function buscarAntiguedad(clubes) {
    let año = parseInt(prompt("Ingresa el año que queres buscar")) //Pido fecha
    let clubesBuscados = clubes.filter(clubes => clubes.creacion >= año) //Me devuelve todos los clubes mayores o iguales al año ingresado.

    //Valido que haya buscado algo
    if(clubesBuscados.length == 0) {
        console.log("No existen clubes con dichas caracteristicas")
    } else {
        console.log(clubesBuscados.nombre)
    }
}

function ordenar(clubes) {
    let ord  = parseInt(prompt("Ingrese 1 para ordenar de mas antiguo a mas nuevo, 2  para de mas nuevo a mas antiguo"))
    if( ord === 1) {
        console.log(clubes.sort((a,b) => a.creacion - b.creacion))
    } else if(ord === 2) {
        console.log(clubes.sort((a,b) => b.creacion - a.creacion))
    }
}

function buscarGoleador(clubes) {
    let nombreGoleador = prompt("Ingresa el nombre del Goleador y te mostramos el club donde jugo")
    let clubBuscado = clubes.find(clubes => clubes.goleador == nombreGoleador)

    if(clubBuscado == undefined) {
        console.log("Goleador inexistente en la base de datos")
    } else {
        console.log(clubBuscado.nombre)
    }
}

function sumarTitulos(clubes) {
    let acumulador = 0
    let titulos = clubes.map(clubes => clubes.titulos) //guardo los titulos de todos los clubes
    titulos.forEach(titulo => acumulador += titulo ) //recorro el array titulos y le sumo los titulos al acumulador
    console.log(`Titulos totales: ${acumulador}`)
}








//Creo un array vacio(contendra los clubes)
const clubes = []

//Inicializo variables
let nombre, creacion, liga, titulos, goleador, continuar, respuesta

//Primer do while para que ingresen los datos
do {
    //En el segundo ingresan los datos, y se repite el ciclo si en alguno de los 3 campos no ingresan nada.
    do {
        nombre = prompt("Ingrese el nombre del Club").toLowerCase()
        if(nombre == "boca" || nombre == "boca juniors" || nombre == "cabj") {
            alert("Ingresar clubes que existen por favor")
            break
        }
        liga = prompt("Ingresa en la Liga que juegan").toLowerCase()
        goleador = prompt("Ingresa el nombre del maximo goleador del equipo").toLowerCase()
    } while((nombre.length == 0 || liga.length == 0 || goleador.length == 0)) //Si no escriben nada se repite el ciclo.

    //Tercero, se ingresan solamente numeros, se valin los mismos.
    do {
        creacion = parseInt(prompt("Ingrese el año de creacion del club"))
        titulos = parseInt(prompt("Ingrese cantidad de titulos del club"))
    } while((isNaN(creacion) || isNaN(titulos)) || (creacion <= 0 || titulos <= 0)) //Si el usuario no ingresa nada, o ingresa una cadena se repite el ciclo.

    //Creo el objeto de la clase Club, los parametros seran las variables que ingreso el usuario.
    const club = new Club(nombre, creacion, liga, titulos, goleador)

    //Guardo el club que cree, en el array.
    clubes.push(club)

    //Pregunto al usuario si quiere agregar mas clubes.
    continua = prompt("Desea agregar otro club?")

} while (continua != "no") //Mientras que la la variable continua tenga un valor distinto a no, continua el ciclo.Si es no, termina.

//Muestro por consola el array creado
console.log("Mostramos a continuacion los clubes ingresados al sistema")
clubes.forEach(clubes => console.log(clubes.nombre))

let ver = prompt("Desea ver todos los datos ingresados? Si/No").toLowerCase()
if(ver == "si" ) {
    clubes.forEach(clubes => console.log(clubes))
} else {
    console.log("Bueno continuemos")
}

let respuesta2 
//Hacemos que el Usuario interactue con el sistema:
do{
    //El usuario ingresa una opcion
    do {
        respuesta = parseInt(prompt(`Ingresa:
        1-Buscar un club
        2-Buscar clubes por año de Creacion
        3-Ordenar clubes segun mas antiguo o nuevo
        4-Buscar club de goleador
        5-Sumar titulos de los clubes `))
    //Se valida que la respuesta este entre las opciones
    } while(respuesta < 1 || respuesta > 6) //Mientras la respuesta es menor a 1 o mayor a 6 se repite el ciclo

    //Realizo un switch para los distintas opciones
    switch(respuesta) {
        case 1:
            buscarClub(clubes)
            break
        case 2:
            buscarAntiguedad(clubes)
            break
        case 3:
            ordenar(clubes)
            break           
        case 4:
            buscarGoleador(clubes)
            break
        case 5:
            sumarTitulos(clubes)
            break
        default:
            alert("Opcion No Valida")
    }
    respuesta2 = prompt("Te gustaria volver a ver las opciones? Si/No").toLowerCase()
} while (respuesta2 != "no")









