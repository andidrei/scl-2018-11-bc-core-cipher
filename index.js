function codificar() {

  let text = document.getElementById("texto").value;
  let offset = document.getElementById("desplazar").value;

  let resultadoFinal = cipher.encode(text, offset);
  
  document.getElementById("textReturn").innerHTML = resultadoFinal;
  return resultadoFinal;
}

function decodificar() {
  let textD = document.getElementById("texto").value;
  let offsetD = document.getElementById("desplazar").value;

  let resultadoFinalD = cipher.decode(textD, offsetD);

  document.getElementById("textReturn").innerHTML = resultadoFinalD;
  return resultadoFinalD;
}
