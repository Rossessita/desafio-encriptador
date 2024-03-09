const textArea = document.querySelector(".mensaje");
const textMensaje = document.querySelector(".mensaje-cifrado");
const $content = document.getElementById("mensaje-encriptado"),
      $btn = document.getElementById("copiar");
      
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    textMensaje.value = textoEncriptado 
    textArea.value = "";
    textMensaje.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    textMensaje.value = textoEncriptado 
    textArea.value = "";
}

$btn.addEventListener("click", e =>{
    $content.select();
    document.execCommand("copy");
    alert("Copiado");

})



function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"],["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"],["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptar;
}


