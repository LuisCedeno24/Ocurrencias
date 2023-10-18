function map(arr, fn) {
    const returnArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const result = fn(arr[i], i);
      returnArray.push(result);
    }
  
    return returnArray;
  }
  
  // Ejemplo 1:
  const arr1 = [1, 2, 3];
  function plusone(n) {
    return n + 1;
  }
  const result1 = map(arr1, plusone);
  console.log(result1); // Salida: [2, 3, 4]
  
  // Ejemplo 2:
  const arr2 = [1, 2, 3];
  function plusI(n, i) {
    return n + i;
  }
  const result2 = map(arr2, plusI);
  console.log(result2); // Salida: [1, 3, 5]
  
  // Ejemplo 3:
  const arr3 = [10, 20, 30];
  function constante() {
    return 42;
  }
  const result3 = map(arr3, constante);
  console.log(result3); // Salida: [42, 42, 42]
  