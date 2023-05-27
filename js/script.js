var btnEncriptar = document.getElementById("btn-encriptar"); //Boton encriptar
var btnDesencriptar = document.getElementById("btn-desencriptar"); //Boton desencriptar
var btnCopiar = document.getElementById("btn-copiar") //Boton para copiar el texto encriptado o desenciptado
var input = document.getElementById("text-area"); //textarea que sera nuestro input de datos
var parrafo = document.getElementById("msg"); //<p> que mostrara nuestro resultado de encriptar o desencriptar
var validacionMinusculas = "^[ a-zñ¿?!¡]+$";  //Expresion regular para solo permitir minusculas y signos de admiracion e interrogacion 
var descripcion = document.getElementById("descripcion"); // <div> que muestra los mensaje debajo de la imagen

//Toma del texto y validamos que solo hay letras minusculas
function tomarDatos() {
    if (input.value.match(validacionMinusculas) != null) {
        var mensaje = input.value;
        return mensaje;
    }
//Mostramos mensaje en caso de que se ingresara algun caracter invalido.
    if (input.value.match(validacionMinusculas) == null) {
        console.log("Letras con Espacio Invalido");
        parrafo.innerHTML = "Error, solo se permiten letras minusculas.";
        input.value = "";
        return null;
    }
}
//Encriptamos el mensaje
function encriptar() {
    var stringEncriptada = tomarDatos();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    mostrar(stringEncriptada); //Llamamos a la funcion mostrar para devolver el resultado
}
//Desencriptamos el mensaje
function desencriptar() {
    var stringDesencriptada = tomarDatos();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    mostrar(stringDesencriptada); //Llamamos a la funcion mostrar para devolver el resultado
}

//Copiar el mensaje encriptado o desenciptado
function copiar() {
    let copyText = document.getElementById("msg");
    navigator.clipboard.writeText(copyText.textContent);
}

//Devolvemos el mensaje encriptado o desencriptado
function mostrar(msgRespuesta){
    parrafo.style.backgroundImage = "none"; //Ocultamos imagen del muñeco
    descripcion.style.display = "none"; //Ocultamos los mensaje debajo del muñeco
    btnCopiar.style.display = "block"; //Hacemos visible el boton de copiar para su uso
    parrafo.innerHTML = "" + msgRespuesta; //Imprimimos respuesta del mensaje
    input.value = ""; //Limpiamos nuestro textarea 
}
//Llamando a los eventos
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;