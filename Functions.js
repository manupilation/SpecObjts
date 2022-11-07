function descricaoCarro() {
  return "Carro " + this.marca + " ano " + this.ano
}

const obj = {
  marca: 'Azdaha',
  ano: 2018
}

console.log(descricaoCarro.call(obj)); // "Carro Azdaha ano 2018"

function DOM(seletor) {
  this.element = document.querySelector(seletor)
}

DOM.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const li = {
  element: document.querySelector('li'),
}

const ul = new DOM('ul');
ul.ativo('ativar')
ul.ativo.call(li, 'ativoro');

console.log(ul);

const arrar = [1, 2, 3]

Array.prototype.mostrarThis = function () {
  console.log(this);
}

const lis = document.querySelectorAll('li')
console.log(lis);

const filt = Array.prototype.filter.call(lis, (el) => {
  return el.classList
})

console.log(filt);

const ne = [123,54,568,87668,7846,5]
console.log(Math.max.apply(null,ne));
