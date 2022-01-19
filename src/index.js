//import cipher from './cipher.js';
   import aCifrar from './cipher.js';
   //console.log (aCifrar);
//console.log(cipher);

      const textoCifrar = document.getElementById('textoCifrar'); 
      const submit = document.getElementById('submit');
      
      submit.addEventListener('click', function(){
       console.log(aCifrar.mayuscula());
      })
     
    //let mayuscula = textoCifrar.toUpperCase(); 
    //console.log(mayuscula.toUpperCase());
    
    /* cambiar por addEventListener() para juntar todos los eventos del botón y no repetir lo mismo
    document.getElementById('submit').onclick = function(){
         document.write(text1.value);  dentro de esta función se debe especificar el dato que se requiere mostrar cuando se hace click en submit 
    } */

   /* document.getElementById('text1').addEventListener('click', aMayusc);
      function aMayusc () {
         document.getElementById('text1').toUpperCase() 
         return text1.value.toUpperCase();
      } */

    
    



         

 



