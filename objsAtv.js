// Crie uma função que verifique
// corretamente o tipo de dado

function typeVerifier(obj) {
  return Object.prototype.toString.call(obj);
}
const test = [];
typeVerifier(test); // [object Array];

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const square = new Object;
Object.defineProperties(square, {
  lados: {
    value: 4,
    writable: false,
    enumerable: true
  }
});
Object.freeze(square);
console.log(Object.getOwnPropertyDescriptors(square));

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
