// Transforme em constructor function

// const pessoa = {
//   nome: 'NomeDaPessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + "andou.");
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function andar() {
    console.log(this.nome + " andou.");
  }
}

// Crie 3 pessoas

const Marco = new Pessoa('Marco', 22);
const Ana = new Pessoa('Ana', 25);
const Douglas = new Pessoa('Douglas', 12);

Marco.andar()
console.log(Ana.idade);
console.log(Douglas.nome);


// Crie uma constructor function Dom para manipulação de listas com as seguintes propriedades e métodos:
// elements: retorna NodeList com os elementos selecionados
// addClass: adiciona a classe a todos os elementos
// removeClass: remove a classe de todos os elementos

function DOM(element) {
  const getElements = document.querySelectorAll(element);

  this.elements = getElements

  this.addClass = (cl) => {
    this.elements.forEach((el) => {
      el.classList.add(cl)
    })
  }

  this.removeClass = (cl) => {
    this.elements.forEach((el) => {
        el.classList.remove(cl)
    })
  }
}

const dom = new DOM('li');

dom.addClass('cloro')
dom.removeClass('cloro')
