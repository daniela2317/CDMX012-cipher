/* eslint-disable no-console */
import cipher from './cipher.js'

const submit = document.getElementById('cifrar');
   submit.addEventListener('click', function (){ 
      const offset = document.getElementById('numero').value;  
      const textoCifrar = document.getElementById('texto').value.toUpperCase();
      const msnCifrado = document.getElementById('resultado');          
   
         msnCifrado.innerHTML = cipher.encode(offset,textoCifrar);

   const descifra = document.getElementById('descifrar');
      descifra.addEventListener('click', function () {
         const textoDescifrar = document.getElementById('texto').value;
         /*const offset = document.getElementById('numero').value;  
         const textoCifrar = document.getElementById('texto').value.toUpperCase();
         const msnCifrado = document.getElementById('resultado');  */        
      
         msnCifrado.innerHTML = cipher.decode(offset,textoDescifrar);
      })
   })