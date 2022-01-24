function encriptar(){
    var frase = document.getElementById('entrada').value; //Se obtiene la frase escrita por el usuario
    var frase_encriptada = frase.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat"); //Se realiza la encriptación según las reglas definidas
    frase = document.getElementById('entrada').value = ''; //Pone en blanco el espacio de entrada de texto
    var salida = document.getElementById('salida').value = frase_encriptada; //Coloca el resultado en el espacio de salida
}   

function desencriptar(){
    var frase = document.getElementById('entrada').value;//Se obtiene la frase escrita por el usuario
    var frase_desencriptada = frase.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");  //Se realiza la encriptación según las reglas definidas
    frase = document.getElementById('entrada').value = ''; //Pone en blanco el espacio de entrada de texto
    var salida = document.getElementById('salida').value = frase_desencriptada; //Coloca el resultado en el espacio de salida
} 

function copiarTexto(){
    var texto = document.querySelector('#salida'); //Selecciona el espacio dónde se encuentra el resultado del encriptado/desencriptado
    navigator.clipboard.writeText(texto.value); //Escribe el texto seleccionado en el resultado en el portapapeles
}
