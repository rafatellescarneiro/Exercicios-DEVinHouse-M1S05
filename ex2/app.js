const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const arrayQuadrados = arrayNumeros.map(numero => numero ** 2);

console.log(arrayQuadrados);

const arrayFiltrados = arrayQuadrados.filter(numero => numero > 30)

console.log(arrayFiltrados);