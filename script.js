const textArea= document.querySelector(".texto-cap");
const mensaje= document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btEncriptar(){
    const txtEnc = encriptar(textArea.value)
    mensaje.value = txtEnc
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}

function encriptar(stringEncriptada){

    let enCodigo =[["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < enCodigo.length; i++) {
        if(stringEncriptada.includes(enCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(enCodigo[i][0],enCodigo[i][1])

        }

    }
    return stringEncriptada
}


function btDesencriptar(){
    const txtEnc = desencriptar(textArea.value)
    mensaje.value = txtEnc
    textArea.value = "";

}


function desencriptar(stringDesencriptada){

    let enCodigo =[["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < enCodigo.length; i++) {
        if(stringDesencriptada.includes(enCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(enCodigo[i][1] ,enCodigo[i][0] )

        }

    }
    return stringDesencriptada
}

function copiar() {

     let mensaje= document.querySelector(".mensaje");
     let button = document.querySelector(".bt-copiar");

     navigator.clipboard.writeText(mensaje.value);
}



