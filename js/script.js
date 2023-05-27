var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnCopiar = document.getElementById("btn-copiar")
var input = document.getElementById("text-area");
var parrafo = document.getElementById("msg");
var validacionMinusculas = "^[ a-zñ¿?!¡]+$";
var descripcion = document.getElementById("descripcion");

function tomarDatos() {
    if (input.value.match(validacionMinusculas) != null) {

        var mensaje = input.value;
        return mensaje;
    }

    if (input.value.match(validacionMinusculas) == null) {
        console.log("Letras con Espacio Invalido");
        parrafo.innerHTML = "Error, solo se permiten letras minusculas.";
        input.value = "";
        return null;
    }
}

function encriptar() {
    var stringEncriptada = tomarDatos();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    parrafo.style.backgroundImage = "none";
    descripcion.style.display = "none";
    btnCopiar.style.display = "block";
    parrafo.innerHTML = "" + stringEncriptada;
    input.value = "";
}

function desencriptar() {
    var stringDesencriptada = tomarDatos();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    parrafo.style.backgroundImage = "none";
    descripcion.style.display = "none";
    btnCopiar.style.display = "block";
    parrafo.innerHTML = "" + stringDesencriptada;
    input.value = "";
}

function copiar() {
    let copyText = document.getElementById("msg");
    navigator.clipboard.writeText(copyText.textContent);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;