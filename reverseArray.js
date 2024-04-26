function reverseArrayInPlace(array){
  //si es par, cambiamos posicion por posicion hasta llegar a la mitad
  //si es impar, el elemento al medio no lo cambiamos
  let longitud = array.length % 2 == 0 ? array.length / 2 : Math.floor(array.length / 2)
  
  for(let index=1; index <= longitud; index++){
        let value = array[index-1]
        array[index-1] = array[array.length-index]        
        array[array.length-index] = value
        
  }
  return array
}

reverseArrayInPlace([1,2,3,4,5,6])