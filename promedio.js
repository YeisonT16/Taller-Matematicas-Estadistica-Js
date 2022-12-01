//[1,2,3,4]

function calcularPromedio(lista){
    //1. CON SICLOS FOR:  
   
     //  let sumaLista = 0;
   //  for (let i = 0; i < lista.length; i++){
   //      sumaLista = sumaLista + lista[i];
   //  }
 
    //2. USANDO EL METODO REDUCE:
 
   function sumarTodosElementos(valorAcumulado, nuevoValor){
     return valorAcumulado + nuevoValor;
   }
 
 
    const sumaLista = lista.reduce(sumarTodosElementos);
    
    //3. CON ARROW FUNCTIONS:
     
    //const ejemplo = (a, b) => a + b;
 
 
   // const sumarTodosElementos = (valorAcumulado, nuevoValor) => 
   //    valorAcumulado + nuevoValor;
  
    
   //EJEMPLO DE USO: 
 
    //const sumaLista = lista.reduce((a, b) => a + b);
    
   
 
     const promedio = sumaLista / lista.length;
     console.log(promedio);
     return promedio;
 }