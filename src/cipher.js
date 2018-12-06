window.cipher = {
  encode: (text, offset) => {
    let resultadoCodificar = '';
    for(let i = 0; i < text.length; i++) {
      let textMay = text.toUpperCase();
      let textAscii = textMay.charCodeAt(i);
      let textoListo = ((textAscii -65 + parseInt(offset)) % 26) + 65;
      resultadoCodificar += String.fromCharCode(textoListo);
  }
  return resultadoCodificar;
 
  },
  decode: (textD, offsetD) => {
    let resultadoDecodificar = '';
    for(let i = 0; i < textD.length; i++) {
        let textMayD = textD.toUpperCase();
        let textAsciiD = textMayD.charCodeAt(i);
        let textoListoD = ((textAsciiD -90 - parseInt(offsetD)) % 26) + 90;
        resultadoDecodificar += String.fromCharCode(textoListoD);
      
  }
  return resultadoDecodificar;

}
};
