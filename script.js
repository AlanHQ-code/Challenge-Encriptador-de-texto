const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('#Salida');
const copia = document.querySelector('#btnCopiar');
const CambioTitulo = document.querySelector('.cambio__titulo');
const CambioTexto = document.querySelector('.cambio__texto');
copia.style.display = "none";

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function Encriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        copia.style.display = "block";
    }
    Ocultar();
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function Desencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    copia.style.display = "block";
    Ocultar();
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function Ocultar(){
    mensaje.style.backgroundImage = "none";
    CambioTitulo.style.display = "none";
    CambioTexto.style.display = "none";
}

function Mostrar(){
    mensaje.style.backgroundImage = "url('./imagenes/ojo.png')";
    CambioTitulo.style.display = "block";
    CambioTexto.style.display = "block";
    copia.style.display = "none";
}

function Copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado");
    Mostrar();
}
