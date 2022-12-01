function calcularModa (lista){
  const listaCount = {};

  for (let i = 0; i < lista.length; i++){
    const elemento = lista[i];

    if (listaCount[elemento]){
        listaCount[elemento] += 1;
    } else {
        listaCount[elemento] = 1;
    } 
    
  }
  // El metodo "Object.entries" transformamos un objeto en un array bidimensional, es decir un array con arrays por dentro. 

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  return moda;

  console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
}

function ordenarLista(listaDesordenada)
 {
  function ordenarListaSort(valorAcumulado, nuevoValor){
    return valorAcumulado - nuevoValor
  }
  
  

  const lista = listaDesordenada.sort(ordenarListaSort);

  return lista
 }
 // [ [0,1], [0,1], [0,1] ]
 function ordenarListaBidimensional(listaDesordenada, i)
 {
  function ordenarListaSort(valorAcumulado, nuevoValor){
   return valorAcumulado[i] - nuevoValor[i]
  }
  
  
  // const lista = listaDesordenada.sort((a,b) => a-b);
  const lista = listaDesordenada.sort(ordenarListaSort);

  return lista
 }