// ENCRIPTAR TEXTO
function encriptar(){
    // OBTENER INFORMACION DEL TEXAREA
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenPrincipal = document.getElementById("imgPrincipal");

    // CODIGO PARA ENCRIPTAR LAS VOCALES
    let textoCifrado = texto 
        .replace(/e/gi, "enter")
        .replace(/a/gi, "ai")
        .replace(/i/gi, "imes")
        .replace(/u/gi, "ufat")
        .replace(/o/gi, "ober");
    
    // CONDICIONALES POR SI EL USUARIO INGRESO TEXTO O NO
    if(texto.length !=0 ){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        imagenPrincipal.src ="./img/encriptado.png";
    }else{
        imagenPrincipal.src = "./img/principal.png";
        tituloMensaje.textContent = "No se ha ingresado texto para encriptar";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("Por favor ingresa algún texto para encriptar");
    }
}

// DESENCRIPTAR
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenPrincipal = document.getElementById("imgPrincipal");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado exitosamente";
        parrafo.textContent = "";
        imagenPrincipal.src = "./img/desencriptado.png";
    } else{
        imagenPrincipal.src = "./img/principal.png";
        tituloMensaje.textContent = "No se ha ingresado texto para encriptar";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("Por favor ingresa algún texto para encriptar");
    }
}