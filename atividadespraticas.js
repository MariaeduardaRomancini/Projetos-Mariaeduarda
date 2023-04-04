/*

  //Atividade 1 

    for(let i= 10; i > 0; i-- ){
            console.log(i)
 }

   

    let i = 1;
    while(i <= 10) {
    console.log(i)

    i++;
 }
  //Atividade 2

    var n = prompt ('número') 
     
       var total = n/2;

        if (n & 1) {
          alert("Impar")

        }else {
          alert("Par")
        }
          
        
 
 
  //Atividade 3 

    var a = +prompt ("Informe o primeiro número")
    var b = +prompt (" informe o segundo número")

    var media = ( (a + b) /2)
        console.log(" a média é:", media)
 

  // Atividade 4

    var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log(Math.max(...lista))


  //Atividade 5 

    var teste = [ 1, 2, 5, 4, 7, 5, 6, 10, 8, 9, 10, 20, 0, 5, ]
        var qtd = 0;
        for ( var s of teste) {
          if ( s === 5) qtd++;
   }
    console.log(qtd)

 
    //Atividade 6 
    var teste = ["1", "2", "5", "4", "7", "5", "6", "10", "8", "9", "10", "20", "0", "5,"];
      var buscar = "5";
        var indice =teste.indexOf(buscar);
    while(indice >= 0){
      teste.splice(indice, 1);
        indice = teste.indexOf(buscar);
   }
          console.log(teste);


   //Atividade 7 

   const i = ['oi' , 'tudo bem'];
     i.reverse();
      console.log(i);
 

   //Atividade 8 
      
      function checkPalindromo(str){
        let le = str.length;
          if (le === 0 || le === 1) {
          return true;
   }
      if (str[0] === str[le - 1]) {
        return checkPalindromo(str.slice(1, le - 1) );
   }  
         return false;
  };
  
      console.log(checkPalindromo("reviver"));
  
      console.log(checkPalindromo("luz azul"));
  
      console.log(checkPalindromo("manhã"));


   //Atividade 9 

     var fatorial = 5;
        var resultado = fatorial;
           var primeiroMultipicador = fatorial - 1;
           for (var i = primeiroMultipicador; i > 1; i--) {
           resultado *= i;
}

    console.log(resultado);

 */
   //Atividade 10
   function fibonacci(n){
    return n < 1 ? 0
    : n <= 2 ? 1
    :fibonacci (n -1) + fibonacci(n - 2);
    }
    
    console.log(fibonacci(21));
    
