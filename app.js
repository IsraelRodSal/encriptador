//Funcion para procesar el texto
function procesarTexto(texto, operacion){
    // Copia el texto original para modificarlo sin alterar el texto original
    let textoArea = texto;

    // Llamamos a la función validarMayusculas para evaluar si el texto tiene mayúsculas, acentos o caracteres especiales
    let evaluarTexto = validarMayusculas(texto);
    // Si el texto contiene mayúsculas, acentos o caracteres especiales, se muestra un mensaje de alerta y se termina la función
     if(evaluarTexto != true){
            alert("No se permite texto en mayúsculas, ni acentos ni caracteres especiales");
            limpiarCaja();
            return;
            } 
            // Si el texto pasa la validación, se realiza el cifrado o descifrado según la operación especificada
            else {
                if (operacion === 'cifrar') {
                    textoArea = textoArea.replaceAll('e',"enter")
                                    .replaceAll('i',"imes")
                                    .replaceAll('a',"ai")
                                    .replaceAll('o',"ober")
                                    .replaceAll('u',"ufat");
                } else if (operacion === 'descifrar') {
                    textoArea = textoArea.replaceAll('enter',"e")
                                    .replaceAll('imes',"i")
                                    .replaceAll('ai',"a")
                                    .replaceAll('ober',"o")
                                    .replaceAll('ufat',"u");
            }
            // Se asigna el resultado al área de texto de salida
            document.getElementById("outPutTextArea").value = textoArea;
            actualizarPantalla();
            limpiarCaja();
        }
}


//Función para cifrar el texto
function cifrarTexto(){
    // Se obtiene el texto de entrada y se llama a procesarTexto con la operación 'cifrar'
    procesarTexto(document.getElementById("inputTextArea").value, 'cifrar');
}

//Función para descifrar el texto
function descifrarTexto(){
    // Se obtiene el texto de entrada y se llama a procesarTexto con la operación 'descifrar'
    procesarTexto(document.getElementById("inputTextArea").value, 'descifrar');
}

//Función para copiar el texto y pegarlo en inputTextArea
function copiarTexto(){
        // navigator.clipboard.writeText(document.getElementById("outPutTextArea").value);
       // Se obtiene el texto del área de salida
       var textoCopiado = document.getElementById("outPutTextArea").value;
    
       // Se copia el texto al portapapeles
       navigator.clipboard.writeText(textoCopiado);

       // Se pega el texto en inputTextArea
       var inputTextArea = document.getElementById("inputTextArea");
       inputTextArea.value = textoCopiado;

       // Se coloca en blanco outPutTextArea
       document.getElementById("outPutTextArea").value = "";
}

//Función para validar si existe una mayúscula, acento o caracteres especiales en el texto
function validarMayusculas(texto){
    // Se utiliza una expresión regular para buscar caracteres en mayúscula, con acento o caracteres especiales
    return !/[A-ZÁÉÍÓÚÑáéíóúñ@#$%^&*(),.]/.test(texto);
}
    //const palabra1 = "Hola";
    //console.log(validarMayusculas(palabra1));

//Funcion para eliminar texto escrito

function limpiarCaja(){
    // Se elimina el texto una vez descifrado o cifrado
    document.getElementById("inputTextArea").value = "";
}
//Actualizar pantalla
function actualizarPantalla(){
    document.querySelector("#vacio").style.display="none";
    document.querySelector("#lleno").style.display="inline";
}