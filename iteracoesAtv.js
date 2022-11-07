// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const getCursos = Array.from(document.querySelectorAll('.curso'));

const objCursos = getCursos.reduce((acc, curr, i) => {
  const obj = {
    title: curr.querySelector('h1').innerText,
    description: curr.querySelector('p').innerText,
    classroom: curr.querySelector('.aulas').innerText,
    hours: curr.querySelector('.horas').innerText,
  }
  acc.push(obj);
  return acc;
}, []);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresQue100 = numeros.filter((numero) => {
  return numero > 100
}); // [333, 122, 322];


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixoInList = instrumentos.some(i => i === 'Baixo') // true

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalValue = compras.reduce((acc, curr) => {
  return acc + Number(curr.preco.slice(3).replace(',', '.'));
}, 0) // 49.42
