/* eslint-disable no-console */
const cipher = {
  encode: (offset,textoCifrar) => {
     let cipherMess='';
      for (let i=0; i<textoCifrar.length; i++){
        //primero meter charCodeAt para hacerlo una cadena, unas líneas más abajo usar fromCharCode para retornar la letra no el número
        let asciiNum = textoCifrar.charCodeAt(i);
          if (asciiNum >= 65 && asciiNum <= 90){
            let ciphAscii = ((asciiNum - 65 + parseInt(offset)) %26 + 65);
            let ciphLetter = String.fromCharCode(ciphAscii);
              cipherMess += ciphLetter;    
    console.log(asciiNum)
        } else {
            cipherMess = cipherMess + textoCifrar[i];  
        }
    } 
    return cipherMess; 
     }, 

  decode: (offset,textoDescifrar) => {
    let messDesc='';
    for (let i=0; i<textoDescifrar.length; i++){
      let asciiDec = textoDescifrar.charCodeAt(i);
        if (asciiDec >= 65 && asciiDec <= 90){
          let asciiDecode = ((asciiDec - 90 - parseInt(offset)) %26 + 90);
          let decodeLetter = String.fromCharCode(asciiDecode);
            messDesc += decodeLetter;
      } else {
        messDesc = messDesc + textoDescifrar[i];
      }
    }
  return messDesc; 
  }
}

export default cipher