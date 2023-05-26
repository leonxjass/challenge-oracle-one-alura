function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
  
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}   

function encriptar2() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
 
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
  }


  function copiarContenido() {
    var inputElement = document.querySelector(".btn-copiar"); // Cambia ".input-element" por la clase o ID de tu elemento de entrada
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
  }
  
  // Enlaza la función con un botón utilizando una clase o ID
  var botonCopiar = document.querySelector(".btn-copiar"); // Cambia ".btn-copiar" por la clase o ID de tu botón
  botonCopiar.addEventListener("click", copiarContenido);
  


/*
  function encriptar3(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    console.log("si lo copie");
  }
*/